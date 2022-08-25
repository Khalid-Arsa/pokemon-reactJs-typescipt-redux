import {pokemonEvents} from '../events/pokemonEvents';
import {IActionUnion, makeBaseAction, makeResultAction} from '../utils/actionUtility';
import {IPokemon} from '../../models/pokemonInterface'


export const pokemonLoading = makeBaseAction<pokemonEvents.POKEMON_LOADING>(pokemonEvents.POKEMON_LOADING);
export const pokemonSuccess = makeResultAction<pokemonEvents.POKEMON_SUCCESS, IPokemon>(pokemonEvents.POKEMON_SUCCESS);
export const pokemonFailure = makeBaseAction<pokemonEvents.POKEMON_FAILURE>(pokemonEvents.POKEMON_FAILURE);

const actions = {
    pokemonLoading, pokemonSuccess, pokemonFailure
}

export type pokemonAction = IActionUnion<typeof actions>