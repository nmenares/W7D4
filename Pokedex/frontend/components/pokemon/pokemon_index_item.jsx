import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = ({pokemon}) => {
  return (
    <li>
      <img className="pokemon" src={pokemon.image_url}></img>
      <Link to={`/pokemons/${pokemon.id}`} >{pokemon.name}</Link>

    </li>
  );
};

export default PokemonIndexItem;
