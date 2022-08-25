import {combineReducers} from 'redux';
import pokemonReducers from './pokemonReducers';


const RootReducers = combineReducers({
    pokemon: pokemonReducers
});


export default RootReducers;