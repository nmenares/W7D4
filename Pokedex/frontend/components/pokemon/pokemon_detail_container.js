import React from 'react';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';
import { selectSinglePokemon, selectItems} from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  {
  return ({
    pokemonId: ownProps.match.params.pokemonId,
    items: selectItems(state),
    pokemon: selectSinglePokemon(state, ownProps.match.params.pokemonId)
  });
}};

const mapDispatchToProps = dispatch => {{
  return {
    requestSinglePokemon: requestSinglePokemon(dispatch)
  };
}};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
