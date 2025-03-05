// locations.js - Complete location data organized by suit and category
const locations = {
  // HEARTS - ARID LOCATIONS
  hearts: {
    // Arid Civilization
    civilization: {
      ace: {
        name: "Desert Oasis Town",
        description: "A settlement built around a life-giving water source in the harsh desert.",
        features: ["Water wells", "Palm trees", "Stone buildings"]
      },
      "2": {
        name: "Nomadic Trading Post",
        description: "A temporary marketplace where desert nomads gather to trade goods.",
        features: ["Colorful tents", "Camel caravans", "Spice merchants"]
      },
      "3": {
        name: "Sand Dune Settlement",
        description: "A community built among the shifting sands of massive dunes.",
        features: ["Sand-resistant buildings", "Windbreaks", "Underground storage"]
      },
      "4": {
        name: "Canyon City",
        description: "A city carved into the walls of a massive canyon for protection from the elements.",
        features: ["Rock-cut architecture", "Natural cooling", "Tiered platforms"]
      },
      "5": {
        name: "Desert Caravan Hub",
        description: "A bustling center where multiple trade routes converge across the arid wastes.",
        features: ["Camel pens", "Trading stalls", "Water reservoirs"]
      },
      "6": {
        name: "Oasis Retreat",
        description: "A peaceful sanctuary built around a natural spring in the desert.",
        features: ["Healing waters", "Desert gardens", "Meditation spaces"]
      },
      "7": {
        name: "Mercantile Desert Outpost",
        description: "A fortified trading post established by merchants braving the harsh climate.",
        features: ["High walls", "Watchtowers", "Market square"]
      },
      "8": {
        name: "Temple of the Scorching Sun",
        description: "A religious structure dedicated to deities of heat, light, and fire.",
        features: ["Sunlight altars", "Gold-plated domes", "Fire-resistant stone"]
      },
      "9": {
        name: "Mirage-Veiled Village",
        description: "A settlement protected by magical illusions making it appear as a mirage.",
        features: ["Illusory boundaries", "Hidden entrances", "Magical wards"]
      },
      "10": {
        name: "Ruins of the Lost Empire",
        description: "The crumbling remains of an ancient desert civilization.",
        features: ["Half-buried structures", "Ancient inscriptions", "Collapsed monuments"]
      },
      jack: {
        name: "Arid Mining Town",
        description: "A community centered around extracting precious minerals from the dry earth.",
        features: ["Deep mine shafts", "Processing facilities", "Ore carts"]
      },
      queen: {
        name: "Sunbaked Bazaar",
        description: "An expansive market known for rare desert goods and exotic treasures.",
        features: ["Covered walkways", "Exotic merchants", "Spice stalls"]
      },
      king: {
        name: "Desert Mirage Metropolis",
        description: "A massive, seemingly impossible city thriving in the harshest desert conditions.",
        features: ["Water gathering systems", "Vast covered markets", "Magical cooling systems"]
      }
    },
    // Arid Land Features
    landFeatures: {
      ace: {
        name: "Dunes of Eternal Winds",
        description: "Massive sand dunes constantly shaped by relentless desert winds.",
        features: ["Shifting sand patterns", "Howling wind corridors", "Unveiled fossils"]
      },
      "2": {
        name: "Arid Canyon Depths",
        description: "Deep ravines cut through the desert landscape by ancient waters.",
        features: ["Layered rock strata", "Narrow passages", "Flash flood marks"]
      },
      "3": {
        name: "Oasis of Shimmering Waters",
        description: "A natural spring surrounded by lush vegetation amid the barren desert.",
        features: ["Crystal clear pool", "Palm trees", "Desert wildlife"]
      },
      "4": {
        name: "Ancient Desert Pyramids",
        description: "Monumental structures built by a long-lost civilization.",
        features: ["Smooth stone sides", "Secret chambers", "Hieroglyphic writing"]
      },
      "5": {
        name: "Eroded Rock Formations",
        description: "Unusual stone shapes carved by wind and sand over millennia.",
        features: ["Natural arches", "Balanced rocks", "Wind-carved caverns"]
      },
      "6": {
        name: "Endless Salt Flats",
        description: "A vast expanse of white crystalline salt left by an evaporated ancient sea.",
        features: ["Mirror-like surface", "Crystal formations", "Horizon-bending vastness"]
      },
      "7": {
        name: "Volcanic Crater Oasis",
        description: "A fertile depression within an extinct volcano's caldera.",
        features: ["Mineral-rich soil", "Crater lake", "Unique plant species"]
      },
      "8": {
        name: "Scorched Desert Wastes",
        description: "A desolate area where even the hardiest desert life struggles to survive.",
        features: ["Cracked earth", "Heat mirages", "Sun-bleached bones"]
      },
      "9": {
        name: "Enigmatic Sandstone Arches",
        description: "Magnificent natural rock bridges formed by erosion.",
        features: ["Massive spans", "Weathered surfaces", "Acoustical anomalies"]
      },
      "10": {
        name: "Fossilized Desert Forest",
        description: "The petrified remains of an ancient woodland preserved in stone.",
        features: ["Stone tree trunks", "Crystal-filled hollows", "Prehistoric plant forms"]
      },
      jack: {
        name: "Subterranean Desert Caves",
        description: "A network of natural caverns beneath the desert surface.",
        features: ["Crystal formations", "Underground pools", "Cool air currents"]
      },
      queen: {
        name: "Scorched Red Canyons",
        description: "Dramatic, rust-colored gorges carved through the desert landscape.",
        features: ["Vertical cliff faces", "Iron-rich rock", "Echoing chambers"]
      },
      king: {
        name: "Whispering Sand Dunes",
        description: "Massive sand hills that emit haunting sounds when the wind passes over them.",
        features: ["Moving sand waves", "Acoustic phenomena", "Hidden treasures"]
      }
    },
    // Arid Dungeons
    dungeons: {
      ace: {
        name: "Abandoned Desert Fort",
        description: "A military outpost long abandoned to the shifting sands.",
        features: ["Crumbling walls", "Half-buried buildings", "Empty armories"]
      },
      "2": {
        name: "Desert Tomb Catacombs",
        description: "A vast network of underground burial chambers for ancient desert rulers.",
        features: ["Mummified remains", "Trapped corridors", "Hieroglyphic warnings"]
      },
      "3": {
        name: "Ruined Desert Monastery",
        description: "The remnants of a spiritual retreat, now claimed by the sands.",
        features: ["Meditation chambers", "Faded murals", "Broken statues"]
      },
      "4": {
        name: "Sand-Choked Pyramid",
        description: "A monumental tomb filled with sand that has breached its entrances.",
        features: ["Narrow passageways", "Hidden chambers", "Ancient treasures"]
      },
      "5": {
        name: "Mirage-Locked Dungeon",
        description: "A subterranean complex that can only be found when specific mirages appear.",
        features: ["Illusory entrances", "Reality-bending corridors", "Magical defenses"]
      },
      "6": {
        name: "Hidden Oasis Vault",
        description: "A secret treasury built beneath an unassuming desert spring.",
        features: ["Underwater passages", "Air pockets", "Aquatic defenses"]
      },
      "7": {
        name: "Desert Canyon Labyrinth",
        description: "A natural maze of narrow passages cutting through canyon walls.",
        features: ["Dead ends", "Echo chambers", "Disorienting passages"]
      },
      "8": {
        name: "Dune-Buried Ruins",
        description: "The remains of an ancient city gradually being claimed by moving dunes.",
        features: ["Partially buried buildings", "Sand-filled streets", "Exposed treasures"]
      },
      "9": {
        name: "Scorched Desert Cavern",
        description: "A vast cave system that maintains the desert's blistering heat within.",
        features: ["Heat vents", "Magma pools", "Heat-resistant creatures"]
      },
      "10": {
        name: "Mirage Enclave Tunnels",
        description: "A complex network of tunnels hidden behind ever-shifting mirages.",
        features: ["Illusory walls", "Reality-bending traps", "Distorted echoes"]
      },
      jack: {
        name: "Sand Dune Dungeon",
        description: "A complex of chambers built within the heart of a massive, stable dune.",
        features: ["Sand-carved stairs", "Ventilation shafts", "Grain-sized traps"]
      },
      queen: {
        name: "Lost Desert Citadel",
        description: "A forgotten fortress buried beneath centuries of sand.",
        features: ["Military training grounds", "Defensive mechanisms", "Royal quarters"]
      },
      king: {
        name: "Mirage Oasis Crypt",
        description: "A massive burial complex hidden beneath what appears to be an oasis.",
        features: ["False water pools", "Mummified guardians", "Temporal distortions"]
      }
    },
    // Arid Hazards
    hazards: {
      ace: {
        name: "Quicksand Sinkhole",
        description: "Deceptive patches of loose sand that can swallow travelers whole.",
        features: ["Deceptive solid appearance", "Progressive entrapping", "Hidden depths"]
      },
      "2": {
        name: "Treacherous Avalanche Slope",
        description: "Unstable slopes where sand and rocks can suddenly slide down with deadly force.",
        features: ["Teetering boulders", "Sand fault lines", "Trigger points"]
      },
      "3": {
        name: "Venomous Serpent's Den",
        description: "A pit or cave teeming with highly poisonous desert snakes.",
        features: ["Camouflaged entrances", "Warm rocks", "Venomous ambushers"]
      },
      "4": {
        name: "Spiked Pitfall Canyon",
        description: "A narrow gorge filled with sharp rock spikes that impale the unwary.",
        features: ["Deceptive animal trails", "Camouflaged edges", "Stone spears"]
      },
      "5": {
        name: "Blinding Sandstorm Wastes",
        description: "An area frequently hit by violent storms that strip flesh from bone.",
        features: ["Swift-moving walls of sand", "Static electricity", "Disorienting winds"]
      },
      "6": {
        name: "Bursting Sands",
        description: "Patches of desert that explode upward without warning, launching sand and rocks.",
        features: ["Pressure buildups", "Hidden gas pockets", "Projectile debris"]
      },
      "7": {
        name: "Shifting Sands",
        description: "Areas where the ground constantly moves, making it impossible to maintain footing.",
        features: ["Swirling patterns", "Consuming vortexes", "Unstable terrain"]
      },
      "8": {
        name: "Volcanic Eruption Crater",
        description: "An active volcanic area that periodically spews molten rock and toxic gases.",
        features: ["Lava vents", "Poisonous fumes", "Unstable ground"]
      },
      "9": {
        name: "Abyssal Abyss Rift",
        description: "A seemingly bottomless crack in the earth that emanates strange energies.",
        features: ["Vertigo-inducing depths", "Powerful updrafts", "Mind-altering whispers"]
      },
      "10": {
        name: "Cursed Ghostly Winds",
        description: "Areas haunted by ethereal winds carrying the vengeful spirits of those who died in the desert.",
        features: ["Whispering voices", "Life-draining currents", "Disembodied apparitions"]
      },
      jack: {
        name: "Haunting Spectral Mirage",
        description: "Illusions that lure travelers to their doom by showing them what they most desire.",
        features: ["Perfect illusions", "Personalized temptations", "Reality distortions"]
      },
      queen: {
        name: "Thornrock Wastes",
        description: "A field of stone formations with edges as sharp as razors and points like needles.",
        features: ["Blade-like protrusions", "Cutting surfaces", "Blood-stained rocks"]
      },
      king: {
        name: "Magma Burst Vents",
        description: "A field of unpredictable geysers that spray super-heated magma without warning.",
        features: ["Hidden pressure points", "Bubbling hotspots", "Crystallized spray patterns"]
      }
    }
  },

  // DIAMONDS - WATER LOCATIONS
  diamonds: {
    // Water Civilization
    civilization: {
      ace: {
        name: "Coastal Fishing Village",
        description: "A small community sustained by bountiful catches from nearby waters.",
        features: ["Wooden docks", "Fish markets", "Net-mending areas"]
      },
      "2": {
        name: "Harbor Town",
        description: "A bustling port where ships from across the seas dock to trade goods.",
        features: ["Stone harbors", "Shipyards", "Trading warehouses"]
      },
      "3": {
        name: "River Port Settlement",
        description: "A community established along a major river, facilitating inland trade.",
        features: ["Riverboat docks", "Flood protections", "Water mills"]
      },
      "4": {
        name: "Coral City",
        description: "A settlement built atop and within a massive coral reef structure.",
        features: ["Living architecture", "Underwater sections", "Bioluminescent lighting"]
      },
      "5": {
        name: "Seaside Resort",
        description: "A luxurious retreat catering to wealthy visitors seeking ocean relaxation.",
        features: ["Beachfront villas", "Healing saltwater baths", "Exotic seafood"]
      },
      "6": {
        name: "Lagoon Retreat",
        description: "A secluded community nestled within a protected coastal lagoon.",
        features: ["Calm waters", "Medicinal seaweed farms", "Pearl diving operations"]
      },
      "7": {
        name: "Mariner's Outpost",
        description: "A sturdy facility providing sailors with supplies, repairs, and information.",
        features: ["Lighthouse", "Map room", "Storm shelters"]
      },
      "8": {
        name: "Temple of the Gentle Tides",
        description: "A religious complex dedicated to deities of water and sea life.",
        features: ["Tidal pools", "Offering basins", "Crystal clear pools"]
      },
      "9": {
        name: "Seaweed-Veiled Village",
        description: "A hidden community concealed behind massive floating seaweed gardens.",
        features: ["Algae farms", "Woven kelp screens", "Floating platforms"]
      },
      "10": {
        name: "Ruins of the Sunken Empire",
        description: "The remains of a once-great civilization partially reclaimed by rising waters.",
        features: ["Half-submerged buildings", "Water-damaged texts", "Marine-adapted survivors"]
      },
      jack: {
        name: "Lakeside Trading Post",
        description: "A commercial hub situated on the shores of a major lake.",
        features: ["Fresh water docks", "Fish processing", "Island ferries"]
      },
      queen: {
        name: "Bayfront Market",
        description: "A grand bazaar set along a natural bay, specializing in aquatic goods.",
        features: ["Covered fish markets", "Pearl merchants", "Coral crafters"]
      },
      king: {
        name: "Underwater Metropolis",
        description: "A vast city beneath the waves, sustained by magic or advanced technology.",
        features: ["Air domes", "Coral architecture", "Subaquatic transport systems"]
      }
    },
    // Water Land Features
    landFeatures: {
      ace: {
        name: "Serene Beach",
        description: "A peaceful coastline with soft sands and gentle, lapping waves.",
        features: ["White sand", "Shallow waters", "Seashell deposits"]
      },
      "2": {
        name: "Murky Swamp Depths",
        description: "A dense wetland with dark, mysterious waters and thick vegetation.",
        features: ["Foggy air", "Hidden pools", "Ancient cypress trees"]
      },
      "3": {
        name: "River Delta Islands",
        description: "A network of small landmasses formed where a great river meets the sea.",
        features: ["Shifting sandbars", "Rich soil", "Diverse ecosystems"]
      },
      "4": {
        name: "Ancient Shipwrecks",
        description: "A graveyard of vessels from many eras, preserved in shallow waters.",
        features: ["Rotting hulls", "Scattered cargo", "Sailors' remains"]
      },
      "5": {
        name: "Waterfall Cascades",
        description: "A series of breathtaking falls tumbling down a stepped cliff face.",
        features: ["Rainbow mists", "Thundering noise", "Deep plunge pools"]
      },
      "6": {
        name: "Endless Coral Reefs",
        description: "A vast underwater ecosystem built by tiny marine architects.",
        features: ["Colorful coral structures", "Rich marine life", "Hidden caves"]
      },
      "7": {
        name: "Island Oasis",
        description: "A small, verdant island surrounded by crystalline waters.",
        features: ["Fresh water springs", "Tropical fruit", "White sand beaches"]
      },
      "8": {
        name: "Submerged Ruins",
        description: "The remnants of an ancient structure now claimed by the sea.",
        features: ["Crumbling stonework", "Marine-adapted artifacts", "Sunken treasures"]
      },
      "9": {
        name: "Enchanted Kelp Forests",
        description: "Towering seaweed growths that sway with an almost sentient rhythm.",
        features: ["Bioluminescent strands", "Marine hideaways", "Natural air pockets"]
      },
      "10": {
        name: "Flooded Forest Groves",
        description: "Woodlands permanently submerged in shallow, clear water.",
        features: ["Standing dead trees", "Underwater wildlife", "Moss-covered logs"]
      },
      jack: {
        name: "Submerged Caves",
        description: "A network of caverns partially or fully filled with seawater.",
        features: ["Air pockets", "Crystal formations", "Narrow passages"]
      },
      queen: {
        name: "Luminous Coral Reefs",
        description: "A magical reef system that glows with internal light.",
        features: ["Bioluminescent coral", "Crystalline structures", "Magical auras"]
      },
      king: {
        name: "Whispering Ocean Currents",
        description: "Mysterious water flows that carry strange sounds and messages.",
        features: ["Circular patterns", "Acoustic anomalies", "Mesmerizing rhythms"]
      }
    },
    // Water Dungeons
    dungeons: {
      ace: {
        name: "Sunken Temple Ruins",
        description: "A once-sacred structure now claimed by the sea.",
        features: ["Submerged altars", "Trapped air pockets", "Coral-encrusted statues"]
      },
      "2": {
        name: "Swampy Marsh Caverns",
        description: "A labyrinth of tunnels amid the murky waters of a vast marsh.",
        features: ["Bioluminescent fungi", "Roots breaking through", "Quicksand pits"]
      },
      "3": {
        name: "Riverbank Catacombs",
        description: "Ancient burial chambers carved into the cliff faces alongside a river.",
        features: ["Water-worn passages", "Partially flooded rooms", "River access points"]
      },
      "4": {
        name: "Shipwreck Treasure Vault",
        description: "A merchant vessel now lying on the seabed, its cargo still intact.",
        features: ["Broken hull", "Captain's quarters", "Locked storage rooms"]
      },
      "5": {
        name: "Murky Lagoon Dungeon",
        description: "A complex of chambers hidden beneath the placid surface of a lagoon.",
        features: ["Underwater entrances", "Air-filled rooms", "Brackish water hazards"]
      },
      "6": {
        name: "Hidden Underwater Grotto",
        description: "A secret cavern accessible only by swimming through submerged passages.",
        features: ["Air-filled chamber", "Crystal formations", "Ancient secrets"]
      },
      "7": {
        name: "Coral Reef Labyrinth",
        description: "A maze-like structure formed naturally by growing coral formations.",
        features: ["Sharp coral walls", "Narrow passages", "Marine predators"]
      },
      "8": {
        name: "Abyssal Abyss Ruins",
        description: "The remnants of an unknown civilization in the ocean's darkest depths.",
        features: ["Crushing pressure", "Alien architecture", "Bioluminescent lighting"]
      },
      "9": {
        name: "Enchanted Shipwreck Wreckage",
        description: "The magical remains of a vessel that sailed between realms.",
        features: ["Reality-warping cargo", "Preserved enchantments", "Otherworldly materials"]
      },
      "10": {
        name: "Sunken Cavern Tunnels",
        description: "A complex network of natural tunnels beneath the ocean floor.",
        features: ["Air pockets", "Underwater rivers", "Ancient marine fossils"]
      },
      jack: {
        name: "Submerged Pirate's Cove",
        description: "A once-secret hideout for ocean raiders, now beneath the waves.",
        features: ["Hidden treasures", "Pirate remains", "Trapped strongboxes"]
      },
      queen: {
        name: "Mysterious Lagoon Lair",
        description: "A beautiful but dangerous complex hidden beneath a tropical lagoon.",
        features: ["Deceptive beauty", "Predatory plant life", "Ancient magic"]
      },
      king: {
        name: "Underwater Citadel Crypt",
        description: "The massive burial complex of an underwater civilization's rulers.",
        features: ["Preserved remains", "Pressure-sealed chambers", "Undying guardians"]
      }
    },
    // Water Hazards
    hazards: {
      ace: {
        name: "Treacherous Quicksand Marshes",
        description: "Seemingly solid ground that gives way to deep, suffocating mud.",
        features: ["Deceptive surface", "Progressive entrapping", "Difficult rescue"]
      },
      "2": {
        name: "Swamp Mire Pitfalls",
        description: "Deep holes in wetlands, concealed by murky water and vegetation.",
        features: ["Perfect camouflage", "Sharp stakes", "Fetid contents"]
      },
      "3": {
        name: "River Rapids",
        description: "Violently churning waters that can dash boats and swimmers against rocks.",
        features: ["Dangerous undercurrents", "Jagged rocks", "Deafening roar"]
      },
      "4": {
        name: "Deadly Rip Currents",
        description: "Powerful, narrow streams of water flowing out to sea that can drag swimmers away.",
        features: ["Subtle surface indicators", "Powerful pull", "Circular patterns"]
      },
      "5": {
        name: "Whirling Water Vortex",
        description: "A swirling drain-like formation that pulls everything down into unknown depths.",
        features: ["Hypnotic spinning", "Powerful suction", "Mysterious destination"]
      },
      "6": {
        name: "Toxic Swamp Gas Pockets",
        description: "Areas where deadly vapors collect just above stagnant waters.",
        features: ["Subtle discoloration", "Acrid smell", "Lingering effects"]
      },
      "7": {
        name: "Seasnake-Infested Depths",
        description: "Waters teeming with venomous aquatic serpents.",
        features: ["Barely visible movement", "Aggressive behavior", "Deadly toxins"]
      },
      "8": {
        name: "Volcanic Undersea Eruptions",
        description: "Areas of the seabed with unpredictable geothermal activity.",
        features: ["Superheated water", "Toxic gas bubbles", "Sudden pressure changes"]
      },
      "9": {
        name: "Whirlpool Abyss Rift",
        description: "A massive whirlpool leading to a mysterious underwater chasm.",
        features: ["Irresistible currents", "Crushing depths", "Unknown creatures"]
      },
      "10": {
        name: "Cursed Ghost Ship",
        description: "The spectral remains of a vessel doomed to sail forever.",
        features: ["Supernatural fog", "Undead crew", "Reality distortions"]
      },
      jack: {
        name: "Haunting Siren's Song",
        description: "A stretch of coast where enchanting but deadly songs lure sailors to their doom.",
        features: ["Irresistible melodies", "Mesmerizing voices", "Jagged reefs"]
      },
      queen: {
        name: "Murky Seaweed Tangles",
        description: "Dense underwater vegetation that entangles swimmers.",
        features: ["Strong plant fibers", "Constricting movement", "Disorienting maze"]
      },
      king: {
        name: "Maelstrom of Tempests",
        description: "A permanent storm system generating massive waves and devastating winds.",
        features: ["Towering waves", "Lightning strikes", "Circular wind patterns"]
      }
    }
  },

  // CLUBS - FOREST LOCATIONS
  clubs: {
    // Forest Civilization
    civilization: {
      ace: {
        name: "Elven Tree City",
        description: "A magnificent city built among the branches of colossal trees.",
        features: ["Spiral staircases", "Suspension bridges", "Living architecture"]
      },
      "2": {
        name: "Jungle Tribal Village",
        description: "A native settlement deep within the dense jungle.",
        features: ["Thatched huts", "Totem poles", "Defensive palisades"]
      },
      "3": {
        name: "Forest Edge Settlement",
        description: "A community established at the border between woodland and open land.",
        features: ["Wooden palisade", "Hunting lodges", "Lumber mill"]
      },
      "4": {
        name: "Ruined Forest Temple",
        description: "A once-grand religious site now reclaimed by the forest.",
        features: ["Vine-covered statues", "Crumbling altars", "Root-broken floors"]
      },
      "5": {
        name: "Sylvan Hamlet",
        description: "A small, peaceful community living in harmony with the woodland.",
        features: ["Camouflaged dwellings", "Natural springs", "Herb gardens"]
      },
      "6": {
        name: "Wildwood Retreat",
        description: "A sanctuary deep in the forest where people come for healing and meditation.",
        features: ["Medicinal gardens", "Meditation circles", "Hot springs"]
      },
      "7": {
        name: "Druid's Grove Outpost",
        description: "A settlement centered around a circle of nature-worshipping mystics.",
        features: ["Stone circles", "Sacred trees", "Wildlife companions"]
      },
      "8": {
        name: "Temple of the Verdant Canopy",
        description: "A religious structure dedicated to forest deities and natural cycles.",
        features: ["Living wooden altars", "Sunlight filtering decorations", "Plant-based offerings"]
      },
      "9": {
        name: "Hidden Tree Village",
        description: "A settlement concealed in the forest canopy, nearly invisible from below.",
        features: ["Rope ladders", "Camouflaged platforms", "Lookout posts"]
      },
      "10": {
        name: "Ruins of the Ancient Woodland",
        description: "The overgrown remains of a civilization that once thrived among the trees.",
        features: ["Moss-covered stonework", "Broken columns", "Faded inscriptions"]
      },
      jack: {
        name: "Forest Trading Post",
        description: "A hub for commerce among woodland communities.",
        features: ["Log construction", "Wildlife pelt trading", "Herb exchanges"]
      },
      queen: {
        name: "Enchanted Wood Market",
        description: "A magical marketplace where rare forest goods and magical items are traded.",
        features: ["Glowing fungi lighting", "Living wood stalls", "Potion ingredients"]
      },
      king: {
        name: "Elven Forest Metropolis",
        description: "A vast, ancient city of the elves, perfectly integrated with the forest itself.",
        features: ["Living tree towers", "Magical lights", "Ancient libraries"]
      }
    },
    // Forest Land Features
    landFeatures: {
      ace: {
        name: "Enchanted Glades",
        description: "Clearings in the forest where magical energies naturally concentrate.",
        features: ["Luminous plants", "Fairy circles", "Whispering winds"]
      },
      "2": {
        name: "Dense Jungle Depths",
        description: "Virtually impenetrable vegetation with a canopy blocking most sunlight.",
        features: ["Rare flora", "Tangled vines", "Limited visibility"]
      },
      "3": {
        name: "Meandering River Streams",
        description: "A network of gentle waterways flowing through the forest.",
        features: ["Clear water", "Smooth stones", "Fish-filled pools"]
      },
      "4": {
        name: "Overgrown Temple Ruins",
        description: "Ancient religious structures now claimed by the forest.",
        features: ["Vine-covered statues", "Root-split stones", "Hidden chambers"]
      },
      "5": {
        name: "Lush Waterfall Groves",
        description: "Verdant areas surrounding forest waterfalls.",
        features: ["Perpetual mist", "Rainbow pools", "Exotic plants"]
      },
      "6": {
        name: "Eerie Swamp Lands",
        description: "Murky wetlands within the forest, home to peculiar life forms.",
        features: ["Giant mushrooms", "Will-o'-wisps", "Strange sounds"]
      },
      "7": {
        name: "Treetop Oasis",
        description: "A natural formation high in the canopy where water collects.",
        features: ["Aerial pools", "Unique canopy life", "Panoramic views"]
      },
      "8": {
        name: "Moss-Covered Ruins",
        description: "The remnants of ancient structures, softened by years of moss growth.",
        features: ["Green-covered stones", "Cushioned ground", "Hidden inscriptions"]
      },
      "9": {
        name: "Ancient Standing Stones",
        description: "Monolithic structures arranged in patterns by long-forgotten peoples.",
        features: ["Astronomical alignments", "Weathered symbols", "Energy patterns"]
      },
      "10": {
        name: "Mystic Forest Clearings",
        description: "Open spaces in the woods where magical energies gather.",
        features: ["Perfect circles", "Strange effects", "Temporal distortions"]
      },
      jack: {
        name: "Vinechoked Caverns",
        description: "Natural cave systems overgrown with forest vegetation.",
        features: ["Plant-filtered light", "Underground springs", "Hidden entrances"]
      },
      queen: {
        name: "Bioluminescent Fungal Forest",
        description: "A section of woods dominated by glowing fungi.",
        features: ["Natural lighting", "Strange spores", "Altered states"]
      },
      king: {
        name: "Whispering Forest Shadows",
        description: "Areas where the forest itself seems to communicate through rustling leaves.",
        features: ["Voice-like sounds", "Moving shadows", "Cryptic messages"]
      }
    },
    // Forest Dungeons
    dungeons: {
      ace: {
        name: "Ruined Forest Citadel",
        description: "The crumbling remains of a once-mighty fortress, now claimed by the woods.",
        features: ["Collapsed towers", "Overgrown battlements", "Root-invaded halls"]
      },
      "2": {
        name: "Overgrown Jungle Caverns",
        description: "Natural cave systems that have been invaded by tropical vegetation.",
        features: ["Plant-filtered light", "Living stone", "Organic obstacles"]
      },
      "3": {
        name: "Riverbank Catacomb Lair",
        description: "Burial chambers carved into cliffs alongside a forest river.",
        features: ["Water-worn passages", "Eroded carvings", "Partially flooded sections"]
      },
      "4": {
        name: "Forgotten Temple Catacombs",
        description: "The hidden underground complex beneath an ancient forest shrine.",
        features: ["Religious iconography", "Sacrificial chambers", "Hidden treasures"]
      },
      "5": {
        name: "Labyrinthine Roots",
        description: "A maze formed by the massive root system of ancient trees.",
        features: ["Natural tunnels", "Living walls", "Underground springs"]
      },
      "6": {
        name: "Hidden Druidic Grotto",
        description: "A secret sanctuary used by forest priests for their most sacred rituals.",
        features: ["Stone circles", "Natural altars", "Magical focus points"]
      },
      "7": {
        name: "Sylvan Dungeon Maze",
        description: "A complex of passages and chambers grown rather than built.",
        features: ["Living walls", "Breathing corridors", "Changing layout"]
      },
      "8": {
        name: "Ancient Ruins Chambers",
        description: "The subterranean levels of a forest civilization long passed.",
        features: ["Forgotten technology", "Cultural artifacts", "Trapped guardians"]
      },
      "9": {
        name: "Sacred Grove Cavern",
        description: "A natural underground chamber considered holy by forest dwellers.",
        features: ["Crystal formations", "Ritual sites", "Divine presence"]
      },
      "10": {
        name: "Forgotten Forest Shrine",
        description: "A once-grand temple to nature deities, forgotten by all but the most ancient beings.",
        features: ["Towering wooden idols", "Overgrown offering bowls", "Feral guardians"]
      },
      jack: {
        name: "Thicket Dungeon",
        description: "A seemingly impenetrable wall of thorns hiding a complex of passages.",
        features: ["Thorn walls", "Berry chambers", "Briar guardians"]
      },
      queen: {
        name: "Lost Jungle Pyramid",
        description: "A step pyramid hidden deep in the densest part of the jungle.",
        features: ["Vine-covered steps", "Solar alignment", "Trapped chambers"]
      },
      king: {
        name: "Verdant Catacomb Crypt",
        description: "An ancient burial site where the interred have become one with the forest.",
        features: ["Living sarcophagi", "Plant-infused remains", "Regenerating guardians"]
      }
    },
    // Forest Hazards
    hazards: {
      ace: {
        name: "Leaf Covered Pit",
        description: "A deep hole camouflaged by a thin layer of forest detritus.",
        features: ["Perfect disguise", "Sharpened stakes", "Difficult escape"]
      },
      "2": {
        name: "Treacherous Vine Snare",
        description: "Living plants that wrap around and constrict anything that touches them.",
        features: ["Hair-trigger response", "Strengthening grip", "Multiple tendrils"]
      },
      "3": {
        name: "Fungus Slick",
        description: "Patches of extremely slippery fungal growth covering the forest floor.",
        features: ["Nearly invisible", "Frictionless surface", "Leads to hazards"]
      },
      "4": {
        name: "Venomous Snake Pit",
        description: "A hollow filled with deadly serpents hidden among the forest floor.",
        features: ["Camouflaged predators", "Multiple species", "Toxic environment"]
      },
      "5": {
        name: "Thick Fog Blanket",
        description: "Areas of forest regularly filled with impenetrable, disorienting mist.",
        features: ["Limited visibility", "Dampens sound", "Disorients direction"]
      },
      "6": {
        name: "Toxic Fungal Spores",
        description: "Regions where deadly fungi release harmful spores into the air.",
        features: ["Invisible threat", "Respiratory damage", "Hallucinogenic effects"]
      },
      "7": {
        name: "Wild Animal Ambush",
        description: "Territories of predators that use the forest's cover to stalk prey.",
        features: ["Perfect hunters", "Pack tactics", "Deadly patience"]
      },
      "8": {
        name: "Dark Undergrowth Thickets",
        description: "Dense, thorny vegetation that tears at flesh and equipment.",
        features: ["Razor-sharp thorns", "Toxic barbs", "Entangling branches"]
      },
      "9": {
        name: "Territorial Beast",
        description: "The domain of a powerful forest creature that attacks all intruders.",
        features: ["Marked boundaries", "Strategic terrain", "Fearsome defenses"]
      },
      "10": {
        name: "Enchanted Forest Curse",
        description: "Areas where magic warps reality and affects visitors in strange ways.",
        features: ["Temporal distortions", "Memory effects", "Transformative magic"]
      },
      jack: {
        name: "Eerie Forest Haunting",
        description: "Sections of woods plagued by restless spirits and supernatural phenomena.",
        features: ["Cold spots", "Whispering voices", "Spectral apparitions"]
      },
      queen: {
        name: "Thorny Bramble Traps",
        description: "Massive tangles of thorns that actively ensnare those who come near.",
        features: ["Grasping vines", "Poisoned thorns", "Intelligent movement"]
      },
      king: {
        name: "Mysterious Whispering Trees",
        description: "Ancient forest sentinels that whisper madness to those who listen.",
        features: ["Entrancing voices", "Mind-altering suggestions", "Temporal manipulation"]
      }
    }
  },

  // SPADES - MOUNTAIN/UNDERGROUND LOCATIONS
  spades: {
    // Mountain Civilization
    civilization: {
      ace: {
        name: "Dwarven Mountain Citadel",
        description: "A fortress city carved into the heart of a mountain range.",
        features: ["Massive stone gates", "Forge districts", "Gem-lit halls"]
      },
      "2": {
        name: "Underground Mining Settlement",
        description: "A community established to extract valuable resources from the earth.",
        features: ["Shaft elevators", "Processing facilities", "Trading outposts"]
      },
      "3": {
        name: "Cliffside Village",
        description: "Dwellings built into the face of a steep mountain cliff.",
        features: ["Hanging gardens", "Rope bridges", "Carved staircases"]
      },
      "4": {
        name: "Ancient Temple of the Peaks",
        description: "A holy site built at high elevation to be closer to the heavens.",
        features: ["Stone ziggurats", "Astronomical markers", "Cloud-shrouded towers"]
      },
      "5": {
        name: "High Altitude Town",
        description: "A settlement established in the highest reaches of the mountains.",
        features: ["Thin air adaptations", "Snow management", "Signal beacons"]
      },
      "6": {
        name: "Subterranean Refuge",
        description: "A hidden community living beneath the surface, safe from outside threats.",
        features: ["Hidden entrances", "Fungal farms", "Geothermal heating"]
      },
      "7": {
        name: "Gnomish Cave Outpost",
        description: "A technical marvel of a settlement created by ingenious gnomish engineers.",
        features: ["Mechanical elevators", "Steam power", "Intricate pipework"]
      },
      "8": {
        name: "Temple of the Mountain's Heart",
        description: "A sacred site dedicated to the primal forces of stone and earth.",
        features: ["Geode chambers", "Crystal focus points", "Lava-forged artifacts"]
      },
      "9": {
        name: "Hidden Cliffside Hamlet",
        description: "A secluded community nestled in a high mountain niche.",
        features: ["Natural camouflage", "Single approach path", "Defensive positions"]
      },
      "10": {
        name: "Ruins of the Underground Empire",
        description: "The remnants of a once-vast civilization that thrived beneath the earth.",
        features: ["Fallen statues", "Broken machinery", "Abandoned throne rooms"]
      },
      jack: {
        name: "Mountain Trading Post",
        description: "A commerce center connecting highlands with lowlands.",
        features: ["Mule stables", "Storage warehouses", "Mountain guide services"]
      },
      queen: {
        name: "Gnome Market Town",
        description: "A bustling underground marketplace known for technological wonders.",
        features: ["Mechanical displays", "Gem cutting services", "Innovative gadgets"]
      },
      king: {
        name: "Underground Metropolis",
        description: "A vast city beneath the mountains, home to various races and cultures.",
        features: ["Multi-level construction", "Artificial lighting", "Underground waterways"]
      }
    },
    // Mountain Land Features
    landFeatures: {
      ace: {
        name: "Snow-Capped Peaks",
        description: "The highest points of mountains, perpetually covered in ice and snow.",
        features: ["Treacherous footing", "Thin air", "Panoramic views"]
      },
      "2": {
        name: "Crystal-Studded Caverns",
        description: "Underground chambers filled with beautiful mineral formations.",
        features: ["Natural light refraction", "Valuable deposits", "Acoustic properties"]
      },
      "3": {
        name: "Precarious Cliff Edges",
        description: "Narrow pathways along the sides of steep mountain drops.",
        features: ["Dizzying heights", "Loose stones", "Strong winds"]
      },
      "4": {
        name: "Ancient Mountain Shrines",
        description: "Sacred sites established by mountain-dwelling peoples long ago.",
        features: ["Stone cairns", "Weathered idols", "Protection symbols"]
      },
      "5": {
        name: "Jagged Rock Formations",
        description: "Areas of sharp, uneven stone created by unusual erosion patterns.",
        features: ["Knife-like edges", "Unstable footing", "Strange acoustics"]
      },
      "6": {
        name: "Volcanic Caves",
        description: "Tunnels and chambers formed by ancient lava flows.",
        features: ["Heat vents", "Obsidian walls", "Sulfur deposits"]
      },
      "7": {
        name: "Alpine Lake Sanctuary",
        description: "A pristine body of water high in the mountains.",
        features: ["Crystal clear water", "Surrounded by peaks", "Rare aquatic life"]
      },
      "8": {
        name: "Eroded Cliffside Ruins",
        description: "The remnants of structures built into a cliff face, now worn by time.",
        features: ["Dangerous footing", "Ancient engineering", "Forgotten relics"]
      },
      "9": {
        name: "Abandoned Mine Shafts",
        description: "The remnants of digging operations, now dark and empty.",
        features: ["Rotting support beams", "Abandoned tools", "Unmapped passages"]
      },
      "10": {
        name: "Glowing Lava Tubes",
        description: "Natural tunnels formed by flowing magma, some still active.",
        features: ["Heat waves", "Solidified lava", "Natural glass formations"]
      },
      jack: {
        name: "Subterranean Tunnels",
        description: "A network of passages beneath the mountains, connecting different areas.",
        features: ["Limestone formations", "Underground rivers", "Confusing layouts"]
      },
      queen: {
        name: "High Mountain Passes",
        description: "Narrow routes through otherwise impassable mountain ranges.",
        features: ["Steep inclines", "Weather exposure", "Strategic choke points"]
      },
      king: {
        name: "Echoing Abyssal Chasms",
        description: "Incredibly deep cracks in the earth that seem to have no bottom.",
        features: ["Endless depths", "Disorienting echoes", "Strange air currents"]
      }
    },
    // Mountain Dungeons
    dungeons: {
      ace: {
        name: "Forgotten Mountain Fortress",
        description: "An abandoned defensive structure built into a mountainside.",
        features: ["Crumbling battlements", "Hidden armories", "Strategic viewpoints"]
      },
      "2": {
        name: "Subterranean Caverns",
        description: "A vast network of natural caves deep beneath the surface.",
        features: ["Stalactites/stalagmites", "Underground pools", "Narrow passages"]
      },
      "3": {
        name: "Cliffside Catacomb Lairs",
        description: "Burial chambers carved into steep mountain faces.",
        features: ["Treacherous approaches", "Preserved remains", "Vertical challenges"]
      },
      "4": {
        name: "Ruined Temple Vaults",
        description: "The hidden treasuries beneath a mountain temple.",
        features: ["Religious iconography", "Trapped chambers", "Ancient artifacts"]
      },
      "5": {
        name: "Underground Maze",
        description: "A confusing network of tunnels designed to disorient intruders.",
        features: ["Dead ends", "Circular routes", "Direction-altering magic"]
      },
      "6": {
        name: "Hidden Gemstone Grotto",
        description: "A secret cave filled with valuable mineral formations.",
        features: ["Crystal growths", "Mineral pools", "Gem-encrusted walls"]
      },
      "7": {
        name: "Mountain Labyrinth",
        description: "A complex of passages carved into the heart of a mountain.",
        features: ["Carved stone", "Ancient defenses", "Collapsed sections"]
      },
      "8": {
        name: "Ancient Cliffside Ruins",
        description: "The remnants of a civilization that built their homes into mountain walls.",
        features: ["Hanging structures", "Eroded stairways", "Wind-worn carvings"]
      },
      "9": {
        name: "Deep Abyssal Caverns",
        description: "A series of chambers reaching far into the depths of the earth.",
        features: ["Increasing pressure", "Strange ecology", "Primordial entities"]
      },
      "10": {
        name: "Lost Dwarven Forge",
        description: "An abandoned facility where master craftsmen once created legendary items.",
        features: ["Massive furnaces", "Intricate machinery", "Unfinished masterpieces"]
      },
      jack: {
        name: "Volcanic Dungeon",
        description: "A complex of chambers within an active volcano.",
        features: ["Lava channels", "Extreme heat", "Unstable ground"]
      },
      queen: {
        name: "Mountain Citadel Ruins",
        description: "The remnants of a once-impregnable fortress atop a mountain peak.",
        features: ["Collapsed towers", "Ancient armories", "Royal quarters"]
      },
      king: {
        name: "Abyssal Mountain Crypt",
        description: "A vast burial complex for royalty and heroes, built deep within a mountain.",
        features: ["Hierarchical tombs", "Legendary grave goods", "Eternal guardians"]
      }
    },
    // Mountain Hazards
    hazards: {
      ace: {
        name: "Precipice Edge Peril",
        description: "Narrow paths along cliffs with fatal drops just a misstep away.",
        features: ["Strong winds", "Crumbling edges", "Dizzying heights"]
      },
      "2": {
        name: "Cave-In Danger",
        description: "Unstable underground areas prone to sudden collapse.",
        features: ["Creaking supports", "Loose ceiling rocks", "Structural weaknesses"]
      },
      "3": {
        name: "Avalanche Threat",
        description: "Slopes where snow and rock can come crashing down with little warning.",
        features: ["Unstable snow pack", "Echo triggers", "Channeled destruction"]
      },
      "4": {
        name: "Bottomless Chasm Abyss",
        description: "Incredibly deep cracks in the mountain with no visible bottom.",
        features: ["Deceptive edges", "Disorienting depths", "Vertigo effects"]
      },
      "5": {
        name: "Treacherous Mountain Fog",
        description: "Dense mist that obscures dangers and disorients travelers.",
        features: ["Zero visibility", "Sound dampening", "Disorientation"]
      },
      "6": {
        name: "Toxic Gas Pockets",
        description: "Areas where deadly vapors collect in underground spaces.",
        features: ["Invisible threat", "Heavier than air", "Subtle warning signs"]
      },
      "7": {
        name: "Rockslide Hazard",
        description: "Unstable slopes where boulders can break loose and tumble down.",
        features: ["Trigger zones", "Increasing momentum", "Unpredictable paths"]
      },
      "8": {
        name: "Volcanic Eruption Crater",
        description: "The dangerous summit of an active volcano.",
        features: ["Toxic fumes", "Lava pools", "Unpredictable eruptions"]
      },
      "9": {
        name: "Abyssal Abyss Rift",
        description: "A tear in reality itself, found in the deepest mountain caverns.",
        features: ["Reality distortions", "Gravitational anomalies", "Eldritch whispers"]
      },
      "10": {
        name: "Cursed Mountain Curse",
        description: "Areas affected by ancient magic that brings misfortune and doom.",
        features: ["Subtle influence", "Progressive effects", "Historical warnings"]
      },
      jack: {
        name: "Haunting Echoing Chambers",
        description: "Caves where sounds repeat and distort, driving visitors to madness.",
        features: ["Disorienting acoustics", "Mental effects", "Impossible noises"]
      },
      queen: {
        name: "Petrified Remnants",
        description: "Areas where strange energy turns living things to stone.",
        features: ["Stone statues", "Progressive transformation", "Mineral conversion"]
      },
      king: {
        name: "Quaking Mountain Tremors",
        description: "Regions plagued by unpredictable and violent earthquakes.",
        features: ["Ground fissures", "Structural collapses", "Chain reactions"]
      }
    }
  }
};

// Helper function to determine biome based on suit
function getBiomeFromSuit(suit) {
  const biomes = {
    hearts: 'arid',
    diamonds: 'water',
    clubs: 'forest',
    spades: 'mountain'
  };
  
  return biomes[suit] || 'unknown';
}

// Helper function to determine location category based on rank
function getLocationCategory(rank) {
  if (rank === 'jack' || rank === 'queen' || rank === 'king' || rank === 'ace' || 
      (typeof rank === 'string' && parseInt(rank) <= 3)) {
    return 'civilization';
  } else if (parseInt(rank) <= 6) {
    return 'landFeatures';
  } else if (parseInt(rank) <= 10) {
    return 'dungeons';
  } else {
    // Fallback for any unexpected values
    return 'hazards';
  }
}

// Function to get location data from a card draw
function getLocationFromCard(card) {
  const { suit, rank } = card;
  const biome = getBiomeFromSuit(suit);
  const category = getLocationCategory(rank);
  
  // Check if we have data for this specific card
  if (locations[suit] && 
      locations[suit][category] && 
      locations[suit][category][rank]) {
    return {
      ...locations[suit][category][rank],
      biome,
      category
    };
  }
  
  // Fallback for any missing data
  return {
    name: `${biome.charAt(0).toUpperCase() + biome.slice(1)} Location`,
    description: `An unexplored area in ${biome} terrain.`,
    features: [`Typical ${biome} characteristics`],
    biome,
    category
  };
}

export default locations;
export { getLocationFromCard, getBiomeFromSuit, getLocationCategory };
