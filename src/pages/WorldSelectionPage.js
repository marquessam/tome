import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Card from '../components/common/Card';
import '../styles/WorldSelectionPage.css';

const WorldSelectionPage = () => {
  const navigate = useNavigate();
  const { createWorld, getSavedWorlds, loadWorld, gameState, loading, error } = useGame();
  
  const [worldName, setWorldName] = useState('');
  const [savedWorlds, setSavedWorlds] = useState([]);
  const [showNewWorldForm, setShowNewWorldForm] = useState(false);
  
  // Load saved worlds on component mount
  useEffect(() => {
    try {
      const worlds = getSavedWorlds();
      console.log('Loaded worlds:', worlds); // Debug log
      setSavedWorlds(worlds || []);
    } catch (err) {
      console.error('Error loading saved worlds:', err);
      setSavedWorlds([]); // Ensure we always have an array even on error
    }
  }, [getSavedWorlds]);
  
  // Handle world creation
  const handleCreateWorld = (e) => {
    e.preventDefault();
    
    if (!worldName.trim()) {
      alert('Please enter a world name');
      return;
    }
    
    try {
      const newWorld = createWorld(worldName);
      if (newWorld) {
        navigate(`/worlds/${newWorld.id}/characters/new`);
      } else {
        alert('Failed to create world. Please try again.');
      }
    } catch (err) {
      console.error('Error creating world:', err);
      alert(`Error creating world: ${err.message || 'Unknown error'}`);
    }
  };
  
  // Handle world selection
  const handleSelectWorld = (worldId) => {
    try {
      const world = loadWorld(worldId);
      if (world) {
        if (world.characters && world.characters.length > 0) {
          navigate(`/worlds/${worldId}/characters`);
        } else {
          navigate(`/worlds/${worldId}/characters/new`);
        }
      } else {
        alert('Failed to load world. It may be corrupted or no longer exists.');
      }
    } catch (err) {
      console.error('Error loading world:', err);
      alert(`Error loading world: ${err.message || 'Unknown error'}`);
    }
  };
  
  // Generate random cards for the visual effect
  const generateRandomCards = (count) => {
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    
    return Array.from({ length: count }, () => ({
      suit: suits[Math.floor(Math.random() * suits.length)],
      rank: ranks[Math.floor(Math.random() * ranks.length)]
    }));
  };
  
  const randomCards = generateRandomCards(8);
  
  // Check if there's an error loading worlds, handle gracefully
  if (error) {
    console.error('Error in WorldSelectionPage:', error);
  }
  
  return (
    <div className="world-selection-page">
      <div className="background-cards">
        {randomCards.map((card, index) => (
          <div key={index} className={`background-card card-${index}`}>
            <Card suit={card.suit} rank={card.rank} size="large" />
          </div>
        ))}
      </div>
      
      <div className="world-selection-container">
        <h1>Choose Your World</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <div className="worlds-section">
          {Array.isArray(savedWorlds) && savedWorlds.length > 0 ? (
            <>
              <h2>Continue Existing World</h2>
              <div className="world-list">
                {savedWorlds.map(world => (
                  <div 
                    key={world.id} 
                    className="world-item"
                    onClick={() => handleSelectWorld(world.id)}
                  >
                    <h3>{world.name}</h3>
                    <p>Created: {new Date(world.createdAt).toLocaleDateString()}</p>
                    <p>Great Threat: {gameState?.greatThreat?.name || "Unknown"}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="no-worlds-message">No saved worlds found. Create your first world!</p>
          )}
          
          {showNewWorldForm ? (
            <div className="new-world-form">
              <h2>Create New World</h2>
              <form onSubmit={handleCreateWorld}>
                <div className="form-group">
                  <label htmlFor="worldName">World Name:</label>
                  <input
                    type="text"
                    id="worldName"
                    value={worldName}
                    onChange={(e) => setWorldName(e.target.value)}
                    placeholder="Enter a name for your world"
                    required
                  />
                </div>
                <div className="form-actions">
                  <button type="button" onClick={() => setShowNewWorldForm(false)}>
                    Cancel
                  </button>
                  <button type="submit" disabled={loading} className="primary-button">
                    {loading ? 'Creating...' : 'Create World'}
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <button 
              className="create-world-button primary-button"
              onClick={() => setShowNewWorldForm(true)}
            >
              Create New World
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorldSelectionPage;
