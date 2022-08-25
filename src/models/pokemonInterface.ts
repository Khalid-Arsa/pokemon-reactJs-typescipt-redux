export interface IPokemonAbility {
    ability: {
        name: string,
        url: string
    }
}

export interface IPokemonSprites {
    front_default: string
}

export interface IPokemonStat {
    base_stat: number,
    stat: {
        name: string
    }
}

export interface IPokemon {
    abilities: Array<IPokemonAbility>,
    sprites: IPokemonSprites,
    stats: Array<IPokemonStat>,
}