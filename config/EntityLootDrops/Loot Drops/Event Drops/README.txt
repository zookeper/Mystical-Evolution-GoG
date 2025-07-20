Event Drops Configuration
========================

This directory contains drops that are only active during specific events.

Built-in Events:
- Winter/: Winter season drops
- Summer/: Summer season drops
- Easter/: Easter holiday drops
- Halloween/: Halloween holiday drops

Custom Events:
You can create your own event folders with any name.
Each event folder can contain:
- Global_Hostile_Drops.json: Drops for all hostile mobs during this event
- Global_Hostile_Drops_Example.json: Example configurations
- Custom .json files: Additional drop configurations
- Mobs/: Entity-specific drops during this event
  * ? NEW: Supports nested folders for organization!
  * Example: Mobs/event_bosses/special_halloween_boss.json

Event Management:
Events are controlled through Active_Events.json in the main config directory.
Use the /lootdrops event [name] [on/off] command to toggle events.

Event drops are checked IN ADDITION to normal drops when active.
