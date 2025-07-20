// kubejs/server_scripts/powah_custom_registry.js

ServerEvents.highPriorityData(event => {
  // Lava as a fluid coolant
  event.addJson('powah:recipes/coolant/lava', {
    type: 'powah:coolant',
    fluid: 'minecraft:lava',
    cooling: 10
  });

  // Cobblestone as a solid coolant
  event.addJson('powah:recipes/coolant/cobblestone', {
    type: 'powah:coolant',
    ingredient: {
      item: 'minecraft:cobblestone'
    },
    cooling: 10
  });

  // Cobblestone as a heat source
  event.addJson('powah:recipes/heat/cobblestone_heat', {
    type: 'powah:heat',
    ingredient: {
      item: 'minecraft:cobblestone'
    },
    amount: 10
  });

  // Water as a magmatic fluid (optional)
  event.addJson('powah:recipes/magmatic_fluid/water_heat', {
    type: 'powah:magmatic_fluid',
    fluid: 'minecraft:water',
    amount: 10
  });
});
