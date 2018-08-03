import React from 'react';
import ItemDetailContainer from '../item_detail_container';
import { Route } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if( newProps.pokemonId != this.props.pokemonId) {
      this.props.requestSinglePokemon(newProps.pokemonId);
    }
  }

  render() {
    const pokemon = this.props.pokemon;
    if(!pokemon || !pokemon.moves) {
      return ( <section></section> );
    }
    return (
      <section className="pokemon-details">

        <img src={pokemon.image_url}></img>
        <h2>{pokemon.name}</h2>
        <ul>
          <li>Type: {pokemon.type}</li>
          <li>Attack: {pokemon.attack}</li>
          <li>Defense: {pokemon.defense}</li>
          Moves:
          {
            pokemon.moves.map((move)=> ( " " + move ))
          }
          <br />
            <h2>Items:</h2>
            <br />
            {
              this.props.items.map((item, idx) => {
                return <img className="items" src={item.image_url} key={idx}></img>;
              })
            }
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
        </ul>
      </section>
    );
  }
}



export default PokemonDetail;
