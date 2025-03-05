import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';
import Map from '../Map/Map';
import CardDeck from '../Card/CardDeck';
import CharacterInfo from '../Character/CharacterInfo';

function GameScreen() {
  const { world, character, generateTile } = useGame();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!world || !character) {
      navigate('/');
      return;
    }
    
    // Generate the starting tile if it doesn't exist
    generateTile(character.position.x, character.position.y);
  }, [world, character, navigate, generateTile]);
  
  if (!world || !character) {
    return null;
  }
  
  return (
    <div className="game-screen">
      <div className="game-header">
        <h1>{world.name}</h1>
        <p>Great Threat: {world.greatThreat.name}</p>
      </div>
      
      <div className="game-content">
        <div className="left-panel">
          <CharacterInfo character={character} />
          <CardDeck />
        </div>
        
        <div className="center-panel">
          <Map />
        </div>
        
        <div className="right-panel">
          <div className="location-info">
            {/* Location information will go here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
