import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../../contexts/GameContext';

function Home() {
  const [worldName, setWorldName] = useState('');
  const { initWorld, loadWorld, world } = useGame();
  const navigate = useNavigate();
  
  const handleCreateWorld = (e) => {
    e.preventDefault();
    
    if (!worldName.trim()) {
      alert('Please enter a world name');
      return;
    }
    
    const newWorld = initWorld(worldName);
    navigate('/create-character');
  };
  
  const handleLoadWorld = () => {
    loadWorld();
    
    if (!world) {
      alert('No saved world found');
      return;
    }
    
    navigate('/create-character');
  };
  
  return (
    <div className="home-container">
      <h1>Card RPG</h1>
      <p>A card-based persistent world RPG</p>
      
      <div className="options-container">
        <div className="create-world">
          <h2>Create New World</h2>
          <form onSubmit={handleCreateWorld}>
            <input
              type="text"
              value={worldName}
              onChange={(e) => setWorldName(e.target.value)}
              placeholder="Enter world name"
              required
            />
            <button type="submit">Create World</button>
          </form>
        </div>
        
        <div className="load-world">
          <h2>Continue Existing World</h2>
          <button onClick={handleLoadWorld}>Load World</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
