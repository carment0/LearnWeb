import {combineReducers} from 'redux';

import pokemonDetailReducer from './pokemon_detail_reducer';
import pokemonReducer from './pokemon_reducer';

const rootReducer = combineReducers({
  pokemonDetail: pokemonDetailReducer,
  pokemons: pokemonReducer
});

export default rootReducer;
