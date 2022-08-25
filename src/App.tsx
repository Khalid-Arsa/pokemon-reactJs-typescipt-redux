import React, {useState} from 'react';
import './App.css';
import {useSelector, useDispatch} from 'react-redux';
import { RootStore } from './redux/store';
import {getPokemon} from './redux/actions/pokemonActions'

const App: React.FC<{}> =( ) => {
  const [pokemonName, setPokemonName] = useState("")
  const pokemonState = useSelector((state: RootStore) => state.pokemon);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemonName(event.target.value)
  }

  const handleSubmit = () => {
    dispatch(getPokemon(pokemonName))
  }

  console.log("pokemon state:", pokemonState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
      {
        pokemonState.pokemon && (
          <div>
            <img src={pokemonState.pokemon.sprites.front_default} alt="" />
            {pokemonState.pokemon.abilities.map(ability => {
              return <p>{ability.ability.name}</p>
            })}
          </div>
        )
      }
    </div>
  );
}

export default App;
