import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class ShoppingCart extends React.Component {
  render() {
    const { shopping, cart } = this.props;
    // const { shopping, cart } = this.props;

    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );

    const full = (
      <div className='shopcart'>
        { shopping.map((item) => (<Card key={ item.name } item={ item } />))}
        <Link
          data-testid="checkout-products"
          to={ { pathname: '/checkout', state: shopping } }
        >
          Checkout Products
        </Link>
      </div>
    );

    return (
      <div>
        { cart ? full : empty}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  shopping: PropTypes.arrayOf(Object).isRequired,
  cart: PropTypes.bool.isRequired,
};

export default ShoppingCart;
