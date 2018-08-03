import React from 'react';
import { connect } from 'react-redux';
import ItemDetail from './item_detail';
import { selectPokemonItem } from '../reducers/selectors';

const mapStateToProps = (state, ownProps) => ({
  item: selectPokemonItem(state, ownProps.match.params.itemId)
});

// const mapDispatchToProps = dispatch => {{
//   return {
//
//   };
// }};

export default connect(
  mapStateToProps,
  null
)(ItemDetail);
