# Visual Novel Game

An interactive visual novel game with branching storylines built with Electron and React.

## Features

- **Interactive Storytelling**: Experience a narrative that changes based on your choices
- **Character Interactions**: Meet and interact with various characters throughout the story
- **Beautiful Visuals**: Enjoy high-quality backgrounds and character illustrations
- **Immersive Experience**: Atmospheric design with smooth transitions between scenes
- **Cross-platform**: Available for Windows, macOS, and Linux

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (included with Node.js)

### Setup

1. Clone the repository or download the source code

```bash
git clone https://github.com/KMiasnikov/visual-novel-game.git
cd visual-novel-game
```

2. Install dependencies

```bash
npm install
```

## Usage

### Development

To run the application in development mode:

```bash
npm run dev
```

This will build the application using webpack in development mode and launch the Electron app.

Alternatively, you can run the webpack dev server separately:

```bash
npm run webpack-dev
```

And then start the Electron app:

```bash
npm start
```

### Building for Production

To build the application for production:

```bash
npm run build
```

This will create optimized production files in the `dist` directory.

### Packaging

To package the application for distribution:

```bash
npm run package
```

This will create distributable packages in the `Visual_Novel_Game` directory using electron-builder.

## Development Workflow

1. **Game Content**: Edit the `src/data/gameData.js` file to modify scenes, dialog, and choices
2. **UI Components**: Modify React components in the `src/components` directory
3. **Styling**: Update styles in the `src/styles` directory
4. **Assets**: Add or replace images in the `src/assets/images` directory

## Customization

### Adding New Scenes

To add a new scene to the game, edit the `gameData.js` file and add a new entry to the `scenes` object:

```javascript
scenes: {
  // Existing scenes...
  
  new_scene_id: {
    background: 'path/to/background/image.jpg',
    characters: [
      {
        name: 'CharacterName',
        position: 'left',
        speaking: true,
        image: CharacterImage
      }
    ],
    dialog: {
      speaker: 'CharacterName',
      text: 'Dialog text goes here...'
    },
    choices: [
      { id: 'choice1', text: 'Choice text', nextScene: 'next_scene_id' }
    ]
  }
}
```

## License

ISC
