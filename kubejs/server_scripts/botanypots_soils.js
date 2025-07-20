ServerEvents.recipes(event => {
    const crystalSoils = [
        'minecraft:dirt',
        'minecraft:farmland',
        'aether:aether_farmland',
        'mysticalagriculture:inferium_farmland',
        'mysticalagriculture:prudentium_farmland',
        'mysticalagriculture:tertium_farmland',
        'mysticalagriculture:imperium_farmland',
        'mysticalagriculture:supremium_farmland',
        'mysticalagradditions:insanium_farmland'
    ]

    crystalSoils.forEach((blockId, index) => {
        event.recipes.botanypots.soil(
            blockId,
            { block: blockId },
            ['crystal_soil'],
            -1,
            1.0 - index * 0.1 // optional: growth multiplier tiering
        )
    })
})