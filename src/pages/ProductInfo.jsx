import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductSpec from '../components/ProductSpec';
import AddCartInfo from '../components/AddCartInfo';

class ProductInfo extends React.Component {
  constructor() {
    super();

    this.state = {
      productFound: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.findProduct = this.findProduct.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    // Maneira usando url
    // const { match: { params: { category, inputValue } } } = this.props;
    // if (category === undefined) {
    //   const products = await api.getProductsFromCategoryAndQuery(undefined, inputValue);
    //   this.findProduct(products.results);
    // }
    // if (inputValue === undefined) {
    //   const products = await api.getProductsFromCategoryAndQuery(category, undefined);
    //   this.findProduct(products.results);
    // }
    // const products = await api.getProductsFromCategoryAndQuery(category, inputValue);
    const { products: { results } } = this.props;
    this.findProduct(results);
  }

  findProduct(products) {
    const { match: { params: { id } } } = this.props;
    const productFound = products.find((product) => (product.id === id));
    this.setState({
      productFound,
    });
  }

  render() {
    const { productFound } = this.state;
    const { title, price, thumbnail, attributes } = productFound;
    const { shoppingList, match: { params: { id } } } = this.props;
    return (
      <div className="card3">
        <h1 data-testid="product-detail-name">{`${title} - R$${price}`}</h1>
        <img src={ thumbnail } alt={ title } />
        <ProductSpec data={ attributes } />
        <AddCartInfo
          shoppingList={ shoppingList }
          name={ title }
          price={ price }
          id={ id }
        />
        <Link
          to={ { pathname: '/cart' } }
          type="button"
          id="cart-button"
          data-testid="shopping-cart-button"
        >
          Cart
        </Link>
      </div>
    );
  }
}

ProductInfo.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  shoppingList: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ProductInfo;
