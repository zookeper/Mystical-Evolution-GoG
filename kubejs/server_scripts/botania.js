ServerEvents.recipes(event => {
  // Remove any existing recipes (optional)
  event.remove({ id: 'botania:pure_daisy/obsidian' })
  event.remove({ id: 'botania:pure_daisy/cobblestone' })

  // Cobblestone ➜ Netherrack
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'block',
      block: 'minecraft:cobblestone'
    },
    output: {
      name: 'minecraft:netherrack'
    }
  })

  // Netherrack ➜ Obsidian
  event.custom({
    type: 'botania:pure_daisy',
    input: {
      type: 'block',
      block: 'minecraft:netherrack'
    },
    output: {
      name: 'minecraft:obsidian'
    }
  })
})