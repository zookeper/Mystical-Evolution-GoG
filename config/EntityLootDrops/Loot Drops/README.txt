Entity Loot Drops Configuration Guide
===================================

This directory contains all entity loot drop configurations.

Directory Structure:
-------------------
Loot Drops/
  ??? Normal Drops/           # Always active drops
  ?   ??? Global_Hostile_Drops.json        # Main hostile mob drops
  ?   ??? Global_Hostile_Drops_Example.json # Comprehensive examples
  ?   ??? [Custom].json       # Your custom drop files
  ?   ??? Mobs/               # Entity-specific drops
  ?       ??? [entity]_drops.json # Per-entity configurations
  ?       ??? custom_folder/  # ? NEW: Nested folders supported!
  ?       ?   ??? mod_mobs.json
  ?       ?   ??? boss_mobs.json
  ?       ??? organized/      # ? Any depth of nesting works
  ?           ??? subfolder/
  ?               ??? special_drops.json
  ??? Event Drops/            # Event-specific drops
      ??? Winter/             # Winter event drops
      ??? Summer/             # Summer event drops
      ??? Easter/             # Easter event drops
      ??? Halloween/          # Halloween event drops
      ??? [Custom Event]/     # Your custom events
          ??? Global_Hostile_Drops.json
          ??? Global_Hostile_Drops_Example.json
          ??? Mobs/           # Event-specific entity drops
              ??? event_mobs.json
              ??? custom_event_folder/ # ? Nested folders in events too!
                  ??? special_event_drops.json

Configuration Format:
--------------------
All drop configurations use JSON format with these properties:

BASIC PROPERTIES:
- entityId: Entity ID (e.g., "minecraft:zombie") - only for entity-specific drops
- itemId: Item to drop (e.g., "minecraft:diamond")
- dropChance: Percentage chance to drop (0-100)
- minAmount: Minimum amount to drop
- maxAmount: Maximum amount to drop
- requirePlayerKill: If true, only drops when killed by a player

ADVANCED PROPERTIES:
- enchantments: List of enchantments to apply
- nbtData: Custom NBT data for the item
- customName: Custom display name for the item
- lore: List of lore lines for the item
- conditions: Additional conditions for the drop

NESTED FOLDER ORGANIZATION:
==========================
? NEW FEATURE: You can now organize your Mobs configurations using nested folders!

Examples of valid organization:
- Mobs/vanilla_mobs/zombie_drops.json
- Mobs/modded_mobs/thermal_expansion/machines.json
- Mobs/boss_mobs/twilight_forest/bosses.json
- Mobs/by_biome/desert/desert_mobs.json
- Mobs/by_difficulty/hard/elite_drops.json

Benefits of nested folders:
- Organize drops by mod, biome, difficulty, or any system you prefer
- Keep related configurations together
- Easier to manage large numbers of entity configurations
- Works in both Normal Drops and Event Drops

Example Entity Drop Configuration:
[
  {
    "entityId": "minecraft:zombie",
    "itemId": "minecraft:diamond",
    "dropChance": 5.0,
    "minAmount": 1,
    "maxAmount": 3,
    "requirePlayerKill": true
  }
]

Example Global Hostile Drop Configuration:
[
  {
    "itemId": "minecraft:emerald",
    "dropChance": 2.0,
    "minAmount": 1,
    "maxAmount": 1,
    "requirePlayerKill": false
  }
]

Tips:
----
- Use Global_Hostile_Drops.json for drops that apply to all hostile mobs
- Use Mobs/ folder for entity-specific drops
- ? NEW: Create nested folders in Mobs/ to organize your configurations
- Create custom .json files for organized drop categories
- Event drops only activate when the event is enabled
- Delete example files to regenerate them with updates
- Use /lootdrops reload to apply changes without restarting
- To disable drops, use [] or set dropChance to 0 - DON'T delete the main files!
- Nested folders are scanned recursively - any .json file will be found
- Folder names don't affect functionality - organize however you prefer
