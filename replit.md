# EmulatorJS - Retro Gaming Emulator

## Overview
A complete single-file HTML retro gaming emulator powered by EmulatorJS. Play classic games from NES, SNES, Game Boy, GBA, N64, PlayStation 1, and many more systems directly in your browser.

## Current State
The emulator is fully functional and running on port 5000. Users can:
- Select from multiple gaming systems (NES, SNES, GB, GBA, Genesis, N64, PS1, etc.)
- Upload ROM files in various formats (.7z, .zip, and others)
- Play games with keyboard or gamepad controls
- Manage a game library with local storage persistence
- Navigate between setup and library views

## Recent Changes
- **November 14, 2025**: Initial deployment
  - Copied complete single-file HTML emulator to index.html
  - Configured Python HTTP server workflow on port 5000
  - Verified EmulatorJS integration and functionality

## Project Architecture

### Single-File Structure
- **index.html**: Complete application with embedded CSS, JavaScript, and dependencies
  - EmulatorJS CDN integration for emulator cores
  - JSZip library for archive extraction
  - libarchive.js for 7z support
  - LocalStorage API for game library persistence
  - Modern gradient-based UI with blue theme

### Supported Systems
- Nintendo: NES, SNES, N64, Game Boy, Game Boy Color, Game Boy Advance, Virtual Boy
- Sega: Genesis/Mega Drive, Master System, Game Gear, Saturn, Dreamcast
- Sony: PlayStation 1
- Atari: 2600, 5200, 7800, Lynx, Jaguar
- Arcade: MAME 2003, Neo Geo Pocket
- Other: 3DO, WonderSwan, Vectrex

### Key Features
- **ROM Upload**: Drag-and-drop or file browser upload
- **Archive Support**: Automatic extraction of .zip and .7z files
- **Game Library**: Persistent storage of uploaded games
- **Responsive Design**: Animated, modern UI with glow effects
- **Fullscreen Mode**: Optimal gaming experience
- **Save States**: Managed by EmulatorJS (browser-based)

## Technical Details

### Dependencies
All dependencies are loaded via CDN:
- EmulatorJS (core emulation library)
- JSZip 3.10.1 (ZIP file extraction)
- libarchive.js 1.3.0 (7z and other archive formats)

### Workflow
- **Name**: emulator
- **Command**: `python3 -m http.server 5000`
- **Port**: 5000
- **Type**: Static file server for single HTML application

## Usage Instructions

1. **Select System**: Choose your gaming platform from the dropdown
2. **Upload ROM**: Click to browse or drag-and-drop a ROM file
3. **Start Game**: Click "Start Game" to launch the emulator
4. **Controls**: Use keyboard or connect a gamepad
5. **Library**: Access previously uploaded games from the library view

## User Preferences
None specified yet.

## Notes
- Entirely client-side application (no backend required)
- ROMs are stored in browser LocalStorage
- Compatible with modern browsers supporting WebAssembly
- File size limits depend on browser storage quotas
