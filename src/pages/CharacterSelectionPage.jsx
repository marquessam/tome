import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useGame } from '../contexts/GameContext';
import CharacterCard from '../components/character/CharacterCard';
import '../styles/CharacterSelectionPage.css';

const CharacterSelectionPage = () => {
  const { worldId } = useParams();
  const navigate = useNavigate();
  const { 
    loadWorld, 
    switchCharacter, 
    gameState, 
    loading, 
    error 
  } = useGame();
  
  // Load world data on mount
  useEffect(() => {
    if (!gameState || gameState.id !== worldId) {
      loadWorld(worldId);
    }
  }, [worldId, gameState, loadWorld]);
  
  // Handle character selection
  const handleSelectCharacter = (characterId) => {
    switchCharacter(characterId);
    navigate(`/worlds/${worldId}/play`);
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
  
  // Sort characters by level (highest first) then by creation date (newest first)
  const sortedCharacters = [...gameState.characters].sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level;
    return new Date(b.created) - new Date(a.created);
  });
  
  return (
    <div className="character-selection-page">
      <div className="character-selection-container">
        <h1>Choose Your Character</h1>
        <p className="world-name">World: {gameState.name}</p>
        
        <div className="character-list">
          {sortedCharacters.length > 0 ? (
            sortedCharacters.map(character => (
              <CharacterCard
                key={character.id}
                character={character}
                onClick={() => handleSelectCharacter(character.id)}
              />
            ))
          ) : (
            <p className="no-characters">No characters found in this world.</p>
          )}
          
          <div className="create-new-character">
            <Link 
              to={`/worlds/${worldId}/characters/new`}
              className="create-character-button"
            >
              <div className="character-card new-character">
                <div className="card-content">
                  <div className="new-character-icon">+</div>
                  <h3>Create New Character</h3>
                </div>
              </div>
            </Link>
          </div>
        </div>
        
        <div className="back-button-container">
          <Link to="/worlds" className="back-button">
            Back to World Selection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelectionPage;
