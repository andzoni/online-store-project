import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddCart from './AddCart';

class Product extends React.Component {
  render() {
    const { data: { id, price, thumbnail, title },
      shoppingList,
    } = this.props;
    return (
      <div className="card1">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}` } }
        >
          <div data-testid="product">
            <h1>{ title }</h1>
            <img src={ thumbnail } alt={ title } />
            <h2>
              R$
              { price }
            </h2>
          </div>
        </Link>
        <AddCart
          shoppingList={ shoppingList }
          name={ title }
          price={ price }
          id={ id }
        />
      </div>

    );
  }
}

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  shoppingList: PropTypes.func.isRequired,
};

export default Product;
