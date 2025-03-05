// situations.js - Complete situation data organized by suit (situation type)
const situations = {
  // HEARTS - ENCOUNTERS WITH PEOPLE
  hearts: {
    ace: {
      name: "Lost Traveler",
      description: "Encounter a lost traveler seeking directions.",
      outcomes: [
        "Provide correct directions and gain a favor or information",
        "Lead them to safety and gain a reward",
        "Discover they're not actually lost, but testing your trustworthiness"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the traveler"
      }
    },
    "2": {
      name: "Friendly Adventurers",
      description: "Meet a group of friendly adventurers on a quest.",
      outcomes: [
        "Share information and resources with mutual benefit",
        "Join forces temporarily for a common goal",
        "Learn of a nearby opportunity or danger"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the adventurers"
      }
    },
    "3": {
      name: "Nomadic Merchant",
      description: "Come across a nomadic merchant offering rare goods.",
      outcomes: [
        "Purchase useful items at fair prices",
        "Trade for something you need",
        "Gain information about the region"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the merchant"
      }
    },
    "4": {
      name: "Friendly Traders",
      description: "Stumble upon a campsite of friendly traders.",
      outcomes: [
        "Enjoy hospitality and rest safely",
        "Trade for supplies at good rates",
        "Learn about market conditions and opportunities"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the traders"
      }
    },
    "5": {
      name: "Hermit",
      description: "Meet a hermit living in the wilderness.",
      outcomes: [
        "Receive wisdom or specialized knowledge",
        "Be tasked with an errand in exchange for guidance",
        "Discover the hermit has important connections"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the hermit"
      }
    },
    "6": {
      name: "Curious Child",
      description: "Encounter a curious child exploring the area.",
      outcomes: [
        "Help the child return to their family for a reward",
        "Learn surprising information known only to the child",
        "Discover the child has special abilities or knowledge"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the child"
      }
    },
    "7": {
      name: "Thieves",
      description: "Find a group of thieves plotting their next heist.",
      outcomes: [
        "Overhear valuable information",
        "Confront them and potentially turn them in for a reward",
        "Join them for a share of the spoils"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the thieves"
      }
    },
    "8": {
      name: "Fellow Explorer",
      description: "Run into a fellow explorer sharing tales of adventure.",
      outcomes: [
        "Exchange information about your discoveries",
        "Form an alliance to explore dangerous areas",
        "Receive a map to a promising location"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the explorer"
      }
    },
    "9": {
      name: "Rival Adventurer",
      description: "Come across a rival adventurer searching for treasure.",
      outcomes: [
        "Compete for the same objective",
        "Form an uneasy alliance of convenience",
        "Trick them into revealing their destination"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the rival"
      }
    },
    "10": {
      name: "Local Guide",
      description: "Meet a local guide who offers to show you the way.",
      outcomes: [
        "Gain safe passage through dangerous territory",
        "Learn secret paths and shortcuts",
        "Discover the guide has ulterior motives"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the guide"
      }
    },
    jack: {
      name: "Rowdy Mercenaries",
      description: "Cross paths with a band of rowdy mercenaries.",
      outcomes: [
        "Share drinks and gain information about local conflicts",
        "Hire their services for a dangerous task",
        "Navigate a tense situation as they test your mettle"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the mercenaries"
      }
    },
    queen: {
      name: "Reclusive Mage",
      description: "Encounter a reclusive mage studying the surroundings.",
      outcomes: [
        "Receive magical insight or assistance",
        "Learn about magical anomalies in the area",
        "Be asked to gather rare components in exchange for a spell"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the mage"
      }
    },
    king: {
      name: "Diplomats",
      description: "Run into a group of diplomats negotiating a deal.",
      outcomes: [
        "Become involved in high-level politics",
        "Be hired as neutral couriers for sensitive messages",
        "Overhear plans that could affect the region's balance of power"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine the race of the diplomats"
      }
    }
  },

  // DIAMONDS - FINDING TREASURE
  diamonds: {
    ace: {
      name: "Hidden Chest",
      description: "Discover a hidden chest beneath a pile of rocks.",
      outcomes: [
        "Find valuable items within",
        "Spring a trap when opening it",
        "Discover the chest is magical in nature"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "2": {
      name: "Glimmering Gemstone",
      description: "Find a glimmering gemstone in a mossy crevice.",
      outcomes: [
        "Acquire a valuable gem",
        "Discover the gem has magical properties",
        "Attract attention from others who want the gem"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "3": {
      name: "Abandoned Backpack",
      description: "Come across an abandoned adventurer's backpack.",
      outcomes: [
        "Gain useful supplies and perhaps a map",
        "Discover clues about what happened to the owner",
        "Find the owner's journal with valuable information"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "4": {
      name: "Shiny Trinket",
      description: "Notice a shiny trinket caught in a tree's branches.",
      outcomes: [
        "Retrieve an item of moderate value",
        "Find a token that grants access to a hidden location",
        "Discover the trinket is an object of significance to someone powerful"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "5": {
      name: "Concealed Cache",
      description: "Stumble upon a concealed cache of valuable items.",
      outcomes: [
        "Gain a substantial haul of valuable goods",
        "Find items that suggest criminal activity",
        "Trigger an alarm that alerts the cache's owner"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "6": {
      name: "Treasure Map",
      description: "Find a long-forgotten treasure map in the dirt.",
      outcomes: [
        "Acquire directions to significant wealth",
        "Decipher cryptic clues that lead to adventure",
        "Discover the map is sought by dangerous people"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "7": {
      name: "Ancient Relic",
      description: "Discover a well-preserved relic half-buried in the ground.",
      outcomes: [
        "Unearth an item of historical and monetary value",
        "Find an artifact with latent magical powers",
        "Awaken a dormant guardian tied to the relic"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "8": {
      name: "Rare Herbs",
      description: "Locate a bundle of rare herbs used in potions.",
      outcomes: [
        "Harvest valuable alchemical ingredients",
        "Discover the herbs have unusual properties",
        "Find that the herbs grow here due to magical conditions"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "9": {
      name: "Ornate Chest",
      description: "Come across an ornate chest half-buried in sand.",
      outcomes: [
        "Open a container full of valuable goods",
        "Find the chest is locked with complex mechanisms",
        "Discover the chest contains something unexpected"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    "10": {
      name: "Hidden Gold",
      description: "Find a hidden stash of gold coins in a hollow log.",
      outcomes: [
        "Collect a significant amount of currency",
        "Discover markings that suggest the coins belong to someone dangerous",
        "Find a note with the gold explaining its purpose"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    jack: {
      name: "Ancient Tome",
      description: "Discover an old tome filled with ancient knowledge.",
      outcomes: [
        "Learn valuable historical or magical information",
        "Gain a spellbook with unique spells",
        "Find a text that many would kill to possess"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    queen: {
      name: "Amulet",
      description: "Notice a glinting amulet hanging from a statue.",
      outcomes: [
        "Acquire a valuable piece of jewelry",
        "Find a magical item with protective powers",
        "Discover the amulet is a key to a hidden location"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    },
    king: {
      name: "Magical Artifact",
      description: "Stumble upon a mysterious magical artifact.",
      outcomes: [
        "Gain a powerful magical item",
        "Find an object tied to the region's history",
        "Discover the artifact has a will of its own"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine treasure contents"
      }
    }
  },

  // CLUBS - CHALLENGES
  clubs: {
    ace: {
      name: "Treacherous Climb",
      description: "Face a treacherous climb up a sheer rockface.",
      outcomes: [
        "Successfully navigate to reach a vantage point",
        "Discover a hidden cave or path halfway up",
        "Dislodge something valuable during the climb"
      ],
      skill: "Athletics"
    },
    "2": {
      name: "Confusing Canyon",
      description: "Navigate through a twisting and confusing canyon.",
      outcomes: [
        "Find your way through to new territory",
        "Discover signs of those who failed before you",
        "Find unexpected resources or shelter within"
      ],
      skill: "Survival"
    },
    "3": {
      name: "Rickety Bridge",
      description: "Cross a chasm on a rickety rope bridge.",
      outcomes: [
        "Make it safely across to continue your journey",
        "Repair the bridge, earning goodwill from locals",
        "Salvage valuable materials if the bridge collapses"
      ],
      skill: "Acrobatics"
    },
    "4": {
      name: "Aggressive Toll Collector",
      description: "Encounter an aggressive NPC demanding toll payment.",
      outcomes: [
        "Negotiate a reduced price or alternative payment",
        "Find a way around without confrontation",
        "Discover why they're so desperate for payment"
      ],
      skill: "Persuasion"
    },
    "5": {
      name: "Wild Animal",
      description: "Talk down a wild animal that's blocking your path.",
      outcomes: [
        "Calm the creature and pass safely",
        "Befriend it, gaining a temporary animal companion",
        "Learn what's making local wildlife so agitated"
      ],
      skill: "Animal Handling"
    },
    "6": {
      name: "Natural Hazard",
      description: "Survive a sudden sandstorm or blizzard.",
      outcomes: [
        "Endure the conditions and continue afterward",
        "Find shelter that contains unexpected opportunities",
        "Rescue others caught in the same conditions"
      ],
      skill: "Survival"
    },
    "7": {
      name: "Dark Cave",
      description: "Traverse a dark and winding cave system.",
      outcomes: [
        "Navigate successfully to the other side",
        "Discover valuable mineral deposits",
        "Find evidence of previous explorers or inhabitants"
      ],
      skill: "Perception"
    },
    "8": {
      name: "Collapsing Chamber",
      description: "Escape from a collapsing underground chamber.",
      outcomes: [
        "Exit safely before everything comes down",
        "Save valuable artifacts during your escape",
        "Discover the collapse revealed something hidden"
      ],
      skill: "Athletics"
    },
    "9": {
      name: "Cunning Trap",
      description: "Outsmart a cunning trap set by an unknown foe.",
      outcomes: [
        "Avoid or disarm it safely",
        "Learn about who set it and why",
        "Turn the trap to your advantage"
      ],
      skill: "Investigation"
    },
    "10": {
      name: "Magical Barrier",
      description: "Solve a riddle to gain passage through a magical barrier.",
      outcomes: [
        "Pass through to access what lies beyond",
        "Learn magical knowledge from studying the barrier",
        "Discover who created the barrier and why"
      ],
      skill: "Arcana"
    },
    jack: {
      name: "Territorial Wildlife",
      description: "Face off against a group of territorial wildlife.",
      outcomes: [
        "Find a way to pass without bloodshed",
        "Earn safe passage through their territory",
        "Discover why they're unusually aggressive"
      ],
      skill: "Intimidation"
    },
    queen: {
      name: "Deadly Obstacle",
      description: "Overcome a deadly natural obstacle like quicksand.",
      outcomes: [
        "Navigate past the danger successfully",
        "Discover a reliable way through for future trips",
        "Rescue someone else caught in the same predicament"
      ],
      skill: "Athletics"
    },
    king: {
      name: "Physical Challenge",
      description: "Engage in a dangerous physical challenge with rivals.",
      outcomes: [
        "Win respect and information through victory",
        "Learn valuable techniques from your opponents",
        "Forge an alliance with impressed rivals"
      ],
      skill: "Athletics"
    }
  },

  // SPADES - COMBAT
  spades: {
    ace: {
      name: "Ambush",
      description: "Without warning, you find yourself surrounded, an unseen adversary striking from concealed positions.",
      escalation: "Immediate combat with surprise disadvantage",
      tactics: [
        "Identify the attackers' positions",
        "Find cover quickly",
        "Create a diversion to escape"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "2": {
      name: "Diplomatic Breakdown",
      description: "Initial attempts to converse or negotiate collapse, as misunderstandings or sudden provocations escalate the situation.",
      escalation: "Tension rises into violence",
      tactics: [
        "Make one last attempt at de-escalation",
        "Prepare defensively as talks break down",
        "Identify the provocateur causing the breakdown"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "3": {
      name: "Territory Challenge",
      description: "Suddenly confronted, it's clear that you've unknowingly crossed a boundary.",
      escalation: "Territorial defenders become aggressive",
      tactics: [
        "Show signs of respect or submission",
        "Claim ignorance of the boundary",
        "Offer something of value for safe passage"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "4": {
      name: "Chase",
      description: "You're being chased and have to turn to fight.",
      escalation: "Forced into combat after being pursued",
      tactics: [
        "Find defensible ground to make your stand",
        "Set an ambush for your pursuers",
        "Split up pursuers to fight them in smaller groups"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "5": {
      name: "Accidental Provocation",
      description: "Something you do, perhaps unwittingly, is taken as a direct affront or challenge, leading to immediate combat.",
      escalation: "Hostile reaction to an innocent action",
      tactics: [
        "Attempt to explain the misunderstanding",
        "Offer restitution for the perceived offense",
        "Prepare for combat while trying to defuse"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "6": {
      name: "Disturbance",
      description: "Your actions, maybe breaking something or making noise, attracts unwanted attention. Hostile entities approach to investigate and engage.",
      escalation: "Attention drawn by noise or disruption",
      tactics: [
        "Set up an ambush for the approaching threat",
        "Create a diversion to draw attention elsewhere",
        "Prepare a hasty defensive position"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "7": {
      name: "Defensive Stance",
      description: "You come upon a scene where entities are already on high alert. Seeing you, they immediately perceive a threat and engage.",
      escalation: "Interrupting already-tense situation",
      tactics: [
        "Try to show you're not with their enemies",
        "Look for cover or defensive position",
        "Identify what has them on alert"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "8": {
      name: "Protect the Innocent",
      description: "Civilians or non-combatants are caught in the fray, and you must protect them.",
      escalation: "Combat complicated by vulnerable bystanders",
      tactics: [
        "Position yourself between threats and innocents",
        "Find or create shelter for the vulnerable",
        "Create a diversion to draw danger away"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "9": {
      name: "Desperate Struggle",
      description: "Combat ensues as you and another party both seek control over a coveted prize. The tension is palpable, as neither side is willing to relent.",
      escalation: "Conflict over a valuable resource or item",
      tactics: [
        "Focus on securing the prize while fighting",
        "Attempt to bargain for shared access",
        "Create a diversion to snatch the prize"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    "10": {
      name: "Entangled Fate",
      description: "A sudden event, like a collapsing structure or rushing water, throws you and others into close quarters, resulting in immediate combat.",
      escalation: "Environmental hazard forces confrontation",
      tactics: [
        "Deal with the environmental threat first",
        "Use the chaos to gain advantage",
        "Look for escape routes while defending yourself"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    jack: {
      name: "Trapped",
      description: "The environment itself turns treacherous as a trap is sprung, and foes use this to their advantage to launch an attack.",
      escalation: "Combination of environmental and enemy threats",
      tactics: [
        "Focus on freeing yourself from the trap",
        "Use the trap's mechanism against attackers",
        "Call for allies to help while you defend"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    queen: {
      name: "Bounty Hunter's Prize",
      description: "A bounty hunter believes you're their target and tries to capture you.",
      escalation: "Targeted for capture, not necessarily death",
      tactics: [
        "Prove your identity is not their target",
        "Offer information about their actual target",
        "Use non-lethal tactics to escape"
      ],
      additionalDraw: {
        required: true,
        count: 1,
        purpose: "Determine combatants"
      }
    },
    king: {
      name: "Crossfire Conflict",
      description: "You encounter two groups clashing in combat and inadvertently become a third party.",
      escalation: "Caught between warring factions",
      tactics: [
        "Choose a side strategically",
        "Attempt to remain neutral while defending yourself",
        "Use the conflict as cover to achieve another goal"
      ],
      additionalDraw: {
        required: true,
        count: 2,
        purpose: "Determine both groups of combatants"
      }
    }
  }
};

// Helper function to get situation category based on suit
function getSituationCategory(suit) {
  const categories = {
    hearts: 'people',
    diamonds: 'treasure',
    clubs: 'challenge',
    spades: 'combat'
  };
  
  return categories[suit] || 'unknown';
}

// Function to get situation data from a card
function getSituationFromCard(card) {
  const { suit, rank } = card;
  const category = getSituationCategory(suit);
  
  // Check if we have data for this specific card
  if (situations[suit] && situations[suit][rank]) {
    return {
      ...situations[suit][rank],
      category,
      suit,
      rank
    };
  }
  
  // Fallback for any missing data
  return {
    name: `Unknown ${category} Situation`,
    description: `An unexpected situation involving ${category}.`,
    outcomes: ["Resolve the situation cautiously", "Seek more information", "Prepare for the unexpected"],
    category,
    suit,
    rank
  };
}

// Function to determine if additional cards need to be drawn
function requiresAdditionalDraw(situation) {
  return situation?.additionalDraw?.required || false;
}

// Function to get how many additional cards to draw
function getAdditionalDrawCount(situation) {
  return situation?.additionalDraw?.count || 0;
}

// Function to get the purpose of additional card draws
function getAdditionalDrawPurpose(situation) {
  return situation?.additionalDraw?.purpose || "Determine additional details";
}

export default situations;
export { 
  getSituationFromCard, 
  getSituationCategory,
  requiresAdditionalDraw,
  getAdditionalDrawCount,
  getAdditionalDrawPurpose
};
