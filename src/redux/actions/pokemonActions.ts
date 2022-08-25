import {Dispatch} from 'redux';
import axios from 'axios';
import {pokemonLoading, pokemonFailure, pokemonSuccess, pokemonAction} from './pokemonActionTypes';


export const getPokemon = (pokemon: string) => async (dispatch: Dispatch<pokemonAction>) => {
    try {
        dispatch(pokemonLoading());

        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

        dispatch(pokemonSuccess(res.data))
    } catch(e) {
        dispatch(pokemonFailure())
    }
};