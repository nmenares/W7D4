import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render(){
    const pokemon = this.props.pokemon;

    return (
      <ul>
        {
          pokemon.map((poke, idx)=>(
            <li key={idx}>
              {poke.name}
              <img href={poke.img_url}></img>
            </li>
          ))
        }
      </ul>
    );
  }
}

export default PokemonIndex;
