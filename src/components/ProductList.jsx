import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class ProductList extends React.Component {
  render() {
    const { products, category, inputValue, shoppingList, shopping, cart } = this.props;

    if (products === undefined) {
      return (<p>Nenhum produto foi encontrado</p>);
    }
    return (
      <div className="list">
        {products.map((product) => (<Product
          key={ product.id }
          data={ product }
          inputValue={ inputValue }
          category={ category }
          shoppingList={ shoppingList }
          products={ products }
          shopping={ shopping }
          cart={ cart }
        />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  map: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  shoppingList: PropTypes.func.isRequired,
  shopping: PropTypes.arrayOf(Object).isRequired,
  cart: PropTypes.bool.isRequired,
};

export default ProductList;
