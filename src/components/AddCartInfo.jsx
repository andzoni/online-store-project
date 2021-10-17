import React from 'react';
import PropTypes from 'prop-types';

class AddCartInfo extends React.Component {
  render() {
    const { shoppingList, name, id, price } = this.props;
    return (
      <button
        type="button"
        data-testid="product-detail-add-to-cart"
        onClick={ () => shoppingList(name, id, price) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddCartInfo.propTypes = {
  name: PropTypes.string.isRequired,
  shoppingList: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default AddCartInfo;
