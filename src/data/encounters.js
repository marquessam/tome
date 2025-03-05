// encounters.js - Complete combat encounter data organized by suit (enemy type)
const encounters = {
  // HEARTS - BEASTS
  hearts: {
    ace: {
      name: "Wolf Pack",
      description: "A coordinated group of hungry wolves hunting in unison.",
      difficulty: 3,
      traits: ["Pack tactics", "Surrounding prey", "Relentless pursuit"],
      numberAppearing: "2d4", // 2-8 wolves
      tactics: "The wolves attempt to surround their prey, attacking from multiple angles. They focus on the weakest-looking target first.",
      loot: ["Wolf pelts", "Sharp fangs"]
    },
    "2": {
      name: "Territorial Serpent",
      description: "A large snake, aggressive when its territory is threatened.",
      difficulty: 2,
      traits: ["Venomous bite", "Constriction", "Camouflage"],
      numberAppearing: "1",
      tactics: "The serpent attempts to surprise its target from hiding, striking with venomous fangs before attempting to constrict.",
      loot: ["Venom sacs", "Exotic skin"]
    },
    "3": {
      name: "Giant Spider",
      description: "Massive spiders known for their venomous bite and sticky webs.",
      difficulty: 3,
      traits: ["Web creation", "Poisonous bite", "Wall climbing"],
      numberAppearing: "1d3", // 1-3 spiders
      tactics: "The spiders try to entangle targets in webs before approaching to deliver venomous bites to immobilized prey.",
      loot: ["Spider silk", "Venom glands", "Fangs"]
    },
    "4": {
      name: "Corpse Beetle Swarm",
      description: "Swarms that are attracted to decay, can strip flesh from bones.",
      difficulty: 4,
      traits: ["Swarm mobility", "Burrowing", "Flesh-eating"],
      numberAppearing: "1 swarm",
      tactics: "The swarm surrounds victims, biting from all angles and overwhelming through sheer numbers and persistence.",
      loot: ["Unusual carapace fragments", "Specialized mandibles"]
    },
    "5": {
      name: "Verdant Maw Plantfiend",
      description: "Carnivorous plant monstrosities that trap and devour prey.",
      difficulty: 5,
      traits: ["Luring scent", "Digestive acid", "Root mobility"],
      numberAppearing: "1",
      tactics: "The plant creature attracts prey with sweet scents, then ensnares them with vines before pulling them toward its digestive maw.",
      loot: ["Exotic plant fibers", "Digestive enzymes", "Seed pods"]
    },
    "6": {
      name: "Swooping Harpy",
      description: "Half-woman, half-bird, aggressive and known to steal shiny objects.",
      difficulty: 5,
      traits: ["Flight", "Shrieking call", "Sharp talons"],
      numberAppearing: "1d4", // 1-4 harpies
      tactics: "Harpies attack from above, using their piercing shrieks to disorient before swooping down with razor-sharp talons.",
      loot: ["Feathers", "Stolen trinkets", "Talon necklace"]
    },
    "7": {
      name: "Stone-Eye Basilisk",
      description: "Reptiles whose gaze can immobilize their prey.",
      difficulty: 6,
      traits: ["Petrifying gaze", "Poisonous bite", "Tough scales"],
      numberAppearing: "1",
      tactics: "The basilisk relies primarily on its petrifying gaze, turning victims to stone before approaching to feed at leisure.",
      loot: ["Stone-flecked scales", "Petrification gland", "Crystallized eye"]
    },
    "8": {
      name: "Winged Chimera",
      description: "A hybrid creature, fiercely territorial and unpredictable.",
      difficulty: 7,
      traits: ["Multiple attacks", "Fire breath", "Flight"],
      numberAppearing: "1",
      tactics: "The chimera uses its flight to maintain distance while breathing fire, then closes for vicious physical attacks from multiple heads.",
      loot: ["Mixed fur and scales", "Unusual horns", "Multiple hearts"]
    },
    "9": {
      name: "Naga",
      description: "Serpent-like creatures known for their constricting strength.",
      difficulty: 6,
      traits: ["Hypnotic gaze", "Constriction", "Spellcasting"],
      numberAppearing: "1",
      tactics: "The naga attempts to hypnotize opponents first, then uses its powerful coils to constrict while casting spells from a safe distance.",
      loot: ["Jewel-encrusted scales", "Magical focus", "Ritual components"]
    },
    "10": {
      name: "Spiked Manticore",
      description: "A winged creature with a scorpion tail, known for its triple threat: bite, sting, and claw.",
      difficulty: 7,
      traits: ["Tail spike volley", "Flight", "Multiple attacks"],
      numberAppearing: "1",
      tactics: "The manticore begins by launching tail spikes from a distance, then swoops in for bite and claw attacks on weakened targets.",
      loot: ["Tail spikes", "Lion-like mane", "Venom sac"]
    },
    jack: {
      name: "Golden Griffin",
      description: "Majestic winged beasts with the body of a lion, known for their dive attacks.",
      difficulty: 6,
      traits: ["Flight", "Diving attack", "Razor-sharp beak and claws"],
      numberAppearing: "1d2", // 1-2 griffins
      tactics: "Griffins circle high above, then dive at tremendous speed to strike with devastating force before taking to the air again.",
      loot: ["Golden feathers", "Powerful talons", "Majestic pelt"]
    },
    queen: {
      name: "Abyssal Sea Serpent",
      description: "Massive serpents that emerge from water bodies to strike.",
      difficulty: 8,
      traits: ["Water breathing", "Constriction", "Swallowing whole"],
      numberAppearing: "1",
      tactics: "The sea serpent lurks beneath the water, striking suddenly to drag prey under before constricting or swallowing smaller targets whole.",
      loot: ["Water-resistant scales", "Massive fangs", "Internal air sac"]
    },
    king: {
      name: "Thunder Roc",
      description: "Giant birds with talons that can carry away large prey.",
      difficulty: 9,
      traits: ["Enormous size", "Lightning generation", "Deafening screech"],
      numberAppearing: "1",
      tactics: "The thunder roc generates storm clouds around itself, unleashing lightning and thunderous screeches before seizing prey in massive talons.",
      loot: ["Enormous feathers", "Electrified talons", "Weather-controlling organ"]
    }
  },

  // DIAMONDS - ARCANE
  diamonds: {
    ace: {
      name: "Mage Initiate",
      description: "A young student of the arcane, more curious than threatening, but capable of basic spells.",
      difficulty: 2,
      traits: ["Basic spellcasting", "Magical experimentation", "Theoretical knowledge"],
      numberAppearing: "1d3", // 1-3 initiates
      tactics: "The initiate will test their limited spell repertoire from a distance, often in unpredictable and potentially dangerous ways due to inexperience.",
      loot: ["Spell components", "Student's spellbook", "Practice wand"]
    },
    "2": {
      name: "Elemental Sprite",
      description: "Small ethereal beings connected to base elements, unpredictable in nature.",
      difficulty: 2,
      traits: ["Elemental affinity", "Small size", "Erratic behavior"],
      numberAppearing: "2d4", // 2-8 sprites
      tactics: "Sprites attack in unpredictable patterns, using their elemental powers in brief, concentrated bursts before darting away.",
      loot: ["Elemental essence", "Tiny magical crafts", "Crystallized element"]
    },
    "3": {
      name: "Animated Armor",
      description: "Suits of armor brought to life through enchantments and guarding specific areas.",
      difficulty: 4,
      traits: ["Tireless", "Immune to mind effects", "Programmed directives"],
      numberAppearing: "1d2", // 1-2 armor sets
      tactics: "The armor follows its programming exactly, typically guarding a location with unwavering vigilance and attacking any unauthorized intruders.",
      loot: ["Enchanted metal pieces", "Animation focus", "Superior craftsmanship armor"]
    },
    "4": {
      name: "Enchanted Mirror",
      description: "Reflective surfaces that can trap souls or show misleading visions.",
      difficulty: 4,
      traits: ["Reality distortion", "Soul capturing", "Illusion creation"],
      numberAppearing: "1",
      tactics: "The mirror attempts to captivate with visions or reflections before trying to trap the soul or essence of those who gaze too long.",
      loot: ["Enchanted glass shards", "Captured memories", "Reality-warping frame"]
    },
    "5": {
      name: "Bound Automaton",
      description: "Mechanical constructs powered by magical cores, following their creator's last command.",
      difficulty: 5,
      traits: ["Mechanical strength", "Programmed responses", "Magical power source"],
      numberAppearing: "1",
      tactics: "The automaton follows its last instruction with literal interpretation, using its mechanical strength and durability to overcome obstacles.",
      loot: ["Magical core", "Precision gears", "Enchanted metal"]
    },
    "6": {
      name: "Arcane Assassins",
      description: "A covert group skilled in blending shadow arts with magic. Their stealthy attacks are amplified with spells.",
      difficulty: 6,
      traits: ["Shadow magic", "Silent movement", "Deadly precision"],
      numberAppearing: "1d3", // 1-3 assassins
      tactics: "The assassins use shadow magic to conceal their approach, striking vulnerable points with magically enhanced weapons before retreating.",
      loot: ["Shadow essence vial", "Enchanted daggers", "Concealment charms"]
    },
    "7": {
      name: "Golem Guardian",
      description: "Crafted from clay or stone and animated with magic, these sentinels protect arcane secrets.",
      difficulty: 7,
      traits: ["Immense strength", "Spell resistance", "Singular purpose"],
      numberAppearing: "1",
      tactics: "The golem follows its directives without question, using its massive strength and durability to crush any who approach what it guards.",
      loot: ["Animation rune", "Enchanted clay/stone", "Creator's mark"]
    },
    "8": {
      name: "Arcane Sorceress",
      description: "A magic user adept in various forms of spellcraft, often accompanied by summoned creatures.",
      difficulty: 7,
      traits: ["Advanced spellcasting", "Summoning ability", "Magical defenses"],
      numberAppearing: "1 + summons",
      tactics: "The sorceress summons creatures to serve as protection while casting powerful spells from a safe distance.",
      loot: ["Spell focus", "Exotic components", "Magical texts"]
    },
    "9": {
      name: "Enchanted Treant",
      description: "Ancient trees imbued with magic, guardians of ancient groves.",
      difficulty: 6,
      traits: ["Control plants", "Massive strength", "Nature magic"],
      numberAppearing: "1",
      tactics: "The treant manipulates surrounding plant life to entangle and restrain while delivering crushing blows with massive limbs.",
      loot: ["Magical sap", "Enchanted heartwood", "Living seeds"]
    },
    "10": {
      name: "Addled Wizard",
      description: "Once a brilliant magic user, now lost to the overpowering draw of the arcane. While unpredictable, they remain incredibly dangerous due to their vast magical knowledge.",
      difficulty: 8,
      traits: ["Unpredictable spellcasting", "Reality warping", "Magical addiction"],
      numberAppearing: "1",
      tactics: "The wizard casts spells seemingly at random, often with unintended effects or at inappropriate targets, making them uniquely dangerous.",
      loot: ["Unstable magical focus", "Experimental spellbook", "Reality-warped items"]
    },
    jack: {
      name: "Eldritch Construct",
      description: "A being made from arcane energy, raw magic given form and purpose, unpredictable in its actions and reactions.",
      difficulty: 7,
      traits: ["Magical composition", "Energy absorption", "Morphing form"],
      numberAppearing: "1",
      tactics: "The construct absorbs magical attacks, growing stronger, while its form shifts and adapts to physical threats.",
      loot: ["Stabilized magical essence", "Reality fragment", "Pulsing energy core"]
    },
    queen: {
      name: "Crystal Matron",
      description: "A living crystal entity, surrounded by smaller crystal offspring, protective and capable of focusing arcane beams.",
      difficulty: 8,
      traits: ["Light refraction", "Crystal growth", "Energy focusing"],
      numberAppearing: "1 + 2d4 offspring", // Matron + 2-8 offspring
      tactics: "The matron directs her offspring to surround targets while focusing destructive energy beams through their crystalline bodies.",
      loot: ["Living crystal shards", "Energy focus point", "Geometric growth pattern"]
    },
    king: {
      name: "Archmage",
      description: "A master of arcane arts, versed in ancient spells and rituals.",
      difficulty: 9,
      traits: ["Mastery of multiple schools", "Artifact wielding", "Magical contingencies"],
      numberAppearing: "1",
      tactics: "The archmage enters battle prepared with multiple defensive spells active, then systematically eliminates threats with precisely chosen spells.",
      loot: ["Arcane focus", "Rare spellbook", "Magical artifacts"]
    }
  },

  // CLUBS - HUMANOID
  clubs: {
    ace: {
      name: "Scouts",
      description: "A group of rangers on a recon mission, wary but not immediately hostile.",
      difficulty: 3,
      traits: ["Tracking skills", "Ranged combat", "Environmental knowledge"],
      numberAppearing: "1d4", // 1-4 scouts
      tactics: "The scouts prefer to observe from a distance using ranged weapons and superior knowledge of the terrain to maintain advantage.",
      loot: ["Maps", "Survival gear", "Information"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the scouts"
      }
    },
    "2": {
      name: "Mercenaries",
      description: "Hired fighters skilled in battle and looking for their next payday, willing to resort to highway robbery.",
      difficulty: 4,
      traits: ["Combat experience", "Coordinated tactics", "Pragmatic approach"],
      numberAppearing: "2d4", // 2-8 mercenaries
      tactics: "The mercenaries use practiced formations and tactics, seeking to overpower through superior numbers and discipline.",
      loot: ["Military equipment", "Payment tokens", "Contract details"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the mercenaries"
      }
    },
    "3": {
      name: "Violent Wanderer",
      description: "A battle-hardened traveler looking for an opportunity to vent their frustrations in combat.",
      difficulty: 4,
      traits: ["Unpredictable fighting style", "Battle scars", "Pent-up rage"],
      numberAppearing: "1",
      tactics: "The wanderer fights with reckless abandon, showing little concern for their own safety and attacking with unpredictable ferocity.",
      loot: ["Personal trophies", "Well-used weapons", "Collected trinkets"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the wanderer"
      }
    },
    "4": {
      name: "Barbarian Challenger",
      description: "A solitary warrior seeking an honorable death in combat.",
      difficulty: 5,
      traits: ["Impressive strength", "Battle trophies", "Honor code"],
      numberAppearing: "1",
      tactics: "The barbarian challenges the strongest-looking opponent to single combat, fighting with full force but according to their strict honor code.",
      loot: ["Tribal weapons", "Honor tokens", "Personal trophies"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the barbarian"
      }
    },
    "5": {
      name: "Settlement Patrol",
      description: "A group from a nearby town or city, ensuring the safety of the borders and wary of outsiders.",
      difficulty: 3,
      traits: ["Local knowledge", "Defensive positioning", "Legal authority"],
      numberAppearing: "2d4", // 2-8 patrol members
      tactics: "The patrol relies on knowledge of the local area and the legitimacy of their authority, preferring to subdue rather than kill if possible.",
      loot: ["Official insignia", "Local maps", "Patrol orders"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the patrol"
      }
    },
    "6": {
      name: "Warband",
      description: "A small group of warriors on a raid, aggressive and territorial.",
      difficulty: 6,
      traits: ["Combat focus", "Tribal unity", "Intimidation tactics"],
      numberAppearing: "2d6", // 2-12 warriors
      tactics: "The warband uses intimidating displays and overwhelming aggression, seeking to break enemy morale before the fight truly begins.",
      loot: ["War trophies", "Tribal insignia", "Plundered goods"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the warband"
      }
    },
    "7": {
      name: "Rival Adventuring Party",
      description: "Encountering a group of fellow adventurers, their motives might not align with yours.",
      difficulty: 5,
      traits: ["Diverse abilities", "Equipment variety", "Adventuring experience"],
      numberAppearing: "3d4", // 3-12 adventurers
      tactics: "The rival party uses complementary abilities and practiced teamwork, adapting their strategy based on their assessment of their opponents.",
      loot: ["Adventuring gear", "Maps and notes", "Collected treasures"],
      additionalDraw: {
        required: true,
        count: 3,
        purpose: "Determine class and race of the rivals"
      }
    },
    "8": {
      name: "Bandits",
      description: "A stealthy group specializing in traps and ambushes.",
      difficulty: 4,
      traits: ["Sneak attacks", "Trap crafting", "Quick escapes"],
      numberAppearing: "2d6", // 2-12 bandits
      tactics: "The bandits rely on surprise and prepared escape routes, targeting what appears valuable and avoiding prolonged engagements.",
      loot: ["Stolen goods", "Trap components", "Hidden cache maps"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the bandits"
      }
    },
    "9": {
      name: "Mercenary Troop",
      description: "A faction-neutral group of hired soldiers, could be hostile if provoked or if there's a bounty.",
      difficulty: 7,
      traits: ["Military discipline", "Professional equipment", "Tactical training"],
      numberAppearing: "3d6", // 3-18 mercenaries
      tactics: "The mercenaries operate with military precision and discipline, using formations and tactics appropriate to their environment and opposition.",
      loot: ["Military-grade equipment", "Bounty notices", "Payment records"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the mercenaries"
      }
    },
    "10": {
      name: "Elite Guard Escort",
      description: "Highly trained warriors on a special mission, escorting a valuable item.",
      difficulty: 7,
      traits: ["Elite training", "Superior equipment", "Unwavering loyalty"],
      numberAppearing: "1d6", // 1-6 guards
      tactics: "The elite guards prioritize protecting their charge above all else, with formations designed specifically for escort duty and contingency plans for threats.",
      loot: ["High-quality arms and armor", "Mission details", "Valuable cargo"],
      additionalDraw: {
        required: true,
        purpose: "Determine what they are protecting"
      }
    },
    jack: {
      name: "Arcane Engineers",
      description: "Combat engineers wielding crystal-powered machinery, eager to test their destructive capabilities on unwary travelers.",
      difficulty: 6,
      traits: ["Technological devices", "Crystal energy manipulation", "Technical knowledge"],
      numberAppearing: "1d4", // 1-4 engineers
      tactics: "The engineers deploy experimental devices and weapons, often with unpredictable results, while attempting to collect data on their effectiveness.",
      loot: ["Crystal power sources", "Experimental devices", "Technical schematics"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the engineers"
      }
    },
    queen: {
      name: "Druid Shapeshifter",
      description: "A powerful druid who, when provoked, will shift into a beast form.",
      difficulty: 8,
      traits: ["Shapeshifting", "Nature magic", "Animal communication"],
      numberAppearing: "1 + animal allies",
      tactics: "The druid attempts to warn trespassers away but if provoked, transforms into beast form while summoning local wildlife to assist.",
      loot: ["Natural focus items", "Rare herbs", "Animal-derived components"],
      additionalDraw: {
        required: true,
        purpose: "Determine the beast form"
      }
    },
    king: {
      name: "Warlord's Retinue",
      description: "The inner circle of a powerful warlord, comprising elite fighters, advisors, and mages.",
      difficulty: 9,
      traits: ["Diverse specialties", "Highest quality equipment", "Experienced leadership"],
      numberAppearing: "1 warlord + 2d4 elites", // Warlord + 2-8 elite followers
      tactics: "The retinue operates under the warlord's strategic command, using combined arms and coordinated tactics with practiced precision.",
      loot: ["Masterwork weapons", "Warlord's insignia", "Strategic battle plans"],
      additionalDraw: {
        required: true,
        purpose: "Determine race of the warlord"
      }
    }
  },

  // SPADES - UNDEAD
  spades: {
    ace: {
      name: "Wandering Skeleton",
      description: "The animated remains of a deceased warrior, still wielding its rusted weapon and clad in tattered armor.",
      difficulty: 2,
      traits: ["Immune to mind effects", "Tireless", "Fearless"],
      numberAppearing: "2d6", // 2-12 skeletons
      tactics: "The skeletons attack mindlessly, following simple directives without strategy or self-preservation instinct.",
      loot: ["Bone fragments", "Ancient weapons", "Rusted armor pieces"]
    },
    "2": {
      name: "Hungry Zombie",
      description: "Formerly a villager or traveler, now a mindless creature with an insatiable hunger for the living.",
      difficulty: 2,
      traits: ["Disease carrying", "Relentless pursuit", "Hunger driven"],
      numberAppearing: "2d6", // 2-12 zombies
      tactics: "The zombies shuffle toward the nearest living beings, drawn by movement and noise, attacking with mindless persistence.",
      loot: ["Disease samples", "Personal effects", "Partly digested items"]
    },
    "3": {
      name: "Ghostly Apparition",
      description: "The lingering spirit of someone who died with unresolved matters, it's semi-transparent and causes chilling cold.",
      difficulty: 3,
      traits: ["Incorporeal", "Chilling touch", "Pass through objects"],
      numberAppearing: "1d3", // 1-3 apparitions
      tactics: "The apparition passes through solid barriers to attack, using its incorporeal nature to strike from unexpected angles and retreat through walls.",
      loot: ["Ectoplasm", "Memory fragment", "Object of attachment"]
    },
    "4": {
      name: "Restless Mummy",
      description: "Preserved bodies from ancient times, awakened to protect their resting place or seek revenge.",
      difficulty: 5,
      traits: ["Ancient curse", "Withering touch", "Bandage entanglement"],
      numberAppearing: "1d2", // 1-2 mummies
      tactics: "The mummy advances inexorably, spreading curses and disease while using its withering touch on those who defile its tomb.",
      loot: ["Ancient artifacts", "Preserved organs", "Burial wrappings"]
    },
    "5": {
      name: "Crypt Ghoul",
      description: "Not truly dead, but not alive either, these creatures lurk in graveyards and crypts, feasting on the deceased.",
      difficulty: 4,
      traits: ["Paralytic touch", "Grave digging", "Pack hunting"],
      numberAppearing: "2d4", // 2-8 ghouls
      tactics: "Ghouls attempt to paralyze their victims with their touch, then drag them away to be consumed at leisure.",
      loot: ["Half-digested valuables", "Grave goods", "Collected teeth"]
    },
    "6": {
      name: "Spectral Shade",
      description: "Spirits of those who died with intense emotions, they haunt specific locations or objects, driven by their past.",
      difficulty: 4,
      traits: ["Emotion feeding", "Insubstantial", "Memory projection"],
      numberAppearing: "1d4", // 1-4 shades
      tactics: "The shade manipulates emotions, feeding on fear or grief while projecting disturbing visions of its past experiences.",
      loot: ["Crystallized emotion", "Memory shard", "Spectral essence"]
    },
    "7": {
      name: "Possessed Statue",
      description: "Statues in graveyards or crypts possessed by spirits, often moving only when not directly observed.",
      difficulty: 5,
      traits: ["Stone body", "Animation", "Observer-dependent"],
      numberAppearing: "1d3", // 1-3 statues
      tactics: "The statue remains motionless when observed, moving rapidly when attention is diverted, using its stone form for crushing attacks.",
      loot: ["Animated stone", "Possessing spirit's essence", "Sculptor's mark"]
    },
    "8": {
      name: "Living Shadow",
      description: "Shadows that have gained a form and will of their own, they are hard to spot and can merge with other shadows.",
      difficulty: 5,
      traits: ["Strength draining", "Shadow blending", "Light vulnerability"],
      numberAppearing: "2d4", // 2-8 shadows
      tactics: "The shadows hide within normal darkness, attacking by surprise to drain strength before retreating into nearby shadows.",
      loot: ["Shadow essence", "Light-absorbing material", "Darkened personal effects"]
    },
    "9": {
      name: "Banshee",
      description: "The tormented spirit of a woman, her wails are said to foretell death.",
      difficulty: 6,
      traits: ["Death wail", "Incorporeal", "Despair aura"],
      numberAppearing: "1",
      tactics: "The banshee uses her terrifying wail to incapacitate victims with fear before closing to drain their life force with her touch.",
      loot: ["Spectral hair", "Crystallized tears", "Memento of life"]
    },
    "10": {
      name: "Necromancer Acolyte",
      description: "A practitioner of the dark arts, they can summon and control the undead, seeking more power and forbidden knowledge.",
      difficulty: 7,
      traits: ["Undead summoning", "Death magic", "Life draining"],
      numberAppearing: "1 + undead minions",
      tactics: "The acolyte summons undead minions for protection while casting necrotic spells from safety, focusing on life drain and debilitation.",
      loot: ["Necromantic focus", "Forbidden texts", "Preserved body parts"]
    },
    jack: {
      name: "Cursed Armor",
      description: "A knight's armor possessed by the spirit of its deceased owner, seeking combat to relive its past glory.",
      difficulty: 6,
      traits: ["Animated metal", "Combat experience", "Curse transmission"],
      numberAppearing: "1",
      tactics: "The armor fights with the skill of the warrior who once wore it, using practiced combat techniques with tireless precision.",
      loot: ["Cursed metal pieces", "Spirit binding runes", "Knight's insignia"]
    },
    queen: {
      name: "Dread Soldier",
      description: "Once noble knights, they were resurrected by dark magic, now they serve evil.",
      difficulty: 8,
      traits: ["Unholy strength", "Military training", "Unnatural resilience"],
      numberAppearing: "1d4", // 1-4 dread soldiers
      tactics: "The dread soldiers employ military tactics and combat training from life, enhanced by their undead nature and supernatural abilities.",
      loot: ["Corrupted insignia", "Dark-infused weapons", "Unholy essence"]
    },
    king: {
      name: "Vampire",
      description: "An ancient and powerful vampire, with control over younger vampires and capable of turning others into their kind.",
      difficulty: 9,
      traits: ["Blood drinking", "Charm gaze", "Shapeshifting"],
      numberAppearing: "1 + possible spawn",
      tactics: "The vampire uses charm and misdirection, employing spawn or thralls as distractions while targeting isolated victims for feeding.",
      loot: ["Ancient treasures", "Blood vials", "Coffin soil"]
    }
  }
};

// Helper function to get encounter category based on suit
function getEncounterCategory(suit) {
  const categories = {
    hearts: 'beast',
    diamonds: 'arcane',
    clubs: 'humanoid',
    spades: 'undead'
  };
  
  return categories[suit] || 'unknown';
}

// Helper function to get difficulty rating as text
function getDifficultyText(rating) {
  if (rating <= 2) return "Easy";
  if (rating <= 4) return "Moderate";
  if (rating <= 6) return "Challenging";
  if (rating <= 8) return "Formidable";
  return "Legendary";
}

// Function to get encounter data from a card
function getEncounterFromCard(card) {
  const { suit, rank } = card;
  const category = getEncounterCategory(suit);
  
  // Check if we have data for this specific card
  if (encounters[suit] && encounters[suit][rank]) {
    return {
      ...encounters[suit][rank],
      category,
      difficultyText: getDifficultyText(encounters[suit][rank].difficulty),
      suit,
      rank
    };
  }
  
  // Fallback for any missing data
  return {
    name: `Unknown ${category} Encounter`,
    description: `A mysterious encounter with ${category} creatures.`,
    difficulty: 3,
    difficultyText: "Moderate",
    traits: ["Unknown", "Mysterious"],
    numberAppearing: "1d4",
    tactics: "Unknown tactics",
    loot: ["Generic loot"],
    category,
    suit,
    rank
  };
}

// Function to determine if additional cards need to be drawn for this encounter
function requiresAdditionalDraw(encounter) {
  return encounter?.additionalDraw?.required || false;
}

// Function to get the purpose of additional card draws
function getAdditionalDrawPurpose(encounter) {
  return encounter?.additionalDraw?.purpose || "Determine additional details";
}

// Function to get how many additional cards to draw
function getAdditionalDrawCount(encounter) {
  return encounter?.additionalDraw?.count || 1;
}

// Function to generate the actual number of creatures appearing
function rollEncounterQuantity(numberAppearing) {
  // If numberAppearing is a string like "2d4" or "1d6+2", parse and roll
  if (typeof numberAppearing === 'string') {
    // Simple dice notation parser
    const diceParts = numberAppearing.match(/(\d+)d(\d+)(?:\+(\d+))?/);
    if (diceParts) {
      const numDice = parseInt(diceParts[1]);
      const dieSize = parseInt(diceParts[2]);
      const modifier = diceParts[3] ? parseInt(diceParts[3]) : 0;
      
      let result = modifier;
      for (let i = 0; i < numDice; i++) {
        result += Math.floor(Math.random() * dieSize) + 1;
      }
      return result;
    }
    
    // If it's just a number as a string
    const justNumber = parseInt(numberAppearing);
    if (!isNaN(justNumber)) {
      return justNumber;
    }
  }
  
  // If it's a number already
  if (typeof numberAppearing === 'number') {
    return numberAppearing;
  }
  
  // Default to 1 if we can't parse
  return 1;
}

export default encounters;
export { 
  getEncounterFromCard, 
  getEncounterCategory,
  requiresAdditionalDraw,
  getAdditionalDrawPurpose,
  getAdditionalDrawCount,
  rollEncounterQuantity
};
