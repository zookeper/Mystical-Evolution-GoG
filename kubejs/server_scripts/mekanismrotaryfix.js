ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:rotary/superheated_sodium' })
  event.custom({
    type: 'mekanism:rotary',
    fluid_input: {
      amount: 1000,
      fluid: 'mekanism:superheated_sodium'
    },
    gas_output: {
      amount: 1000,
      gas: 'mekanism:superheated_sodium'
    }
  }).id('kubejs:rotary/superheated_sodium')
})