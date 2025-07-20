ServerEvents.recipes(event => {
  const ores = [
    ['minecraft:raw_iron', 'mekanism:dust_iron'],
    ['minecraft:raw_copper', 'mekanism:dust_copper'],
    ['minecraft:raw_gold', 'mekanism:dust_gold'],
    ['mekanism:raw_tin', 'mekanism:dust_tin'],
    ['mekanism:raw_lead', 'mekanism:dust_lead'],
    ['mekanism:raw_osmium', 'mekanism:dust_osmium'],
    ['mekanism:raw_uranium', 'mekanism:dust_uranium'],
    // Add more as needed
  ]

  ores.forEach(([raw, dust]) => {
    event.shapeless(Item.of(dust), [
      raw,
      'mahoutsukai:mortar_and_pestle'
    ]).keepIngredient('mahoutsukai:mortar_and_pestle')
  })
})