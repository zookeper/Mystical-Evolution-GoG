// kubejs/server_scripts/fix_recipes.js
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:crushing/venus_sandstone_to_venus_sand' })
  event.custom({
    type: 'mekanism:crushing',
    input: {
      ingredient: { item: 'ad_astra:venus_sandstone' } // or use tag here
    },
    output: { item: 'ad_astra:venus_sand', count: 1 }
  }).id('kubejs:venus_sandstone_to_sand')
})