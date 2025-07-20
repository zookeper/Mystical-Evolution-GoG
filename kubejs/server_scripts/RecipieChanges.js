/* 
 * ServerEvents.recipes(callback) is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen for the "recipes" server event.
ServerEvents.recipes(event => {
event.remove({ output: 'mysticalagriculture:zinc_seeds' })
event.remove({ input: 'mysticalagriculture:zinc_seeds' })
event.remove({ output: 'projecte:philosophers_stone' })
event.remove({ output: 'elementalswords:fire_sword' })
event.remove({ output: 'elementalswords:water_sword' })
event.remove({ output: 'elementalswords:earth_sword' })
event.remove({ output: 'elementalswords:air_sword' })
event.remove({ output: 'elementalswords:fusion_sword' })

event.remove({ output: 'minecraft:iron', input: 'projecte:philosophers_stone' })
event.remove({ output: 'minecraft:gold', input: 'projecte:philosophers_stone' })
event.remove({ output: 'minecraft:diamond', input: 'projecte:philosophers_stone' })
event.remove({ output: 'minecraft:emerald', input: 'projecte:philosophers_stone' })

event.remove({ output: 'skyblock_resources:wooden_empty_generator' })
event.shaped(
  Item.of('skyblock_resources:wooden_empty_generator', 1), // arg 1: output
  [
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    'BDB'
  ],
  {
    A: 'minecraft:stick',
    B: '#minecraft:planks',  //arg 3: the mapping object
    C: '#forge:chests', 
    D: 'woodenhopper:wooden_hopper'

  })

event.remove({ output: 'projecte:transmutation_table' })
event.shaped(
  Item.of('projecte:transmutation_table', 1), // arg 1: output
  [
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: '#forge:stone',
    B: '#forge:obsidian',  //arg 3: the mapping object
    C: '#forge:chests', 
    D: ''

  })

event.remove({ output: 'projecte:transmutation_tablet' })
event.shaped(
  Item.of('projecte:transmutation_tablet', 1), // arg 1: output
  [
    'BAB',
    'ACA', // arg 2: the shape (array of strings)
    'BAB'
  ],
  {
    A: '#forge:obsidian',
    B: 'minecraft:redstone_block',  //arg 3: the mapping object
    C: 'projecte:transmutation_table', 
    D: ''

  })

event.shaped(
  Item.of('botanypots:terracotta_hopper_botany_pot', 1), // arg 1: output
  [
    'ACA',
    'ABA', // arg 2: the shape (array of strings)
    ' A '
  ],
  {
    A: 'minecraft:terracotta',
    B: 'minecraft:flower_pot',  //arg 3: the mapping object
    C: 'woodenhopper:wooden_hopper' 	
  })
 
event.shaped(
  Item.of('minecraft:mud', 8), // arg 1: output
  [
    'AAA',
    'ABA', // arg 2: the shape (array of strings)
    'AAA'
  ],
  {
    A: 'minecraft:dirt',
    B: 'woodenbucket:wooden_bucket'
  })

event.shapeless(
  Item.of('botanypots:terracotta_hopper_botany_pot', 1), // arg 1: output
  [
    'botanypots:terracotta_botany_pot',
    'woodenhopper:wooden_hopper'
  ]
)

event.shapeless(
  Item.of('minecraft:grass_block', 1), // arg 1: output
  [
    'minecraft:bone_meal',
    'minecraft:dirt'
  ]
)
})