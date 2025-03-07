import React, { createContext, useContext, useState, useEffect } from 'react';
import * as GameEngine from '../utils/gameEngine';

// Create the context
const GameContext = createContext();

// Custom hook to use the game context
export const useGame = () => useContext(GameContext);

// Provider component
export const GameProvider = ({ children }) => {
  // State for current game
  const [gameState, setGameState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // State for current character
  const [currentCharacter, setCurrentCharacter] = useState(null);
  
  // State for tile and encounter tracking
  const [currentTile, setCurrentTile] = useState(null);
  const [activeEncounter, setActiveEncounter] = useState(null);
  const [combatState, setCombatState] = useState(null);
  
  // Load the character whenever gameState changes
  useEffect(() => {
    if (gameState && gameState.currentCharacterId) {
      const character = GameEngine.getCurrentCharacter(gameState);
      setCurrentCharacter(character);
      
      // Also load the current tile
      if (character) {
        const tile = GameEngine.getMapTile(
          gameState,
          character.position.x,
          character.position.y
        );
        setCurrentTile(tile);
      }
    }
  }, [gameState]);
  
  // Create a new world
  const createWorld = (worldName) => {
    setLoading(true);
    setError(null);
    
    try {
      const newGame = GameEngine.createNewWorld(worldName);
      setGameState(newGame);
      setLoading(false);
      return newGame;
    } catch (err) {
      console.error('Failed to create world:', err);
      setError('Failed to create world: ' + (err.message || String(err)));
      setLoading(false);
      return null;
    }
  };
  
  // Load a saved world
  const loadWorld = (worldId) => {
    setLoading(true);
    setError(null);
    
    try {
      const savedGame = GameEngine.loadGameState(worldId);
      if (!savedGame) {
        throw new Error('World not found');
      }
      setGameState(savedGame);
      setLoading(false);
      return savedGame;
    } catch (err) {
      console.error('Failed to load world:', err);
      setError('Failed to load world: ' + (err.message || String(err)));
      setLoading(false);
      return null;
    }
  };
  
  // Get list of saved worlds
  const getSavedWorlds = () => {
    try {
      return GameEngine.listSavedGames();
    } catch (err) {
      console.error('Failed to list saved worlds:', err);
      setError('Failed to list saved worlds: ' + (err.message || String(err)));
      return [];
    }
  };
  
  // Create a new character
  const createCharacter = (worldId, characterName) => {
    setLoading(true);
    setError(null);
    
    try {
      // Load the world first if not already loaded
      let world = gameState;
      if (!world || world.id !== worldId) {
        world = GameEngine.loadGameState(worldId);
        setGameState(world);
      }
      
      const newCharacter = GameEngine.createNewCharacter(world, characterName);
      setGameState({...world});
      setCurrentCharacter(newCharacter);
      setLoading(false);
      return newCharacter;
    } catch (err) {
      console.error('Failed to create character:', err);
      setError('Failed to create character: ' + (err.message || String(err)));
      setLoading(false);
      return null;
    }
  };
  
  // Switch to a different character
  const switchCharacter = (characterId) => {
    if (!gameState) return null;
    
    try {
      const character = GameEngine.switchCharacter(gameState, characterId);
      setGameState({...gameState});
      setCurrentCharacter(character);
      
      // Load the character's current tile
      const tile = GameEngine.getMapTile(
        gameState,
        character.position.x,
        character.position.y
      );
      setCurrentTile(tile);
      
      return character;
    } catch (err) {
      console.error('Failed to switch character:', err);
      setError('Failed to switch character: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Movement functions
  const moveCharacter = (direction) => {
    if (!gameState || !currentCharacter) return null;
    
    try {
      const result = GameEngine.moveCharacter(gameState, direction);
      setGameState({...gameState});
      setCurrentCharacter(result.character);
      setCurrentTile(result.tile);
      setActiveEncounter(null); // Reset active encounter on movement
      return result;
    } catch (err) {
      console.error('Failed to move:', err);
      setError('Failed to move: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Explore current tile
  const exploreTile = () => {
    if (!gameState || !currentTile) return null;
    
    try {
      const exploredTile = GameEngine.exploreTile(gameState, currentTile.id);
      setGameState({...gameState});
      setCurrentTile(exploredTile);
      return exploredTile;
    } catch (err) {
      console.error('Failed to explore tile:', err);
      setError('Failed to explore tile: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Set active encounter
  const setEncounter = (encounterId) => {
    if (!currentTile) return null;
    
    const encounter = currentTile.encounters.find(enc => enc.id === encounterId);
    setActiveEncounter(encounter || null);
    setCombatState(encounter?.combat || null);
    return encounter;
  };
  
  // Initiate combat for an encounter
  const startCombat = (encounterId) => {
    if (!gameState) return null;
    
    try {
      const combat = GameEngine.initiateCombat(gameState, encounterId);
      setGameState({...gameState});
      setActiveEncounter({...activeEncounter, combat});
      setCombatState(combat);
      return combat;
    } catch (err) {
      console.error('Failed to start combat:', err);
      setError('Failed to start combat: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Perform combat action
  const performCombatAction = (action, targetId) => {
    if (!gameState || !activeEncounter) return null;
    
    try {
      const result = GameEngine.performCombatAction(
        gameState,
        activeEncounter.id,
        action,
        targetId
      );
      
      setGameState({...gameState});
      
      // If combat is over, refresh character and update encounter
      if (result.combat) {
        setCombatState(result.combat);
        setActiveEncounter({...activeEncounter, combat: result.combat});
      } else {
        // Combat ended - update UI
        setCombatState(null);
        
        // Reload the tile to get updated encounter
        const updatedTile = GameEngine.getMapTile(
          gameState,
          currentCharacter.position.x,
          currentCharacter.position.y,
          true // Force reload
        );
        setCurrentTile(updatedTile);
        
        // Find the updated encounter
        const updatedEncounter = updatedTile.encounters.find(
          enc => enc.id === activeEncounter.id
        );
        setActiveEncounter(updatedEncounter);
        
        // Update current character
        setCurrentCharacter(GameEngine.getCurrentCharacter(gameState));
      }
      
      return result;
    } catch (err) {
      console.error('Failed to perform action:', err);
      setError('Failed to perform action: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Resolve a non-combat encounter
  const resolveEncounter = (outcome) => {
    if (!gameState || !currentTile || !activeEncounter) return null;
    
    try {
      const result = GameEngine.resolveEncounter(
        gameState,
        currentTile.id,
        activeEncounter.id,
        outcome
      );
      
      setGameState({...gameState});
      
      // Reload the tile to get updated encounter status
      const updatedTile = GameEngine.getMapTile(
        gameState,
        currentCharacter.position.x,
        currentCharacter.position.y,
        true // Force reload
      );
      setCurrentTile(updatedTile);
      
      // Find the updated encounter
      const updatedEncounter = updatedTile.encounters.find(
        enc => enc.id === activeEncounter.id
      );
      setActiveEncounter(updatedEncounter);
      
      // Update current character
      setCurrentCharacter(GameEngine.getCurrentCharacter(gameState));
      
      return result;
    } catch (err) {
      console.error('Failed to resolve encounter:', err);
      setError('Failed to resolve encounter: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Use an item from inventory
  const useItem = (itemId) => {
    if (!gameState || !currentCharacter) return null;
    
    try {
      // For now, only handle consumable items
      const item = currentCharacter.inventory.find(item => item.id === itemId);
      
      if (!item) throw new Error('Item not found in inventory');
      
      if (item.type === 'consumable') {
        // For potions, just apply healing directly
        if (item.subtype === 'potion' && item.effects.healing) {
          const healAmount = item.effects.healing;
          const characterIndex = gameState.characters.findIndex(
            char => char.id === currentCharacter.id
          );
          
          // Apply healing
          const newHealth = Math.min(
            currentCharacter.maxHealth,
            currentCharacter.health + healAmount
          );
          gameState.characters[characterIndex].health = newHealth;
          
          // Remove item from inventory
          gameState.characters[characterIndex].inventory = 
            gameState.characters[characterIndex].inventory.filter(i => i.id !== itemId);
          
          // Update state
          setGameState({...gameState});
          setCurrentCharacter({...currentCharacter, health: newHealth});
          
          return {
            success: true,
            message: `Used ${item.name} and healed for ${healAmount} health.`,
            healAmount
          };
        }
      }
      
      throw new Error('This item cannot be used directly');
    } catch (err) {
      console.error('Failed to use item:', err);
      setError('Failed to use item: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Equip an item
  const equipItem = (itemId) => {
    if (!gameState || !currentCharacter) return null;
    
    try {
      const item = currentCharacter.inventory.find(item => item.id === itemId);
      
      if (!item) throw new Error('Item not found in inventory');
      
      if (item.type !== 'weapon' && item.type !== 'armor') {
        throw new Error('This item cannot be equipped');
      }
      
      const characterIndex = gameState.characters.findIndex(
        char => char.id === currentCharacter.id
      );
      
      // If an item is already equipped in this slot, unequip it
      const currentEquipped = gameState.characters[characterIndex].equipped[item.type];
      
      // Update equipped items
      if (!gameState.characters[characterIndex].equipped) {
        gameState.characters[characterIndex].equipped = {};
      }
      gameState.characters[characterIndex].equipped[item.type] = item;
      
      // Update game state
      setGameState({...gameState});
      setCurrentCharacter(gameState.characters[characterIndex]);
      
      return {
        success: true,
        message: `Equipped ${item.name}.`,
        previousItem: currentEquipped
      };
    } catch (err) {
      console.error('Failed to equip item:', err);
      setError('Failed to equip item: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Unequip an item
  const unequipItem = (type) => {
    if (!gameState || !currentCharacter || !currentCharacter.equipped || !currentCharacter.equipped[type]) return null;
    
    try {
      const characterIndex = gameState.characters.findIndex(
        char => char.id === currentCharacter.id
      );
      
      const currentEquipped = gameState.characters[characterIndex].equipped[type];
      gameState.characters[characterIndex].equipped[type] = null;
      
      // Update game state
      setGameState({...gameState});
      setCurrentCharacter(gameState.characters[characterIndex]);
      
      return {
        success: true,
        message: `Unequipped ${currentEquipped.name}.`,
        unequippedItem: currentEquipped
      };
    } catch (err) {
      console.error('Failed to unequip item:', err);
      setError('Failed to unequip item: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Level up character
  const levelUpCharacter = () => {
    if (!gameState || !currentCharacter) return null;
    
    try {
      const updatedCharacter = GameEngine.levelUpCharacter(
        gameState,
        currentCharacter.id
      );
      
      setGameState({...gameState});
      setCurrentCharacter(updatedCharacter);
      
      return updatedCharacter;
    } catch (err) {
      console.error('Failed to level up:', err);
      setError('Failed to level up: ' + (err.message || String(err)));
      return null;
    }
  };
  
  // Check if character can level up
  const canLevelUp = () => {
    if (!currentCharacter) return false;
    
    const requiredXP = currentCharacter.level * 100; // Simple formula from game engine
    return (currentCharacter.xp || 0) >= requiredXP;
  };
  
  // Clear error
  const clearError = () => setError(null);
  
  // Provide all these functions and state to the app
  const value = {
    gameState,
    loading,
    error,
    currentCharacter,
    currentTile,
    activeEncounter,
    combatState,
    // World functions
    createWorld,
    loadWorld,
    getSavedWorlds,
    // Character functions
    createCharacter,
    switchCharacter,
    moveCharacter,
    levelUpCharacter,
    canLevelUp,
    // Exploration
    exploreTile,
    setEncounter,
    // Combat
    startCombat,
    performCombatAction,
    resolveEncounter,
    // Inventory
    useItem,
    equipItem,
    unequipItem,
    // Utility
    clearError
  };
  
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};
