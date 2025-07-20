// Add a Powah energizing recipe
ServerEvents.recipes(event => {
  // .energizing([inputs], output, energy)
  event.recipes.powah.energizing(
    ['minecraft:cobblestone'],
    'minecraft:tnt',
    1000
  );
});