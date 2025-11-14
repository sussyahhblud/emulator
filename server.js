import express from 'express';
import cors from 'cors';
import { Dropbox } from 'dropbox';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

const DROPBOX_SHARED_LINK = 'https://www.dropbox.com/scl/fo/eu6iqii35hxok71wtf44m/AEOPRf6qTtOF6pZavR_vCZM?rlkey=7ugblis87t1qymdq2fk91vdqs&st=x252twr7&dl=0';

let connectionSettings = null;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=dropbox',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Dropbox not connected');
  }
  return accessToken;
}

async function getDropboxClient() {
  const accessToken = await getAccessToken();
  return new Dropbox({ accessToken });
}

app.get('/api/roms', async (req, res) => {
  try {
    const dbx = await getDropboxClient();
    
    const response = await dbx.filesListFolder({
      path: '',
      shared_link: {
        url: DROPBOX_SHARED_LINK
      }
    });

    const roms = response.result.entries
      .filter(entry => entry['.tag'] === 'file')
      .map(entry => ({
        name: entry.name,
        path: entry.path_lower,
        size: entry.size,
        id: entry.id
      }));

    res.json({ roms });
  } catch (error) {
    console.error('Error fetching ROMs:', error);
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/rom/download', async (req, res) => {
  try {
    const { path } = req.body;
    
    if (!path) {
      return res.status(400).json({ error: 'Path is required' });
    }

    const dbx = await getDropboxClient();
    
    const response = await dbx.sharingGetSharedLinkFile({
      url: DROPBOX_SHARED_LINK,
      path: path
    });

    res.set({
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename="${response.result.name}"`
    });
    
    res.send(response.result.fileBinary);
  } catch (error) {
    console.error('Error downloading ROM:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`EmulatorJS server running on port ${PORT}`);
});
