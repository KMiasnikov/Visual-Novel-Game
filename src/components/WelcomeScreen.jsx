import React from 'react';
import welcomeBg from '../assets/images/backgrounds/welcome-bg-enhanced.svg';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-screen" style={{ backgroundImage: `url(${welcomeBg})` }}>
      <h1 className="welcome-title">Destined Paths</h1>
      <p className="welcome-message">
        Embark on a journey of chance encounters and life-changing decisions. 
        Your choices will shape the story of two strangers whose paths are about to cross.
      </p>
      <button className="start-button" onClick={onStart}>
        Begin Your Story
      </button>
    </div>
  );
};

export default WelcomeScreen;