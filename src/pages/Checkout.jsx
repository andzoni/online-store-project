import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';

class Checkout extends React.Component {
  render() {
    const { shopping, cart } = this.props;
    return (
      <section>
        <ShoppingCart cart={ cart } shopping={ shopping } />
        <form>
          <label htmlFor="checkout-fullname">
            Nome:
            <input
              type="text"
              data-testid="checkout-fullname"
            />
          </label>
          <label htmlFor="checkout-email">
            Email:
            <input
              type="email"
              data-testid="checkout-email"
            />
          </label>
          <label htmlFor="checkout-cpf">
            CPF:
            <input
              type="text"
              data-testid="checkout-cpf"
            />
          </label>
          <label htmlFor="checkout-phone">
            Telefone:
            <input
              type="tel"
              data-testid="checkout-phone"
            />
          </label>
          <label htmlFor="checkout-cep">
            CEP:
            <input
              type="text"
              data-testid="checkout-cep"
            />
          </label>
          <label htmlFor="checkout-address">
            Endereço:
            <input
              type="text"
              data-testid="checkout-address"
            />
          </label>
        </form>
      </section>
    );
  }
}

Checkout.propTypes = {
  shopping: PropTypes.arrayOf(Object).isRequired,
  cart: PropTypes.bool.isRequired,
};

export default Checkout;
