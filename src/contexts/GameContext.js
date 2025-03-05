import React, { createContext, useContext, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { createDeck, shuffleDeck, drawCard as drawCardUtil } from '../utils/cardUtils';

// Create the context
const GameContext = createContext();

// Custom hook to use the game context
export function useGame() {
  return useContext(GameContext);
}

// Provider component
export function GameProvider({ children }) {
  // Game state
  const [world, setWorld] = useState(null);
  const [character, setCharacter] = useState(null);
  const [map, setMap] = useState({});
  const [deck, setDeck] = useState([]);
  const [discard, setDiscard] = useState([]);
  const [penaltyCards, setPenaltyCards] = useState([]);
  const [gameStatus, setGameStatus] = useState('menu'); // 'menu', 'playing', 'gameover'
  const [loading, setLoading] = useState(false);
  
  // Initialize a new world
  const initWorld = (name) => {
    const newWorld = {
      id: nanoid(),
      name,
      seed: Date.now().toString(),
      created: new Date().toISOString(),
      greatThreat: generateGreatThreat(),
    };
    
    // Create and shuffle a new deck
    const newDeck = shuffleDeck(createDeck());
    
    setWorld(newWorld);
    setDeck(newDeck);
    setDiscard([]);
    setPenaltyCards([]);
    setMap({});
    
    // Save to local storage
    localStorage.setItem('cardRpgWorld', JSON.stringify(newWorld));
    localStorage.setItem('cardRpgDeck', JSON.stringify(newDeck));
    localStorage.setItem('cardRpgDiscard', JSON.stringify([]));
    localStorage.setItem('cardRpgMap', JSON.stringify({}));
    
    return newWorld;
  };
  
  // Load saved world from local storage
  const loadWorld = () => {
    const savedWorld = localStorage.getItem('cardRpgWorld');
    const savedDeck = localStorage.getItem('cardRpgDeck');
    const savedDiscard = localStorage.getItem('cardRpgDiscard');
    const savedMap = localStorage.getItem('cardRpgMap');
    
    if (savedWorld) {
      setWorld(JSON.parse(savedWorld));
    }
    
    if (savedDeck) {
      setDeck(JSON.parse(savedDeck));
    }
    
    if (savedDiscard) {
      setDiscard(JSON.parse(savedDiscard));
    }
    
    if (savedMap) {
      setMap(JSON.parse(savedMap));
    }
  };
  
  // Create a new character
  const createCharacter = (name) => {
    // Draw two cards for character creation (race and class)
    const { drawnCard: raceCard, newDeck: deckAfterRace, newDiscard: discardAfterRace } = 
      drawCardUtil(deck, discard);
      
    const { drawnCard: classCard, newDeck: finalDeck, newDiscard: finalDiscard } = 
      drawCardUtil(deckAfterRace, discardAfterRace);
    
    const newCharacter = {
      id: nanoid(),
      name,
      race: getRaceFromCard(raceCard),
      class: getClassFromCard(classCard),
      stats: calculateBaseStats(raceCard, classCard),
      position: { x: 0, y: 0 },
      inventory: [],
      health: 10,
      maxHealth: 10,
      alive: true,
      cardDraws: {
        race: raceCard,
        class: classCard
      }
    };
    
    setCharacter(newCharacter);
    setDeck(finalDeck);
    setDiscard(finalDiscard);
    
    // Save to local storage
    localStorage.setItem('cardRpgCharacter', JSON.stringify(newCharacter));
    localStorage.setItem('cardRpgDeck', JSON.stringify(finalDeck));
    localStorage.setItem('cardRpgDiscard', JSON.stringify(finalDiscard));
    
    return newCharacter;
  };
  
  // Draw a card for gameplay
  const drawCard = () => {
    const { drawnCard, newDeck, newDiscard } = drawCardUtil(deck, discard);
    
    setDeck(newDeck);
    setDiscard(newDiscard);
    
    // Save to local storage
    localStorage.setItem('cardRpgDeck', JSON.stringify(newDeck));
    localStorage.setItem('cardRpgDiscard', JSON.stringify(newDiscard));
    
    return drawnCard;
  };
  
  // Generate a map tile based on a card
  const generateTile = (x, y) => {
    // Check if tile already exists
    if (map[`${x},${y}`]) {
      return map[`${x},${y}`];
    }
    
    // Draw a card to determine tile type
    const card = drawCard();
    
    // Generate tile data based on card
    const newTile = {
      x,
      y,
      explored: true,
      card,
      // Generate location data based on the card
      location: getLocationFromCard(card),
      // Other tile properties like entities, items, etc.
    };
    
    // Update map
    const updatedMap = {
      ...map,
      [`${x},${y}`]: newTile
    };
    
    setMap(updatedMap);
    
    // Save to local storage
    localStorage.setItem('cardRpgMap', JSON.stringify(updatedMap));
    
    return newTile;
  };
  
  // Move character to a new position
  const moveCharacter = (x, y) => {
    if (!character) return;
    
    // Generate tile if it doesn't exist
    const tile = generateTile(x, y);
    
    // Update character position
    const updatedCharacter = {
      ...character,
      position: { x, y }
    };
    
    setCharacter(updatedCharacter);
    
    // Save to local storage
    localStorage.setItem('cardRpgCharacter', JSON.stringify(updatedCharacter));
    
    return { character: updatedCharacter, tile };
  };
  
  // Helper function to generate a great threat
  const generateGreatThreat = () => {
    // Draw two cards to determine the great threat
    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
    
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    
    // Import your threats data and use it here
    // For now, returning a placeholder
    return {
      suit,
      rank,
      name: "Great Threat",
      description: "A powerful entity threatening the world.",
      location: {
        x: Math.floor(Math.random() * 20) - 10,
        y: Math.floor(Math.random() * 20) - 10
      }
    };
  };
  
  // Helper functions for character creation
  const getRaceFromCard = (card) => {
    // Implementation will depend on your character generation tables
    return {
      name: "Human",
      bonuses: { strength: 1, dexterity: 1 }
    };
  };
  
  const getClassFromCard = (card) => {
    // Implementation will depend on your character generation tables
    const classes = {
      hearts: "Warrior",
      diamonds: "Wizard",
      clubs: "Rogue",
      spades: "Cleric"
    };
    
    return {
      name: classes[card.suit] || "Warrior",
      bonuses: { 
        [classes[card.suit] === "Warrior" ? "strength" : 
         classes[card.suit] === "Wizard" ? "intelligence" :
         classes[card.suit] === "Rogue" ? "dexterity" : "wisdom"]: 2
      }
    };
  };
  
  const calculateBaseStats = (raceCard, classCard) => {
    const race = getRaceFromCard(raceCard);
    const characterClass = getClassFromCard(classCard);
    
    // Base stats
    const stats = {
      strength: 5,
      dexterity: 5,
      intelligence: 5,
      wisdom: 5,
      constitution: 5,
      charisma: 5
    };
    
    // Apply race bonuses
    if (race.bonuses) {
      Object.entries(race.bonuses).forEach(([stat, bonus]) => {
        if (stats[stat] !== undefined) {
          stats[stat] += bonus;
        }
      });
    }
    
    // Apply class bonuses
    if (characterClass.bonuses) {
      Object.entries(characterClass.bonuses).forEach(([stat, bonus]) => {
        if (stats[stat] !== undefined) {
          stats[stat] += bonus;
        }
      });
    }
    
    return stats;
  };
  
  // Helper function for location generation
  const getLocationFromCard = (card) => {
    // Implementation will depend on your location generation tables
    return {
      name: "Generic Location",
      description: "A nondescript area.",
      features: [],
      encounters: []
    };
  };
  
  // Load saved data on initial mount
  useEffect(() => {
    loadWorld();
  }, []);
  
  const value = {
    world,
    character,
    map,
    deck,
    discard,
    penaltyCards,
    gameStatus,
    loading,
    initWorld,
    loadWorld,
    createCharacter,
    drawCard,
    generateTile,
    moveCharacter,
    setGameStatus
  };
  
  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}
