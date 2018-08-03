import { values } from 'lodash';

export const selectAllPokemon = (state) => (values(state.entities.pokemon));

//  one to select a pokemon given its id
export const selectSinglePokemon = (state, id) => {
  return (state.entities.pokemon[id]);
};

// one to select the items of a pokemon
export const selectItems = (state) => (values(state.entities.items));

export const selectPokemonItem = (state, itemId) => (
  state.entities.items[itemId]);
