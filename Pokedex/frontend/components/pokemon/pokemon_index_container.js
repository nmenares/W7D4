import React from 'react';
import { connect } from 'react-redux';
import { requestAllPokemon } from '../../actions/pokemon_actions';
import { selectAllPokemon } from '../../reducers/selectors';
import PokemonIndex from './pokemon_index';
const mapStateToProps = state => ({
  pokemon: selectAllPokemon(state)
});

const mapDispatchToProps = dispatch => {{
  return {
    requestAllPokemon: requestAllPokemon(dispatch)
  };
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonIndex);
