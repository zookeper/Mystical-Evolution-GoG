Normal Drops Configuration
=========================

This directory contains drops that are ALWAYS active.

Files:
- Global_Hostile_Drops.json: Main configuration for all hostile mobs
  * Contains your primary drop configurations
  * Will regenerate with basic example if deleted
  * Only delete if you want to reset to defaults
- Global_Hostile_Drops_Example.json: Comprehensive examples (Safe to delete)
- Custom .json files: Your additional drop configurations
- Mobs/: Entity-specific drop configurations
  * ? NEW: Supports nested folders for organization!
  * Example: Mobs/modded_mobs/thermal_expansion/machines.json
  * Example: Mobs/boss_mobs/twilight_forest/bosses.json

These drops will always be checked when entities are killed,
regardless of any active events.

NESTED FOLDER ORGANIZATION:
==========================
The Mobs/ folder now supports nested directories for better organization:

Suggested organization patterns:
- By mod: Mobs/thermal_expansion/machines.json
- By entity type: Mobs/undead/zombie_variants.json
- By biome: Mobs/nether/nether_mobs.json
- By difficulty: Mobs/boss_mobs/raid_bosses.json
- Mixed: Mobs/custom/my_server/special_drops.json

All .json files in any subfolder will be automatically loaded.

HOW TO DISABLE DROPS:
====================
To disable drops without losing your file:

Option 1 - Empty the file:
Replace all content with: []

Option 2 - Set drop chances to 0:
Change "dropChance": [value] to "dropChance": 0

Option 3 - Move to a disabled folder:
Create a 'disabled' folder and move files there temporarily
(Files in subfolders are still loaded, so this won't disable them)

Remember: The system will recreate Global_Hostile_Drops.json
if it's deleted, so use the empty array [] method instead.
