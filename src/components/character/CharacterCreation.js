import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';

function CharacterCreation() {
  const [characterName, setCharacterName] = useState('');
  const { createCharacter, world } = useGame();
  const navigate = useNavigate();
  
  const handleCreateCharacter = (e) => {
    e.preventDefault();
    
    if (!characterName.trim()) {
      alert('Please enter a character name');
      return;
    }
    
    const newCharacter = createCharacter(characterName);
    navigate('/game');
  };
  
  if (!world) {
    navigate('/');
    return null;
  }
  
  return (
    <div className="character-creation-container">
      <h1>Create Your Character</h1>
      <p>World: {world.name}</p>
      
      <form onSubmit={handleCreateCharacter}>
        <div className="form-group">
          <label htmlFor="characterName">Character Name:</label>
          <input
            type="text"
            id="characterName"
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
            placeholder="Enter character name"
            required
          />
        </div>
        
        <button type="submit">Create Character & Begin Adventure</button>
      </form>
    </div>
  );
}

export default CharacterCreation;
