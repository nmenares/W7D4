import React from 'react';

class ItemDetail extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const item = this.props.item;

    return (
      <div>
        <h2>{item.name}</h2>
        <h3>Happiness: {item.happiness}</h3>
        <h3>Price: ${item.price}</h3>
      </div>
    );
  }
}

export default ItemDetail;
