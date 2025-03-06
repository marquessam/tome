import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import Card from '../components/common/Card';
import '../styles/CharacterCreationPage.css';

const CharacterCreationPage = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();
  const { 
    loadWorld, 
    createCharacter, 
    gameState, 
    loading, 
    error 
  } = useGame();
  
  const [characterName, setCharacterName] = useState('');
  const [showCards, setShowCards] = useState(true);
  
  // Load world data on mount if needed
  useEffect(() => {
    if (!gameState || gameState.id !== worldId) {
      loadWorld(worldId);
    }
  }, [worldId, gameState, loadWorld]);
  
  // Handle character creation
  const handleCreateCharacter = (e) => {
    e.preventDefault();
    
    if (!characterName.trim()) {
      alert('Please enter a character name');
      return;
    }
    
    const newCharacter = createCharacter(worldId, characterName);
    if (newCharacter) {
      navigate(`/worlds/${worldId}/play`);
    }
  };
  
  if (loading) {
    return <div className="loading">Loading world data...</div>;
  }
  
  if (error) {
    return <div className="error-message">{error}</div>;
  }
  
  if (!gameState) {
    return <div className="error-message">World not found</div>;
  }
  
  // These cards are just for visual display
  const mockCards = {
    race: { suit: 'hearts', rank: 'ace' },
    class: { suit: 'diamonds', rank: 'king' }
  };
  
  return (
    <div className="character-creation-page">
      <div className="character-creation-container">
        <h1>Create Your Character</h1>
        <p className="world-info">World: {gameState.name}</p>
        
        {showCards && (
          <div className="character-card-draw">
            <div className="card-draw-info">
              <h3>Card Draw</h3>
              <p>In Card RPG, your character's race and class are determined by the cards you draw.</p>
            </div>
            
            <div className="card-display">
              <div className="card-section">
                <h4>Race Card</h4>
                <Card suit={mockCards.race.suit} rank={mockCards.race.rank} size="large" />
                <p>This determines your character's race</p>
              </div>
              
              <div className="card-section">
                <h4>Class Card</h4>
                <Card suit={mockCards.class.suit} rank={mockCards.class.rank} size="large" />
                <p>This determines your character's class</p>
              </div>
            </div>
          </div>
        )}
        
        <form onSubmit={handleCreateCharacter} className="character-form">
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
          
          <p className="creation-note">
            When you create your character, cards will be drawn to determine your race and class.
            Your starting equipment and abilities will be based on these cards.
          </p>
          
          <div className="form-actions">
            <Link to={`/worlds/${worldId}/characters`} className="cancel-button">
              Cancel
            </Link>
            <button 
              type="submit" 
              className="create-button primary-button"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Create Character & Begin'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CharacterCreationPage;
