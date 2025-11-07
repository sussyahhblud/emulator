# EmulatorJS - Retro Gaming Emulator

## Overview
A single-file HTML retro gaming emulator application that allows users to play classic games from various gaming systems directly in the browser. Built with EmulatorJS, this project provides a beautiful, user-friendly interface for loading and playing ROM files.

## Project Type
Static frontend web application - no backend required

## Features
- Support for 25+ retro gaming systems including:
  - Nintendo: NES, SNES, N64, Game Boy, GBA, GBC, Nintendo DS
  - Sega: Genesis/Mega Drive, Master System, Game Gear, Saturn, CD, 32X
  - PlayStation 1
  - Atari: 2600, 7800, Lynx, Jaguar
  - And many more!
- Local ROM library with pre-loaded games:
  - Super Mario 64 (N64)
  - Super Mario Bros. (NES)
  - Super Mario World (SNES)
- Drag & drop ROM file upload
- Save/load game states
- Keyboard and gamepad controller support
- Responsive design with modern UI

## Project Structure
```
.
├── emulator-standalone.html  # Main application file with all HTML/CSS/JS
├── roms/                     # Local ROM files directory
│   ├── Super Mario 64 (USA).z64
│   ├── Super Mario Bros. (World).nes
│   └── Super Mario World (USA).sfc
├── logo.png                  # Application logo
├── server.py                 # Python HTTP server for local development
└── README.md                 # Project description
```

## Technology Stack
- **Frontend**: Pure HTML5, CSS3, JavaScript
- **Emulation**: EmulatorJS (loaded from CDN)
- **Server**: Python 3.11 with built-in HTTP server

## Development
The application runs on port 5000 using a simple Python HTTP server that:
- Serves the static HTML file
- Redirects root path to emulator-standalone.html
- Disables caching for development
- Serves local ROM files from the roms/ directory

## Recent Changes
- **2025-11-06**: ROM Library Update
  - Replaced external ROM manifest with local ROM library
  - Added 3 local Super Mario games (N64, NES, SNES) in roms/ folder
  - Updated handleRomClick function to support .nes and .sfc formats
  - ROM library now loads games from local files instead of external URLs
  
- **2025-11-06**: Initial Replit setup
  - Installed Python 3.11
  - Created server.py to serve static files on port 5000
  - Configured workflow for automatic server startup
  - Added .gitignore for Python projects
  - Created project documentation

## Controls
- **Keyboard**: Arrow Keys (D-Pad), Z/X (A/B), Enter (Start), Shift (Select)
- **Save State**: Shift+F2
- **Load State**: Shift+F4
- **Gamepad**: Native controller support when connected

## How to Use
### Option 1: Play Local ROMs (Recommended)
1. Click the arrow button (➜) in the header to access the ROM Library
2. Select a game from the local collection
3. The game will automatically load and start

### Option 2: Upload Your Own ROMs
1. Select a gaming system from the dropdown
2. Upload a ROM file for that system (supports .7z, .zip, and raw ROM files)
3. Click "Start Game" to begin playing
4. Use keyboard or gamepad controls

## Dependencies
- Python 3.11 (for development server only)
- EmulatorJS CDN (loaded at runtime)

## Deployment
This is a static site that can be deployed to any static hosting platform. The deployment is configured to serve the emulator.html file.
