import {IPokemon} from '../../models/pokemonInterface';
import {pokemonAction} from '../actions/pokemonActionTypes';
import {pokemonEvents} from '../events/pokemonEvents'


interface DefaultStateI {
    loading: boolean;
    pokemon?: IPokemon;
}

const defaultState: DefaultStateI = {
    loading: false, 
};


const pokemonReducers = (state: DefaultStateI = defaultState, action: pokemonAction) : DefaultStateI => {

    switch (action.type) {
        case pokemonEvents.POKEMON_LOADING:
            return {
                ...state,
                loading: true
            }
        case pokemonEvents.POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        case pokemonEvents.POKEMON_FAILURE:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}


export default pokemonReducers;