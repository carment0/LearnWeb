export const fetchPokemons = (pokemonResults) => {
  return{
    type: "FETCH_POKEMONS",
    data: {
      pokemonResults
    }
  };
};
