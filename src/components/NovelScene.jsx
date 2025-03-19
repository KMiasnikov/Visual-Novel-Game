import React, { useEffect, useRef } from 'react';
import sceneOverlay from '../assets/images/backgrounds/scene-overlay.svg';

const NovelScene = ({ sceneData, onChoice }) => {
  // Destructure scene data for easier access
  const { background, characters, dialog, choices } = sceneData;
  
  // Create refs for dialog box and characters
  const dialogBoxRef = useRef(null);
  const charactersRef = useRef([]);
  
  // Effect to position characters at the top of dialog box
  useEffect(() => {
    const positionCharacters = () => {
      if (!dialogBoxRef.current) return;
      
      // Get the dialog box's position from the top of the viewport
      const dialogRect = dialogBoxRef.current.getBoundingClientRect();
      const dialogTop = dialogRect.top;
      
      // Update each character's position to align with dialog box top
      charactersRef.current.forEach(charEl => {
        if (charEl) {
          // Position character so its bottom aligns with dialog top
          charEl.style.bottom = `${window.innerHeight - dialogTop}px`;
          charEl.style.top = 'auto'; // Reset top property
        }
      });
    };
    
    // Position characters initially and on window resize
    positionCharacters();
    window.addEventListener('resize', positionCharacters);
    
    // Clean up event listener
    return () => window.removeEventListener('resize', positionCharacters);
  }, [dialog, choices]); // Re-run when dialog or choices change as they affect dialog box size
  
  return (
    <div className="novel-scene">
      {/* Background image with overlay */}
      {background && (
        <>
          <img 
            src={background} 
            alt="Scene Background" 
            className="scene-background fade-in"
          />
          <img 
            src={sceneOverlay} 
            alt="" 
            className="scene-overlay"
            aria-hidden="true"
          />
        </>
      )}
      
      {/* Characters */}
      {characters && characters.map((character, index) => (
        <img 
          key={index}
          ref={el => charactersRef.current[index] = el}
          src={character.image} 
          alt={character.name || 'Character'}
          className={`character ${character.position} ${character.speaking ? 'speaking' : ''}`}
          style={{ 
            zIndex: character.speaking ? 5 : (character.zIndex || 1),
            opacity: character.speaking ? 1 : 0.7,
            filter: character.speaking ? 'drop-shadow(0 0 10px rgba(255,255,255,0.3))' : 'grayscale(0.2)'
          }}
        />
      ))}
      
      {/* Dialog box */}
      <div className="dialog-box slide-up" ref={dialogBoxRef}>
        <div className="dialog-content">
          <div className="dialog-text">
            {dialog.speaker && (
              <span className="speaker-prefix">{dialog.speaker}: </span>
            )}
            {dialog.text}
          </div>
        </div>
        
        {/* Choices */}
        {choices && choices.length > 0 && (
          <div className="choices-container">
            {choices.map((choice) => (
              <button 
                key={choice.id}
                className="choice-button"
                onClick={() => onChoice(choice.id)}
              >
                <span className="choice-text">{choice.text}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NovelScene;