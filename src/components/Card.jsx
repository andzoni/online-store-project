import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
    this.increaseCount = this.increaseCount.bind(this);
    this.decreaseCount = this.decreaseCount.bind(this);
  }

  /* https://dev.to/stackfindover/products-quantity-counter-using-html-css-javascript-663 */

  increaseCount() {
    this.setState((prevState) => ({
      quantity: prevState.quantity + 1,
    }));
  }

  decreaseCount() {
    const { quantity } = this.state;
    if (quantity > 0) {
      this.setState((prevState) => ({
        quantity: prevState.quantity - 1,
      }));
    } else {
      this.setState({
        quantity: 0,
      });
    }
  }

  render() {
    const { item } = this.props;
    const { quantity } = this.state;
    return (
      <div className="card2" data-testid="shopping-cart-product-name">
        <h1 className="card2H1">{ item.name }</h1>
        <h1 className="card2H2">{ item.id }</h1>
        <h1 className="card2H3">
          R$
          { item.price }
        </h1>
        <div className="counter">
          <button
            type="button"
            className="down"
            onClick={ this.decreaseCount }
            data-testid="product-decrease-quantity"
          >
            -
          </button>
          <h1
            data-testid="shopping-cart-product-quantity"
          >
            { quantity }
          </h1>
          <button
            type="button"
            className="up"
            onClick={ this.increaseCount }
            data-testid="product-increase-quantity"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.string.isRequired,
};

export default Card;
