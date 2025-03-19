import React, { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';
import NovelScene from './NovelScene';
import gameData from '../data/gameData';

const App = () => {
  // Game state
  const [gameStarted, setGameStarted] = useState(false);
  const [currentScene, setCurrentScene] = useState('intro');
  const [gameHistory, setGameHistory] = useState([]);
  
  // Start the game
  const startGame = () => {
    setGameStarted(true);
  };
  
  // Handle player choices
  const handleChoice = (choiceId) => {
    const currentSceneData = gameData.scenes[currentScene];
    const choice = currentSceneData.choices.find(c => c.id === choiceId);
    
    // Add current scene to history
    setGameHistory([...gameHistory, { 
      scene: currentScene, 
      choiceMade: choice.text 
    }]);
    
    // Move to the next scene
    setCurrentScene(choice.nextScene);
  };
  
  return (
    <div className="container">
      {!gameStarted ? (
        <WelcomeScreen onStart={startGame} />
      ) : (
        <NovelScene 
          sceneData={gameData.scenes[currentScene]} 
          onChoice={handleChoice} 
        />
      )}
    </div>
  );
};

export default App;