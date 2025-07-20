ServerEvents.recipes(event => {
    const crystalSoil = ['crystal_soil']
    const soilDefs = [
        ['minecraft:dirt', 1.0],
        ['minecraft:farmland', 0.9],
        ['aether:aether_farmland', 0.8],
        ['mysticalagriculture:inferium_farmland', 0.8],
        ['mysticalagriculture:prudentium_farmland', 0.7],
        ['mysticalagriculture:tertium_farmland', 0.6],
        ['mysticalagriculture:imperium_farmland', 0.5],
        ['mysticalagriculture:supremium_farmland', 0.4],
        ['mysticalagradditions:insanium_farmland', 0.3]
    ]

    // Register soils
    soilDefs.forEach(([id, growth]) => {
        event.recipes.botanypots.soil(id, { block: id }, crystalSoil, -1, growth)
    })

    // Drop mapper
    const dropMap = {
        nether_quartz: 'minecraft:quartz',
        redstone: 'minecraft:redstone',
        coal: 'minecraft:coal',
        diamond: 'minecraft:diamond',
        emerald: 'minecraft:emerald',
        lapis_lazuli: 'minecraft:lapis_lazuli',
        glowstone: 'minecraft:glowstone_dust',
        prismarine: 'minecraft:prismarine_shard',
        salt: 'mekanism:salt',
        fluix: 'ae2:fluix_crystal',
        certus_quartz: 'ae2:certus_quartz_crystal',
        fluorite: 'mekanism:fluorite_gem',
        osmium: 'mekanism:ingot_osmium',
        tin: 'mekanism:ingot_tin',
        lead: 'mekanism:ingot_lead',
        copper: 'minecraft:copper_ingot',
        iron: 'minecraft:iron_ingot',
        amethyst: 'minecraft:amethyst_shard',
        uranium: 'mekanism:ingot_uranium',
        uraninite: 'powah:uraninite',
        ender: 'minecraft:ender_pearl'

    }
    function addCrystalCrop(seedId, displayBlock, dropItem, growthTicks) {
        if (growthTicks === undefined) growthTicks = 100;
        event.recipes.botanypots.crop(
            seedId,
            crystalSoil,
            { block: displayBlock },
            [Item.of(dropItem).withChance(100).withRolls(1, 2)],
            growthTicks,
            1
        )
    }

    const buddingTypes = [
        'copper', 'lead', 'tin', 'nether_quartz', 'osmium', 'redstone',
        'coal', 'diamond', 'emerald', 'fluix', 'lapis_lazuli', 'fluorite', 'glowstone',
        'certus_quartz', 'prismarine', 'salt', 'uranium', 'uraninite', 'ender'
    ]

    buddingTypes.forEach(type => {
        const seed = `buddingcrystals:budding_${type}`
        const display = `buddingcrystals:${type}_cluster`
        const drop = dropMap[type] ?? `minecraft:${type}`
        addCrystalCrop(seed, display, drop)
    })

    // Extra crops (Unity)
    addCrystalCrop(
        'sgjourney:budding_unity',
        'sgjourney:unity_cluster',
        'sgjourney:unity_shard'
    )
        addCrystalCrop(
        'minecraft:budding_amethyst',
        'minecraft:amethyst_cluster',
        'minecraft:amethyst_shard'
    )
})