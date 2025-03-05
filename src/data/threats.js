// threats.js - Complete threat data organized by suit (threat type)
const threats = {
  // HEARTS - BEASTS
  hearts: {
    ace: {
      name: "Ancient Red Dragon",
      description: "A colossal and fire-breathing dragon that terrorizes the land.",
      difficulty: 10,
      traits: ["Fire breath", "Flight", "Ancient wisdom", "Treasure hoard"],
      motivation: "Establish dominance over a vast territory and accumulate wealth"
    },
    "2": {
      name: "Giant Kraken",
      description: "A massive sea creature that can sink ships with ease.",
      difficulty: 7,
      traits: ["Tentacle attacks", "Ocean control", "Ship destroyer", "Deep dwelling"],
      motivation: "Protect its underwater domain from surface dwellers"
    },
    "3": {
      name: "Dire Wolf Pack",
      description: "A pack of supernatural wolves that hunt in unison.",
      difficulty: 5,
      traits: ["Pack tactics", "Relentless tracking", "Nocturnal", "Enhanced senses"],
      motivation: "Expand territory and hunt increasingly larger prey"
    },
    "4": {
      name: "Chimera",
      description: "A hybrid beast with the characteristics of various deadly animals.",
      difficulty: 6,
      traits: ["Multiple attacks", "Adaptability", "Unpredictable", "Territorial"],
      motivation: "Defend its territory from all intruders"
    },
    "5": {
      name: "Griffin",
      description: "A majestic and powerful creature with the body of a lion and the wings of an eagle.",
      difficulty: 5,
      traits: ["Flight", "Sharp vision", "Powerful claws", "Pride-based society"],
      motivation: "Protect its nesting grounds and young"
    },
    "6": {
      name: "Manticore",
      description: "A fearsome creature with the body of a lion, wings of a bat, and a tail with deadly spikes.",
      difficulty: 6,
      traits: ["Spike projectiles", "Flight", "Venomous tail", "Human-like intelligence"],
      motivation: "Hunt for the pleasure of killing, particularly humans"
    },
    "7": {
      name: "Hydra",
      description: "A multi-headed serpent-like creature with regenerative abilities.",
      difficulty: 7,
      traits: ["Regenerating heads", "Multiple attacks", "Toxic blood", "Amphibious"],
      motivation: "Consume all living things in its swamp domain"
    },
    "8": {
      name: "Roc",
      description: "A colossal bird of prey with the ability to carry away large creatures.",
      difficulty: 6,
      traits: ["Massive size", "Powerful talons", "Hurricane-force wings", "Keen eyesight"],
      motivation: "Feed its young with the largest prey it can find"
    },
    "9": {
      name: "Basilisk",
      description: "A reptilian creature capable of turning its prey to stone with a single glance.",
      difficulty: 7,
      traits: ["Petrifying gaze", "Venomous bite", "Armored scales", "Subterranean"],
      motivation: "Create a 'garden' of stone statues from its victims"
    },
    "10": {
      name: "Kraken Lord",
      description: "An ancient and intelligent Kraken with control over the oceans.",
      difficulty: 8,
      traits: ["Mind control", "Tidal manipulation", "Centuries of knowledge", "Massive size"],
      motivation: "Establish dominion over all sea-faring civilizations"
    },
    jack: {
      name: "Thunder Behemoth",
      description: "A massive and electrified creature that creates thunderstorms.",
      difficulty: 8,
      traits: ["Lightning generation", "Thunder attacks", "Weather control", "Massive size"],
      motivation: "Harness the power of storms to become stronger"
    },
    queen: {
      name: "Dire Phoenix",
      description: "A legendary bird of fire that brings destruction and rebirth.",
      difficulty: 9,
      traits: ["Resurrection", "Fire aura", "Flight", "Temporal awareness"],
      motivation: "Purify the world with cleansing fire to trigger rebirth"
    },
    king: {
      name: "Tarrasque",
      description: "An immense and nearly indestructible creature that devours everything in its path.",
      difficulty: 10,
      traits: ["Regeneration", "Indestructible hide", "Insatiable hunger", "City destroyer"],
      motivation: "Consume endlessly, growing more powerful with each meal"
    }
  },

  // DIAMONDS - MYSTICAL THREATS
  diamonds: {
    ace: {
      name: "Archmage's Tower",
      description: "A towering and magical structure filled with arcane knowledge.",
      difficulty: 8,
      traits: ["Sentient defenses", "Reality manipulation", "Dimensional spaces", "Magical traps"],
      motivation: "Protect the archmage's knowledge and experiments"
    },
    "2": {
      name: "Gorgon Queen",
      description: "A powerful Gorgon with the ability to turn creatures to stone with a gaze.",
      difficulty: 7,
      traits: ["Petrifying gaze", "Snake hair", "Ancient knowledge", "Stone garden"],
      motivation: "Build a perfect collection of petrified 'art' from living subjects"
    },
    "3": {
      name: "Corrupted Wizard",
      description: "A once-noble spellcaster who has been twisted by dark magic.",
      difficulty: 6,
      traits: ["Spell mastery", "Corrupting touch", "Magical sight", "Unstable power"],
      motivation: "Obtain forbidden knowledge at any cost"
    },
    "4": {
      name: "Vampire Lord's Lair",
      description: "The lair of a charismatic vampire lord and their undead minions.",
      difficulty: 7,
      traits: ["Mind control", "Blood magic", "Undead servants", "Ancient wealth"],
      motivation: "Expand its influence and create a kingdom of the night"
    },
    "5": {
      name: "Illusionist's Realm",
      description: "A domain where reality and illusion are indistinguishable.",
      difficulty: 6,
      traits: ["Reality warping", "Mind manipulation", "False paths", "Truth disguised as lies"],
      motivation: "Study the nature of perception and reality"
    },
    "6": {
      name: "Elemental Vortex",
      description: "A swirling maelstrom of elemental forces threatening to expand unchecked.",
      difficulty: 7,
      traits: ["Elemental manifestations", "Environmental destruction", "Planar thinning", "Chaotic energy"],
      motivation: "Pull the material world into elemental chaos"
    },
    "7": {
      name: "Mind Flayer Colony",
      description: "A hidden community of brain-eating psychic horrors.",
      difficulty: 8,
      traits: ["Telepathy", "Mind control", "Intelligence drain", "Alien intelligence"],
      motivation: "Harvest intelligent brains and build a mental collective"
    },
    "8": {
      name: "Possessed Artifact",
      description: "A legendary item corrupted by a malevolent entity.",
      difficulty: 6,
      traits: ["Mind influence", "Magical powers", "Corruption spread", "Indestructible"],
      motivation: "Corrupt powerful individuals to spread its influence"
    },
    "9": {
      name: "Crystal Mind",
      description: "A beguiling crystal is at the center of a strange cult of worship.",
      difficulty: 7,
      traits: ["Mind control", "Knowledge repository", "Energy manipulation", "Hive mind creation"],
      motivation: "Assimilate all sentient minds into a collective consciousness"
    },
    "10": {
      name: "Arcane Guardian",
      description: "A wizard's arcane guardian breaks from control and goes on a rampage.",
      difficulty: 8,
      traits: ["Spell immunity", "Adaptive defense", "Magical attacks", "Relentless pursuit"],
      motivation: "Fulfill its original directive, now corrupted beyond recognition"
    },
    jack: {
      name: "Sphinx's Riddle",
      description: "A sphinx with riddles and challenges that guard a treasure.",
      difficulty: 6,
      traits: ["Ancient wisdom", "Reality manipulation", "Time control", "Magical prowess"],
      motivation: "Test the worthy and eliminate the unworthy"
    },
    queen: {
      name: "Witch Queen's Curse",
      description: "A powerful witch queen who has cursed the land with dark magic.",
      difficulty: 9,
      traits: ["Curses", "Prophecy", "Nature manipulation", "Familiar army"],
      motivation: "Remake the world according to her twisted vision"
    },
    king: {
      name: "Ancient Djinn Awakening",
      description: "An ancient and powerful djinn is awakened, granting wishes with unpredictable consequences.",
      difficulty: 10,
      traits: ["Wish manipulation", "Reality warping", "Elemental powers", "Immortality"],
      motivation: "Twist the desires of mortals to cause maximum chaos"
    }
  },

  // CLUBS - POLITICAL
  clubs: {
    ace: {
      name: "Cult of the Void",
      description: "A secretive cult that seeks to unleash an otherworldly entity.",
      difficulty: 8,
      traits: ["Infiltration", "Sacrifice rituals", "Fanatical loyalty", "Eldritch knowledge"],
      motivation: "Summon a being from beyond the stars to remake the world"
    },
    "2": {
      name: "Dwarven Insurrection",
      description: "A militant uprising among the dwarven clans.",
      difficulty: 6,
      traits: ["Superior weaponry", "Underground knowledge", "Defensive tactics", "Resource control"],
      motivation: "Reclaim ancestral lands and treasures from surface dwellers"
    },
    "3": {
      name: "Orcish Warband",
      description: "A powerful and organized orc army on the march.",
      difficulty: 7,
      traits: ["Overwhelming numbers", "Tribal unity", "Savage strength", "Battlefield adaptability"],
      motivation: "Expand territory through conquest and prove their strength"
    },
    "4": {
      name: "Elven Council Divide",
      description: "A schism among the elven leaders that threatens their unity.",
      difficulty: 6,
      traits: ["Ancient magic", "Political manipulation", "Centuries of planning", "Resource control"],
      motivation: "Enforce their faction's vision for the future of elvenkind"
    },
    "5": {
      name: "Goblin Syndicate",
      description: "An organized and cunning group of goblin thieves and spies.",
      difficulty: 5,
      traits: ["Underground network", "Trap mastery", "Information trading", "Numerical advantage"],
      motivation: "Accumulate wealth and influence through criminal enterprises"
    },
    "6": {
      name: "Mercenary Guild Conflict",
      description: "A power struggle within a prominent mercenary organization.",
      difficulty: 7,
      traits: ["Combat experience", "Strategic resources", "Political connections", "Guild secrets"],
      motivation: "Control the most lucrative contracts and territories"
    },
    "7": {
      name: "Nomadic Tribes Feud",
      description: "Clashes between nomadic tribes disrupt the land.",
      difficulty: 5,
      traits: ["Mobility", "Survival skills", "Ancient grudges", "Territorial claims"],
      motivation: "Secure limited resources and sacred migratory paths"
    },
    "8": {
      name: "City-State Rebellion",
      description: "A rebellion against the oppressive rule of a city-state.",
      difficulty: 6,
      traits: ["Popular support", "Urban warfare", "Revolutionary ideology", "Internal spies"],
      motivation: "Overthrow the current leadership and establish a new order"
    },
    "9": {
      name: "Pirate Confederacy",
      description: "A loose alliance of pirate crews that plagues coastal regions.",
      difficulty: 7,
      traits: ["Naval superiority", "Hidden bases", "Trade disruption", "Infiltration network"],
      motivation: "Control shipping lanes and establish a pirate nation"
    },
    "10": {
      name: "Mage's Cabal",
      description: "A group of powerful mages that seek to control magical knowledge.",
      difficulty: 8,
      traits: ["Spell mastery", "Artifact collection", "Information suppression", "Political manipulation"],
      motivation: "Monopolize magical power and restrict access to others"
    },
    jack: {
      name: "Rogue Nation",
      description: "An independent and lawless territory ruled by roguish leaders.",
      difficulty: 7,
      traits: ["Deception mastery", "Assassination networks", "Black market control", "Diplomatic immunity"],
      motivation: "Maintain independence through manipulation and subterfuge"
    },
    queen: {
      name: "Dystopian Empire",
      description: "A dystopian empire with strict control over its citizens.",
      difficulty: 9,
      traits: ["Surveillance systems", "Propaganda", "Military supremacy", "Resource monopoly"],
      motivation: "Expand borders and subjugate all under its controlled society"
    },
    king: {
      name: "Imperial Conquest",
      description: "An expansionist empire bent on conquering neighboring lands.",
      difficulty: 10,
      traits: ["Military might", "Economic pressure", "Diplomatic manipulation", "Cultural erasure"],
      motivation: "Become the dominant global power through systematic conquest"
    }
  },

  // SPADES - UNDEAD
  spades: {
    ace: {
      name: "Lich",
      description: "An undead sorcerer with immense magical powers.",
      difficulty: 9,
      traits: ["Phylactery", "Spell mastery", "Undead minions", "Ancient knowledge"],
      motivation: "Pursue immortality and arcane supremacy"
    },
    "2": {
      name: "Horde of Zombies",
      description: "An army of reanimated corpses that seeks to consume the living.",
      difficulty: 6,
      traits: ["Overwhelming numbers", "Disease spread", "Relentless pursuit", "Infectious bites"],
      motivation: "Spread and consume, growing the horde with each victim"
    },
    "3": {
      name: "Vengeful Spirits",
      description: "Restless ghosts bound to the material plane by unfinished business.",
      difficulty: 5,
      traits: ["Incorporeal", "Emotional manipulation", "Possession", "Environmental control"],
      motivation: "Resolve unfinished business or make others suffer their fate"
    },
    "4": {
      name: "Vampire Coven",
      description: "A group of powerful vampires that control a region.",
      difficulty: 8,
      traits: ["Blood magic", "Shapeshifting", "Mental domination", "Aristocratic influence"],
      motivation: "Extend their influence and establish a permanent feeding ground"
    },
    "5": {
      name: "Death Knight",
      description: "A fallen warrior resurrected and infused with dark magic.",
      difficulty: 7,
      traits: ["Unholy strength", "Soul draining", "Battle mastery", "Cursed weapons"],
      motivation: "Serve its dark master and spread death in its wake"
    },
    "6": {
      name: "Skeletal Dragon",
      description: "A colossal animated dragon skeleton.",
      difficulty: 8,
      traits: ["Death breath", "Flight", "Necrotic aura", "Indestructible bones"],
      motivation: "Gather power to transition into a dracolich"
    },
    "7": {
      name: "Necromancer Cult",
      description: "A secretive group of spellcasters that raise the dead.",
      difficulty: 7,
      traits: ["Undead creation", "Sacrifice rituals", "Life manipulation", "Soul binding"],
      motivation: "Unlock the secrets of true immortality"
    },
    "8": {
      name: "Haunted Manor",
      description: "A cursed mansion filled with restless spirits.",
      difficulty: 6,
      traits: ["Spatial manipulation", "Emotional feeding", "Memory projection", "Possession"],
      motivation: "Trap more souls to increase its power and area of influence"
    },
    "9": {
      name: "Grave Titan",
      description: "An enormous undead creature that raises zombies from the earth.",
      difficulty: 8,
      traits: ["Massive size", "Necromantic aura", "Earth manipulation", "Undead creation"],
      motivation: "Create a kingdom of the dead by animating all corpses"
    },
    "10": {
      name: "Plague of Mummies",
      description: "A supernatural plague that reanimates the dead.",
      difficulty: 7,
      traits: ["Disease spread", "Curse transmission", "Ancient magic", "Withering touch"],
      motivation: "Spread the plague to all living beings, continuing an ancient curse"
    },
    jack: {
      name: "Ghoul Lord",
      description: "A powerful ghoul that commands an army of flesh-eating undead.",
      difficulty: 7,
      traits: ["Paralytic touch", "Enhanced speed", "Flesh consumption", "Pack leadership"],
      motivation: "Create a growing army of ghouls to feast on the living"
    },
    queen: {
      name: "Banshee Queen",
      description: "A vengeful spirit that brings death with her wails.",
      difficulty: 8,
      traits: ["Death wail", "Emotional manipulation", "Spirit control", "Incorporeal"],
      motivation: "Make the living suffer the same pain that led to her death"
    },
    king: {
      name: "Wraith King",
      description: "A malevolent spirit with the ability to drain the life force from the living.",
      difficulty: 9,
      traits: ["Life drain", "Incorporeal", "Darkness manipulation", "Soul collection"],
      motivation: "Collect souls to open a gateway to a realm of undeath"
    }
  }
};

// Helper function to get threat category based on suit
function getThreatCategory(suit) {
  const categories = {
    hearts: 'beasts',
    diamonds: 'mystical',
    clubs: 'political',
    spades: 'undead'
  };
  
  return categories[suit] || 'unknown';
}

// Helper function to get difficulty rating as text
function getDifficultyText(rating) {
  if (rating <= 3) return "Easy";
  if (rating <= 5) return "Moderate";
  if (rating <= 7) return "Challenging";
  if (rating <= 9) return "Formidable";
  return "Legendary";
}

// Function to get threat data from a card
function getThreatFromCard(card) {
  const { suit, rank } = card;
  const category = getThreatCategory(suit);
  
  // Check if we have data for this specific card
  if (threats[suit] && threats[suit][rank]) {
    return {
      ...threats[suit][rank],
      category,
      difficultyText: getDifficultyText(threats[suit][rank].difficulty)
    };
  }
  
  // Fallback for any missing data
  return {
    name: `Unknown ${category} Threat`,
    description: `A mysterious threat of the ${category} category.`,
    difficulty: 5,
    difficultyText: "Moderate",
    traits: ["Unknown", "Mysterious", "Unpredictable"],
    motivation: "Unknown objectives",
    category
  };
}

// Function to generate the "Great Threat" for a world
function generateGreatThreat(seed) {
  // In a real implementation, you would use the seed to deterministically select a threat
  // For now, we'll use a simple random approach
  
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const faces = ['jack', 'queen', 'king']; // Great threats should be powerful
  
  // Pseudo-random selection based on seed
  const seedNum = parseInt(seed.replace(/[^0-9]/g, '')) || Date.now();
  const suitIndex = seedNum % suits.length;
  const faceIndex = (seedNum % 100) % faces.length;
  
  const card = {
    suit: suits[suitIndex],
    rank: faces[faceIndex]
  };
  
  const threat = getThreatFromCard(card);
  
  // Add some additional properties specific to the great threat
  return {
    ...threat,
    isGreatThreat: true,
    location: {
      // Random location on the map
      x: Math.floor((seedNum % 20) - 10),
      y: Math.floor((seedNum % 30) - 15)
    },
    influence: {
      radius: 3 + (threat.difficulty / 2), // Higher difficulty threats have wider influence
      effects: [
        "Environmental changes",
        "Minion presence increases",
        "Dreams are affected"
      ]
    }
  };
}

export default threats;
export { getThreatFromCard, getThreatCategory, generateGreatThreat };
