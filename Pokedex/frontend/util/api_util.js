export const fetchAllPokemon = () => (
  $.ajax({
    method: 'get',
    url: 'api/pokemons'
  })
);


export const fetchSinglePokemon = (id) => (
  $.ajax({
    method: 'get',
    url: `api/pokemons/${id}`
  })
);
