// gameEngine.js - Core game mechanics and engine
import { nanoid } from 'nanoid';

// Import data modules
import threats from '../data/threats';
import locations from '../data/locations';
import situations from '../data/situations';
import encounters from '../data/encounters';
import items from '../data/items';
import characterData from '../data/characters';

// Import specific helper functions from data modules
import { generateGreatThreat, getThreatFromCard } from '../data/threats';
import { getLocationFromCard } from '../data/locations';
import { getSituationFromCard, requiresAdditionalDraw as situationRequiresAdditionalDraw } from '../data/situations';
import { getEncounterFromCard, rollEncounterQuantity } from '../data/encounters';
import { getItemFromCard } from '../data/items';
import { createCharacter, requiresSubtypeCard } from '../data/characters';

/**
 * Card and Deck Management
 */
export const SUITS = ['hearts', 'diamonds', 'clubs', 'spades'];
export const RANKS = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];

// Create a standard deck of cards
export function createDeck() {
  const deck = [];
  
  for (const suit of SUITS) {
    for (const rank of RANKS) {
      deck.push({ suit, rank, id: `${suit}-${rank}` });
    }
  }
  
  return deck;
}

// Shuffle a deck using Fisher-Yates algorithm
export function shuffleDeck(deck) {
  const shuffled = [...deck];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
}

// Draw a card from the deck
export function drawCard(gameState, saveToDB = true) {
  const { drawPile, discardPile } = gameState.deck;
  
  // If draw pile is empty, reshuffle discard pile
  if (drawPile.length === 0) {
    if (discardPile.length === 0) {
      throw new Error("Both draw pile and discard pile are empty.");
    }
    
    // Shuffle discard pile into draw pile
    gameState.deck.drawPile = shuffleDeck([...discardPile]);
    gameState.deck.discardPile = [];
  }
  
  // Draw the top card
  const card = gameState.deck.drawPile.shift();
  
  // Add to discard pile
  gameState.deck.discardPile.push(card);
  
  // Save game state if requested
  if (saveToDB) {
    saveGameState(gameState);
  }
  
  return card;
}

// Add a penalty card to the deck
export function addPenaltyCard(gameState, penaltyType) {
  const penaltyId = nanoid(6);
  const penaltyCard = {
    type: 'penalty',
    penaltyType,
    id: `penalty-${penaltyId}`,
    effect: getPenaltyEffect(penaltyType)
  };
  
  // Add to draw pile and shuffle
  gameState.deck.drawPile.push(penaltyCard);
  gameState.deck.drawPile = shuffleDeck(gameState.deck.drawPile);
  
  // Also track in penalty cards array
  gameState.deck.penaltyCards.push(penaltyCard);
  
  saveGameState(gameState);
  return penaltyCard;
}

// Get effect of penalty card
function getPenaltyEffect(penaltyType) {
  switch(penaltyType) {
    case 'wound':
      return {
        description: "You've been wounded and lose 2 HP.",
        apply: (character) => {
          character.health = Math.max(0, character.health - 2);
          return `${character.name} loses 2 HP. Current health: ${character.health}/${character.maxHealth}`;
        }
      };
    case 'fatigue':
      return {
        description: "You're exhausted and your stats are temporarily reduced.",
        apply: (character) => {
          // Reduce all stats by 1 temporarily
          Object.keys(character.stats).forEach(stat => {
            character.temporaryStatModifiers = character.temporaryStatModifiers || {};
            character.temporaryStatModifiers[stat] = (character.temporaryStatModifiers[stat] || 0) - 1;
          });
          return `${character.name} is fatigued. All stats temporarily reduced by 1.`;
        }
      };
    case 'curse':
      return {
        description: "You've been cursed and suffer disadvantage on your next three rolls.",
        apply: (character) => {
          character.curseCounter = (character.curseCounter || 0) + 3;
          return `${character.name} is cursed and will have disadvantage on the next ${character.curseCounter} rolls.`;
        }
      };
    case 'fear':
      return {
        description: "You're frightened and must make a wisdom save to engage in combat.",
        apply: (character) => {
          character.conditions = character.conditions || [];
          character.conditions.push('frightened');
          return `${character.name} is frightened and must make a wisdom save to engage in combat.`;
        }
      };
    default:
      return {
        description: "You suffer a generic penalty.",
        apply: (character) => {
          return `${character.name} suffers a generic penalty.`;
        }
      };
  }
}

// Remove a penalty card when player heals or resolves the penalty
export function removePenaltyCard(gameState, penaltyCardId) {
  // Remove from penalty cards array
  gameState.deck.penaltyCards = gameState.deck.penaltyCards.filter(card => card.id !== penaltyCardId);
  
  // Remove from draw pile if it's there
  gameState.deck.drawPile = gameState.deck.drawPile.filter(card => card.id !== penaltyCardId);
  
  // Remove from discard pile if it's there
  gameState.deck.discardPile = gameState.deck.discardPile.filter(card => card.id !== penaltyCardId);
  
  saveGameState(gameState);
}

/**
 * World Generation and Management
 */
// Create a new game world
export function createNewWorld(worldName, worldSeed = null) {
  const seed = worldSeed || Date.now().toString();
  
  // Create a new deck
  const freshDeck = createDeck();
  const shuffledDeck = shuffleDeck(freshDeck);
  
  // Generate the great threat
  const greatThreat = generateGreatThreat(seed);
  
  // Create initial game state
  const gameState = {
    id: nanoid(),
    name: worldName,
    seed,
    createdAt: new Date().toISOString(),
    greatThreat,
    deck: {
      drawPile: shuffledDeck,
      discardPile: [],
      penaltyCards: []
    },
    map: {},
    characters: [],
    currentCharacterId: null,
    gameLog: [{
      timestamp: new Date().toISOString(),
      type: 'world_creation',
      message: `The world of ${worldName} was created. A great threat looms: ${greatThreat.name}`
    }]
  };
  
  // Save the new game state
  saveGameState(gameState);
  
  return gameState;
}

// Generate or retrieve a map tile
export function getMapTile(gameState, x, y, forceGenerate = false) {
  const tileKey = `${x},${y}`;
  
  // Check if the tile already exists
  if (!forceGenerate && gameState.map[tileKey]) {
    return gameState.map[tileKey];
  }
  
  // Check if this is the great threat location
  if (gameState.greatThreat.location.x === x && gameState.greatThreat.location.y === y) {
    // Create special tile for great threat
    const threatTile = {
      id: nanoid(),
      x,
      y,
      explored: false,
      type: 'greatThreat',
      threat: gameState.greatThreat,
      cardDraw: { suit: gameState.greatThreat.suit, rank: gameState.greatThreat.rank },
      entities: [
        {
          id: nanoid(),
          type: 'threat',
          name: gameState.greatThreat.name,
          description: gameState.greatThreat.description,
          data: gameState.greatThreat
        }
      ],
      items: [],
      encounters: []
    };
    
    // Save the tile to the world
    gameState.map[tileKey] = threatTile;
    saveGameState(gameState);
    
    return threatTile;
  }
  
  // Generate a new regular tile
  const card = drawCard(gameState, false); // Don't save yet as we'll save after tile creation
  const location = getLocationFromCard(card);
  
  // Create the new tile
  const newTile = {
    id: nanoid(),
    x,
    y,
    explored: false,
    type: location.biome,
    location,
    cardDraw: card,
    entities: [],
    items: [],
    encounters: []
  };
  
  // Add the tile to the world
  gameState.map[tileKey] = newTile;
  
  // Log the discovery
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'tile_generation',
    message: `New area discovered at (${x},${y}): ${location.name}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return newTile;
}

// Mark a tile as explored
export function exploreTile(gameState, tileId) {
  // Find the tile
  const tileKey = Object.keys(gameState.map).find(key => gameState.map[key].id === tileId);
  if (!tileKey) {
    throw new Error(`Tile with ID ${tileId} not found.`);
  }
  
  // Mark as explored
  gameState.map[tileKey].explored = true;
  
  // Generate an encounter for this tile if it doesn't have one yet
  if (gameState.map[tileKey].encounters.length === 0) {
    generateEncounter(gameState, tileId);
  }
  
  // Save the updated game state
  saveGameState(gameState);
  
  return gameState.map[tileKey];
}

// Generate an encounter for a tile
export function generateEncounter(gameState, tileId) {
  // Find the tile
  const tileKey = Object.keys(gameState.map).find(key => gameState.map[key].id === tileId);
  if (!tileKey) {
    throw new Error(`Tile with ID ${tileId} not found.`);
  }
  
  const tile = gameState.map[tileKey];
  
  // Draw a card to determine the encounter type
  const encounterCard = drawCard(gameState, false); // Don't save yet
  
  // 20% chance for combat, 30% chance for situation, 20% chance for treasure, 30% chance for nothing
  const encounterType = Math.random();
  let encounter;
  
  if (encounterType < 0.2) {
    // Combat encounter
    encounter = {
      id: nanoid(),
      type: 'combat',
      cardDraw: encounterCard,
      resolved: false,
      data: getEncounterFromCard(encounterCard),
      quantity: rollEncounterQuantity(getEncounterFromCard(encounterCard).numberAppearing)
    };
  } else if (encounterType < 0.5) {
    // Situation encounter
    encounter = {
      id: nanoid(),
      type: 'situation',
      cardDraw: encounterCard,
      resolved: false,
      data: getSituationFromCard(encounterCard),
      needsAdditionalDraw: situationRequiresAdditionalDraw(getSituationFromCard(encounterCard))
    };
  } else if (encounterType < 0.7) {
    // Treasure encounter
    const itemCard = drawCard(gameState, false);
    const item = getItemFromCard(itemCard);
    
    encounter = {
      id: nanoid(),
      type: 'treasure',
      cardDraw: encounterCard,
      resolved: false,
      data: {
        name: "Hidden Treasure",
        description: `You discover ${item.name}`,
        item
      }
    };
    
    // Add the item to the tile
    tile.items.push({
      id: nanoid(),
      ...item
    });
  } else {
    // No special encounter
    encounter = {
      id: nanoid(),
      type: 'exploration',
      cardDraw: encounterCard,
      resolved: true,
      data: {
        name: "Peaceful Area",
        description: "This area seems quiet and safe for now."
      }
    };
  }
  
  // Add the encounter to the tile
  tile.encounters.push(encounter);
  
  // Log the encounter
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'encounter_generation',
    message: `Encounter generated at (${tile.x},${tile.y}): ${encounter.data.name}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return encounter;
}

// Resolve an encounter
export function resolveEncounter(gameState, tileId, encounterId, outcome) {
  // Find the tile
  const tileKey = Object.keys(gameState.map).find(key => gameState.map[key].id === tileId);
  if (!tileKey) {
    throw new Error(`Tile with ID ${tileId} not found.`);
  }
  
  const tile = gameState.map[tileKey];
  
  // Find the encounter
  const encounterIndex = tile.encounters.findIndex(enc => enc.id === encounterId);
  if (encounterIndex === -1) {
    throw new Error(`Encounter with ID ${encounterId} not found.`);
  }
  
  // Mark the encounter as resolved
  tile.encounters[encounterIndex].resolved = true;
  tile.encounters[encounterIndex].outcome = outcome;
  
  // Handle specific encounter types
  switch (tile.encounters[encounterIndex].type) {
    case 'combat':
      // Handle combat resolution - maybe add XP, loot, etc.
      if (outcome.success) {
        // Maybe generate loot
        const lootChance = Math.random();
        if (lootChance < 0.7) { // 70% chance of loot
          const itemCard = drawCard(gameState, false);
          const item = getItemFromCard(itemCard);
          
          // Add the item to the tile
          tile.items.push({
            id: nanoid(),
            ...item
          });
          
          // Add to outcome
          outcome.loot = item;
        }
        
        // Add XP to current character
        if (gameState.currentCharacterId) {
          const characterIndex = gameState.characters.findIndex(char => char.id === gameState.currentCharacterId);
          if (characterIndex !== -1) {
            gameState.characters[characterIndex].xp = (gameState.characters[characterIndex].xp || 0) + calculateXP(tile.encounters[encounterIndex].data);
          }
        }
      }
      break;
      
    case 'treasure':
      // If the treasure was claimed, remove it from the tile
      if (outcome.claimed && tile.encounters[encounterIndex].data.item) {
        // Find and remove the item
        const itemIndex = tile.items.findIndex(item => item.name === tile.encounters[encounterIndex].data.item.name);
        if (itemIndex !== -1) {
          // If claimed by character, add to their inventory
          if (outcome.claimedBy && gameState.currentCharacterId) {
            const characterIndex = gameState.characters.findIndex(char => char.id === gameState.currentCharacterId);
            if (characterIndex !== -1) {
              gameState.characters[characterIndex].inventory = gameState.characters[characterIndex].inventory || [];
              gameState.characters[characterIndex].inventory.push(tile.items[itemIndex]);
            }
          }
          
          // Remove from tile
          tile.items.splice(itemIndex, 1);
        }
      }
      break;
      
    case 'situation':
      // Handle different situation outcomes
      if (outcome.penaltiesAdded && Array.isArray(outcome.penaltiesAdded)) {
        // Add penalty cards to the deck
        outcome.penaltiesAdded.forEach(penaltyType => {
          addPenaltyCard(gameState, penaltyType);
        });
      }
      
      if (outcome.rewards && Array.isArray(outcome.rewards)) {
        // Add rewards to character
        if (gameState.currentCharacterId) {
          const characterIndex = gameState.characters.findIndex(char => char.id === gameState.currentCharacterId);
          if (characterIndex !== -1) {
            outcome.rewards.forEach(reward => {
              // Handle different reward types
              if (reward.type === 'item') {
                gameState.characters[characterIndex].inventory = gameState.characters[characterIndex].inventory || [];
                gameState.characters[characterIndex].inventory.push(reward.item);
              } else if (reward.type === 'xp') {
                gameState.characters[characterIndex].xp = (gameState.characters[characterIndex].xp || 0) + reward.amount;
              }
            });
          }
        }
      }
      break;
  }
  
  // Log the encounter resolution
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'encounter_resolution',
    message: `Encounter at (${tile.x},${tile.y}) resolved: ${outcome.description || 'No details provided'}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return tile.encounters[encounterIndex];
}

/**
 * Character Management
 */
// Create a new character
export function createNewCharacter(gameState, characterName) {
  // Draw cards for race and class
  const raceCard = drawCard(gameState, false);
  const classCard = drawCard(gameState, false);
  
  // Check if we need a subtype card for the race
  let subtypeCard = null;
  if (requiresSubtypeCard(raceCard)) {
    subtypeCard = drawCard(gameState, false);
  }
  
  // Create the character
  const characterData = createCharacter(characterName, raceCard, classCard, subtypeCard);
  
  // Add game-specific properties
  const character = {
    ...characterData,
    id: nanoid(),
    created: new Date().toISOString(),
    xp: 0,
    level: 1,
    position: { x: 0, y: 0 },
    inventory: [],
    equipped: {
      weapon: null,
      armor: null,
      trinket: null
    },
    gold: 0,
    conditions: [],
    quests: [],
    notes: []
  };
  
  // Add starting equipment based on class
  if (character.class === 'Warrior') {
    // Draw cards for starting equipment
    const weaponCard = { suit: 'hearts', rank: '3' }; // Steel Scimitar
    const armorCard = { suit: 'hearts', rank: '2' }; // Iron Plate Armor
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Wizard') {
    // Starting equipment for wizard
    const weaponCard = { suit: 'diamonds', rank: '2' }; // Apprentice Staff of the Flame
    const armorCard = { suit: 'diamonds', rank: 'ace' }; // Apprentice's Robe
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Rogue') {
    // Starting equipment for rogue
    const weaponCard = { suit: 'hearts', rank: 'ace' }; // Rusty Dagger (2 of them)
    const armorCard = { suit: 'clubs', rank: 'ace' }; // Soft Leather Vest
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const weapon2 = { ...weapon, id: nanoid() }; // A second dagger
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(weapon2);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Cleric') {
    // Starting equipment for cleric
    const weaponCard = { suit: 'clubs', rank: '2' }; // Oak Mace
    const armorCard = { suit: 'hearts', rank: '2' }; // Iron Plate Armor
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  }
  
  // Also give some starting gold
  character.gold = 10;
  
  // Add some healing potions
  const minorHealingPotion = {
    name: "Minor Healing Potion",
    description: "A small vial containing a red liquid that heals minor wounds.",
    type: "consumable",
    subtype: "potion",
    rarity: "common",
    effects: {
      healing: 2
    },
    id: nanoid()
  };
  
  character.inventory.push(minorHealingPotion);
  character.inventory.push({ ...minorHealingPotion, id: nanoid() }); // A second one
  
  // Add the character to the game state
  gameState.characters.push(character);
  
  // Make this the current character if there isn't one
  if (!gameState.currentCharacterId) {
    gameState.currentCharacterId = character.id;
  }
  
  // Log the character creation
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'character_creation',
    message: `New character created: ${character.name}, a ${character.race} ${character.class}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return character;
}

// Create a new character with specific race and class cards
export function createCharacterWithCards(gameState, characterName, raceCard, classCard) {
  // Check if we need a subtype card for the race
  let subtypeCard = null;
  if (requiresSubtypeCard(raceCard)) {
    subtypeCard = drawCard(gameState, false);
  }
  
  // Create the character
  const characterData = createCharacter(characterName, raceCard, classCard, subtypeCard);
  
  // Add game-specific properties
  const character = {
    ...characterData,
    id: nanoid(),
    created: new Date().toISOString(),
    xp: 0,
    level: 1,
    position: { x: 0, y: 0 },
    inventory: [],
    equipped: {
      weapon: null,
      armor: null,
      trinket: null
    },
    gold: 0,
    conditions: [],
    quests: [],
    notes: []
  };
  
  // Add starting equipment based on class
  if (character.class === 'Warrior') {
    // Draw cards for starting equipment
    const weaponCard = { suit: 'hearts', rank: '3' }; // Steel Scimitar
    const armorCard = { suit: 'hearts', rank: '2' }; // Iron Plate Armor
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Wizard') {
    // Starting equipment for wizard
    const weaponCard = { suit: 'diamonds', rank: '2' }; // Apprentice Staff of the Flame
    const armorCard = { suit: 'diamonds', rank: 'ace' }; // Apprentice's Robe
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Rogue') {
    // Starting equipment for rogue
    const weaponCard = { suit: 'hearts', rank: 'ace' }; // Rusty Dagger (2 of them)
    const armorCard = { suit: 'clubs', rank: 'ace' }; // Soft Leather Vest
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const weapon2 = { ...weapon, id: nanoid() }; // A second dagger
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(weapon2);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  } else if (character.class === 'Cleric') {
    // Starting equipment for cleric
    const weaponCard = { suit: 'clubs', rank: '2' }; // Oak Mace
    const armorCard = { suit: 'hearts', rank: '2' }; // Iron Plate Armor
    
    const weapon = getItemFromCard(weaponCard, 'weapon');
    const armor = getItemFromCard(armorCard, 'armor');
    
    character.inventory.push(weapon);
    character.inventory.push(armor);
    
    // Auto-equip
    character.equipped.weapon = weapon;
    character.equipped.armor = armor;
  }
  
  // Also give some starting gold
  character.gold = 10;
  
  // Add some healing potions
  const minorHealingPotion = {
    name: "Minor Healing Potion",
    description: "A small vial containing a red liquid that heals minor wounds.",
    type: "consumable",
    subtype: "potion",
    rarity: "common",
    effects: {
      healing: 2
    },
    id: nanoid()
  };
  
  character.inventory.push(minorHealingPotion);
  character.inventory.push({ ...minorHealingPotion, id: nanoid() }); // A second one
  
  // Add the character to the game state
  gameState.characters.push(character);
  
  // Make this the current character if there isn't one
  if (!gameState.currentCharacterId) {
    gameState.currentCharacterId = character.id;
  }
  
  // Log the character creation
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'character_creation',
    message: `New character created: ${character.name}, a ${character.race} ${character.class}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return character;
}

// Get the current character
export function getCurrentCharacter(gameState) {
  if (!gameState.currentCharacterId) {
    return null;
  }
  
  return gameState.characters.find(char => char.id === gameState.currentCharacterId);
}

// Switch active character
export function switchCharacter(gameState, characterId) {
  // Verify the character exists
  const character = gameState.characters.find(char => char.id === characterId);
  if (!character) {
    throw new Error(`Character with ID ${characterId} not found.`);
  }
  
  // Update current character
  gameState.currentCharacterId = characterId;
  
  // Log the character switch
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'character_switch',
    message: `Switched to character: ${character.name}`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return character;
}

// Move character to a new position
export function moveCharacter(gameState, direction) {
  // Get the current character
  const character = getCurrentCharacter(gameState);
  if (!character) {
    throw new Error("No active character found.");
  }
  
  // Calculate new position
  const newPosition = { ...character.position };
  
  switch (direction) {
    case 'north':
      newPosition.y -= 1;
      break;
    case 'south':
      newPosition.y += 1;
      break;
    case 'east':
      newPosition.x += 1;
      break;
    case 'west':
      newPosition.x -= 1;
      break;
    default:
      throw new Error(`Invalid direction: ${direction}`);
  }
  
  // Get or generate the tile at the new position
  const tile = getMapTile(gameState, newPosition.x, newPosition.y);
  
  // Update character position
  const characterIndex = gameState.characters.findIndex(char => char.id === character.id);
  gameState.characters[characterIndex].position = newPosition;
  
  // Log the movement
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'character_movement',
    message: `${character.name} moved ${direction} to position (${newPosition.x}, ${newPosition.y})`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return {
    character: gameState.characters[characterIndex],
    tile
  };
}

// Level up character
export function levelUpCharacter(gameState, characterId) {
  // Find the character
  const characterIndex = gameState.characters.findIndex(char => char.id === characterId);
  if (characterIndex === -1) {
    throw new Error(`Character with ID ${characterId} not found.`);
  }
  
  const character = gameState.characters[characterIndex];
  
  // Check if character has enough XP to level up
  const requiredXP = calculateRequiredXP(character.level);
  if ((character.xp || 0) < requiredXP) {
    throw new Error(`Not enough XP to level up. Need ${requiredXP} XP, have ${character.xp || 0}.`);
  }
  
  // Increment level
  character.level += 1;
  
  // Increase max health based on class
  const constitutionMod = Math.floor((character.stats.constitution - 10) / 2);
  let healthIncrease = 0;
  
  switch (character.class) {
    case 'Warrior':
      healthIncrease = Math.floor(8 / 2) + 1 + constitutionMod; // Average of d8 + CON mod
      break;
    case 'Wizard':
      healthIncrease = Math.floor(4 / 2) + 1 + constitutionMod; // Average of d4 + CON mod
      break;
    case 'Rogue':
      healthIncrease = Math.floor(6 / 2) + 1 + constitutionMod; // Average of d6 + CON mod
      break;
    case 'Cleric':
      healthIncrease = Math.floor(6 / 2) + 1 + constitutionMod; // Average of d6 + CON mod
      break;
    default:
      healthIncrease = Math.floor(6 / 2) + 1 + constitutionMod; // Default d6 + CON mod
  }
  
  character.maxHealth += healthIncrease;
  character.health = character.maxHealth; // Heal to full on level up
  
  // Unlock new abilities based on class and level
  // Character data already has abilities for each level, just need to recalculate
  const classData = characterData.classes[getClassKeyFromName(character.class)];
  if (classData) {
    const newAbilities = [];
    classData.abilities.forEach(ability => {
      if (ability.level === character.level) {
        newAbilities.push(ability);
        character.abilities.push(ability);
      }
    });
    
    if (newAbilities.length > 0) {
      gameState.gameLog.push({
        timestamp: new Date().toISOString(),
        type: 'character_ability',
        message: `${character.name} gained new abilities: ${newAbilities.map(a => a.name).join(', ')}`
      });
    }
  }
  
  // Log the level up
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'character_level_up',
    message: `${character.name} reached level ${character.level}! Max health increased by ${healthIncrease}.`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return character;
}

// Helper function to map class name to key
function getClassKeyFromName(className) {
  const classMap = {
    'Warrior': 'hearts',
    'Wizard': 'diamonds',
    'Rogue': 'clubs',
    'Cleric': 'spades'
  };
  
  return classMap[className] || 'hearts';
}

// Calculate required XP for next level
function calculateRequiredXP(currentLevel) {
  // Simple progression: level * 100
  return currentLevel * 100;
}

// Calculate XP from combat encounter
function calculateXP(encounter) {
  // Base on difficulty
  const difficultyXP = {
    'Easy': 25,
    'Moderate': 50,
    'Challenging': 75,
    'Formidable': 100,
    'Legendary': 150
  };
  
  // Default to moderate if difficultyText is missing
  return difficultyXP[encounter.difficultyText] || 50;
}

/**
 * Combat System
 */
// Initiate combat
export function initiateCombat(gameState, encounterId) {
  // Get the current character
  const character = getCurrentCharacter(gameState);
  if (!character) {
    throw new Error("No active character found.");
  }
  
  // Find the tile with this encounter
  const tileKey = Object.keys(gameState.map).find(key => {
    return gameState.map[key].encounters.some(enc => enc.id === encounterId);
  });
  
  if (!tileKey) {
    throw new Error(`Encounter with ID ${encounterId} not found.`);
  }
  
  const tile = gameState.map[tileKey];
  const encounterIndex = tile.encounters.findIndex(enc => enc.id === encounterId);
  const encounter = tile.encounters[encounterIndex];
  
  // Only combat encounters can be initiated
  if (encounter.type !== 'combat') {
    throw new Error(`Encounter with ID ${encounterId} is not a combat encounter.`);
  }
  
  // Set up combat state
  const combat = {
    id: nanoid(),
    encounterId,
    status: 'active',
    round: 1,
    turn: 'player', // 'player' or 'enemy'
    player: {
      id: character.id,
      health: character.health,
      maxHealth: character.maxHealth,
      initiative: Math.floor(Math.random() * 20) + 1 + Math.floor((character.stats.dexterity - 10) / 2)
    },
    enemies: Array(encounter.quantity).fill().map(() => ({
      id: nanoid(),
      name: encounter.data.name,
      health: calculateEnemyHealth(encounter.data),
      maxHealth: calculateEnemyHealth(encounter.data),
      initiative: Math.floor(Math.random() * 20) + 1 + calculateEnemyInitiative(encounter.data)
    })),
    log: [{
      round: 0,
      message: `Combat initiated against ${encounter.quantity} ${encounter.data.name}!`
    }]
  };
  
  // Sort combatants by initiative
  const allCombatants = [
    { ...combat.player, type: 'player' },
    ...combat.enemies.map(enemy => ({ ...enemy, type: 'enemy' }))
  ].sort((a, b) => b.initiative - a.initiative);
  
  // Determine who goes first
  combat.turn = allCombatants[0].type;
  combat.currentTurnId = allCombatants[0].id;
  
  // Add combat to the encounter
  encounter.combat = combat;
  
  // Log the combat initiation
  gameState.gameLog.push({
    timestamp: new Date().toISOString(),
    type: 'combat_initiation',
    message: `${character.name} entered combat with ${encounter.quantity} ${encounter.data.name}!`
  });
  
  // Save the updated game state
  saveGameState(gameState);
  
  return combat;
}

// Helper to calculate enemy health
function calculateEnemyHealth(enemyData) {
  // Base health on difficulty
  const difficultyMultiplier = {
    'Easy': 1,
    'Moderate': 1.5,
    'Challenging': 2,
    'Formidable': 2.5,
    'Legendary': 3
  };
  
  // Default base health
  const baseHealth = 5;
  
  // Calculate
  return Math.floor(baseHealth * (difficultyMultiplier[enemyData.difficultyText] || 1));
}

// Helper to calculate enemy initiative modifier
function calculateEnemyInitiative(enemyData) {
  // Base on difficulty
  const difficultyToMod = {
    'Easy': 0,
    'Moderate': 1,
    'Challenging': 2,
    'Formidable': 3,
    'Legendary': 4
  };
  
  return difficultyToMod[enemyData.difficultyText] || 1;
}

// Perform combat action
export function performCombatAction(gameState, encounterId, action, targetId) {
  // Find the encounter
  const tileKey = Object.keys(gameState.map).find(key => {
    return gameState.map[key].encounters.some(enc => enc.id === encounterId);
  });
  
  if (!tileKey) {
    throw new Error(`Encounter with ID ${encounterId} not found.`);
  }
  
  const tile = gameState.map[tileKey];
  const encounterIndex = tile.encounters.findIndex(enc => enc.id === encounterId);
  const encounter = tile.encounters[encounterIndex];
  
  if (!encounter.combat) {
    throw new Error('No active combat found for this encounter.');
  }
  
  const combat = encounter.combat;
  const character = getCurrentCharacter(gameState);
  
  // Process the action
  let actionResult = {
    success: false,
    message: 'Invalid action',
    damage: 0,
    targetId: targetId
  };
  
  // Handle player actions
  if (combat.turn === 'player') {
    switch (action) {
      case 'attack':
        // Find the target
        const targetIndex = combat.enemies.findIndex(enemy => enemy.id === targetId);
        if (targetIndex === -1) {
          throw new Error(`Target with ID ${targetId} not found.`);
        }
        
        // Calculate attack roll (d20 + strength mod)
        const attackRoll = Math.floor(Math.random() * 20) + 1;
        const strengthMod = Math.floor((character.stats.strength - 10) / 2);
        const attackTotal = attackRoll + strengthMod;
        
        // Calculate enemy defense (based on difficulty)
        const enemyDefense = 10 + Math.floor(encounter.data.difficulty / 2);
        
        // Check if hit
        if (attackRoll === 20 || attackTotal >= enemyDefense) {
          // Calculate damage - based on equipped weapon or unarmed
          let damage = 1; // Default unarmed damage
          
          if (character.equipped.weapon) {
            damage = character.equipped.weapon.stats.damage || 1;
            // Add strength modifier
            damage += strengthMod;
          }
          
          // Critical hit doubles damage
          if (attackRoll === 20) {
            damage *= 2;
            actionResult.critical = true;
          }
          
          // Apply damage
          combat.enemies[targetIndex].health = Math.max(0, combat.enemies[targetIndex].health - damage);
          
          actionResult = {
            success: true,
            message: `${character.name} hits ${combat.enemies[targetIndex].name} for ${damage} damage!`,
            damage,
            targetId
          };
          
          // Check if enemy is defeated
          if (combat.enemies[targetIndex].health === 0) {
            actionResult.message += ` ${combat.enemies[targetIndex].name} is defeated!`;
            actionResult.defeated = true;
          }
        } else {
          actionResult = {
            success: false,
            message: `${character.name} attacks ${combat.enemies[targetIndex].name} but misses!`,
            damage: 0,
            targetId
          };
        }
        break;
        
      case 'use_item':
        // Find the item
        const item = character.inventory.find(item => item.id === targetId);
        if (!item) {
          throw new Error(`Item with ID ${targetId} not found in character inventory.`);
        }
        
        // Handle different item types
        if (item.type === 'consumable' && item.subtype === 'potion') {
          // Apply potion effects
          if (item.effects.healing) {
            // Heal the character
            const healAmount = item.effects.healing;
            const newHealth = Math.min(character.maxHealth, character.health + healAmount);
            const actualHeal = newHealth - character.health;
            
            // Update combat state
            combat.player.health = newHealth;
            
            // Also update character state
            const characterIndex = gameState.characters.findIndex(char => char.id === character.id);
            gameState.characters[characterIndex].health = newHealth;
            
            // Remove the item from inventory
            gameState.characters[characterIndex].inventory = gameState.characters[characterIndex].inventory.filter(i => i.id !== item.id);
            
            actionResult = {
              success: true,
              message: `${character.name} drinks ${item.name} and heals for ${actualHeal} health!`,
              healing: actualHeal,
              targetId: character.id
            };
          }
        }
        break;
        
      case 'flee':
        // Roll a dexterity check to flee
        const fleeRoll = Math.floor(Math.random() * 20) + 1;
        const dexMod = Math.floor((character.stats.dexterity - 10) / 2);
        const fleeTotal = fleeRoll + dexMod;
        
        // Difficulty based on encounter
        const fleeDC = 10 + Math.floor(encounter.data.difficulty / 2);
        
        if (fleeTotal >= fleeDC) {
          // Success - end combat
          combat.status = 'fled';
          
          // Resolve the encounter
          encounter.resolved = true;
          encounter.outcome = {
            success: false,
            fled: true,
            description: `${character.name} successfully fled from combat!`
          };
          
          // Remove combat data
          delete encounter.combat;
          
          actionResult = {
            success: true,
            message: `${character.name} successfully flees from combat!`,
            fled: true
          };
        } else {
          actionResult = {
            success: false,
            message: `${character.name} tries to flee but fails!`,
            fled: false
          };
          
          // Still advance turn since an action was taken
          advanceCombatTurn(combat);
        }
        break;
    }
    
    // If the action was successful and we didn't flee, add to combat log and advance turn
    if (actionResult.success && !actionResult.fled) {
      combat.log.push({
        round: combat.round,
        message: actionResult.message
      });
      
      // Check if all enemies are defeated
      const allEnemiesDefeated = combat.enemies.every(enemy => enemy.health === 0);
      if (allEnemiesDefeated) {
        // Combat victory!
        combat.status = 'victory';
        
        // Resolve the encounter
        encounter.resolved = true;
        encounter.outcome = {
          success: true,
          description: `${character.name} defeated all enemies!`
        };
        
        // Calculate and award XP
        const xpGained = calculateXP(encounter.data);
        const characterIndex = gameState.characters.findIndex(char => char.id === character.id);
        gameState.characters[characterIndex].xp = (gameState.characters[characterIndex].xp || 0) + xpGained;
        
        // Log the victory
        gameState.gameLog.push({
          timestamp: new Date().toISOString(),
          type: 'combat_victory',
          message: `${character.name} defeated ${combat.enemies.length} ${encounter.data.name} and gained ${xpGained} XP!`
        });
        
        // Generate loot
        const lootChance = Math.random();
        if (lootChance < 0.7) { // 70% chance of loot
          const itemCard = drawCard(gameState, false);
          const lootItem = getItemFromCard(itemCard);
          
          // Add to character inventory
          gameState.characters[characterIndex].inventory.push(lootItem);
          
          // Add to outcome
          encounter.outcome.loot = lootItem;
          
          // Log the loot
          gameState.gameLog.push({
            timestamp: new Date().toISOString(),
            type: 'loot_found',
            message: `${character.name} found ${lootItem.name}!`
          });
        }
        
        // Clean up
        delete encounter.combat;
      } else {
        // Advance turn
        advanceCombatTurn(combat);
      }
    }
  }
  // Handle enemy actions
  else if (combat.turn === 'enemy') {
    // Find which enemy's turn it is
    const activeEnemyIndex = combat.enemies.findIndex(enemy => enemy.id === combat.currentTurnId);
    
    if (activeEnemyIndex === -1) {
      throw new Error(`Enemy with ID ${combat.currentTurnId} not found.`);
    }
    
    const activeEnemy = combat.enemies[activeEnemyIndex];
    
    // Skip if enemy is defeated
    if (activeEnemy.health <= 0) {
      advanceCombatTurn(combat);
      actionResult = {
        success: true,
        message: `${activeEnemy.name} is defeated and cannot act.`,
        damage: 0
      };
    } else {
      // Enemy attacks player
      // Calculate attack roll (d20 + difficulty modifier)
      const attackRoll = Math.floor(Math.random() * 20) + 1;
      const attackMod = Math.floor(encounter.data.difficulty / 2);
      const attackTotal = attackRoll + attackMod;
      
      // Calculate player defense (10 + dex mod + armor)
      const dexMod = Math.floor((character.stats.dexterity - 10) / 2);
      let armorBonus = 0;
      if (character.equipped.armor) {
        armorBonus = character.equipped.armor.stats.defense || 0;
      }
      const playerDefense = 10 + dexMod + armorBonus;
      
      // Check if hit
      if (attackRoll === 20 || attackTotal >= playerDefense) {
        // Calculate damage based on difficulty
        let damage = Math.floor(encounter.data.difficulty / 2) + 1;
        
        // Critical hit doubles damage
        if (attackRoll === 20) {
          damage *= 2;
          actionResult.critical = true;
        }
        
        // Apply damage to player
        combat.player.health = Math.max(0, combat.player.health - damage);
        
        // Also update character health
        const characterIndex = gameState.characters.findIndex(char => char.id === character.id);
        gameState.characters[characterIndex].health = combat.player.health;
        
        actionResult = {
          success: true,
          message: `${activeEnemy.name} hits ${character.name} for ${damage} damage!`,
          damage,
          targetId: character.id
        };
        
        // Check if player is defeated
        if (combat.player.health === 0) {
          actionResult.message += ` ${character.name} is defeated!`;
          actionResult.playerDefeated = true;
          
          // End combat with defeat
          combat.status = 'defeat';
          
          // Resolve the encounter
          encounter.resolved = true;
          encounter.outcome = {
            success: false,
            playerDefeated: true,
            description: `${character.name} was defeated in combat!`
          };
          
          // Add penalty cards
          addPenaltyCard(gameState, 'wound');
          addPenaltyCard(gameState, 'fatigue');
          
          // Log the defeat
          gameState.gameLog.push({
            timestamp: new Date().toISOString(),
            type: 'combat_defeat',
            message: `${character.name} was defeated by ${activeEnemy.name}!`
          });
          
          // Clean up
          delete encounter.combat;
        }
      } else {
        actionResult = {
          success: false,
          message: `${activeEnemy.name} attacks ${character.name} but misses!`,
          damage: 0,
          targetId: character.id
        };
      }
      
      // If combat is still active, advance turn
      if (combat.status === 'active') {
        combat.log.push({
          round: combat.round,
          message: actionResult.message
        });
        
        advanceCombatTurn(combat);
      }
    }
  }
  
  // Save the updated game state
  saveGameState(gameState);
  
  return {
    actionResult,
    combat: encounter.combat
  };
}

// Helper to advance combat turns
function advanceCombatTurn(combat) {
  // Determine turn order by initiative
  const allCombatants = [
    { ...combat.player, type: 'player' },
    ...combat.enemies.filter(enemy => enemy.health > 0).map(enemy => ({ ...enemy, type: 'enemy' }))
  ].sort((a, b) => b.initiative - a.initiative);
  
  // Find current combatant index
  const currentIndex = allCombatants.findIndex(combatant => 
    combatant.id === combat.currentTurnId && combatant.type === combat.turn
  );
  
  // Next combatant
  const nextIndex = (currentIndex + 1) % allCombatants.length;
  
  // If we've looped back to the beginning, increment round
  if (nextIndex === 0) {
    combat.round += 1;
  }
  
  // Set new turn
  combat.turn = allCombatants[nextIndex].type;
  combat.currentTurnId = allCombatants[nextIndex].id;
}

/**
 * Game State Persistence
 */
// Save game state to storage
export function saveGameState(gameState) {
  // In a real implementation, this would save to a database
  // For now, we'll just save to localStorage for demonstration
  try {
    localStorage.setItem(`cardRpg_${gameState.id}`, JSON.stringify(gameState));
    return true;
  } catch (error) {
    console.error('Error saving game state:', error);
    return false;
  }
}

// Load game state from storage
export function loadGameState(gameId) {
  // In a real implementation, this would load from a database
  // For now, we'll just load from localStorage for demonstration
  try {
    const savedState = localStorage.getItem(`cardRpg_${gameId}`);
    if (!savedState) {
      return null;
    }
    
    return JSON.parse(savedState);
  } catch (error) {
    console.error('Error loading game state:', error);
    return null;
  }
}

// List all saved games
export function listSavedGames() {
  // In a real implementation, this would query a database
  // For now, we'll just look at localStorage for demonstration
  const savedGames = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith('cardRpg_')) {
      try {
        const gameState = JSON.parse(localStorage.getItem(key));
        savedGames.push({
          id: gameState.id,
          name: gameState.name,
          createdAt: gameState.createdAt,
          lastUpdated: new Date().toISOString() // In a real impl, this would come from the DB
        });
      } catch (error) {
        // Skip invalid entries
        console.error('Error parsing saved game:', error);
      }
    }
  }
  
  return savedGames;
}

// Delete a saved game
export function deleteSavedGame(gameId) {
  try {
    localStorage.removeItem(`cardRpg_${gameId}`);
    return true;
  } catch (error) {
    console.error('Error deleting saved game:', error);
    return false;
  }
}
