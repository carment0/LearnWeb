const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_POKEMONS":
      const newState = {};
      const pokemons = action.data.pokemonResults;
      pokemons.forEach((pokemon) => {
        newState[pokemon.name] = pokemon.url;
      });
      return Object.assign({}, state, newState);
    default:
      return state;
  }
};

export default pokemonReducer;
