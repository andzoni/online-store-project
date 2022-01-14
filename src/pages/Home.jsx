import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CategoriesList from '../components/CategoriesList';
import ProductList from '../components/ProductList';
import '../App.css';

// coment

class Home extends React.Component {
  render() {
    const {
      categories,
      products,
      inputValue,
      category,
      shopping,
      cart,
      handleChangeCategory,
      onChange,
      shoppingList } = this.props;
    return (
      <div className="container">
        <header>
          <h2>Online Store</h2>
        </header>
        <CategoriesList
          categories={ categories }
          handleChangeCategory={ handleChangeCategory }
        />
        <main>
          <form className='mainForm'>
            <label
              type="text"
              data-testid="home-initial-message"
              htmlFor="home-initial-message"
            >
              Digite algum termo de pesquisa ou escolha uma categoria.
              <input
                type="text"
                id="home-initial-message"
                data-testid="query-input"
                onChange={ onChange }
              />
            </label>
            <button type="button" data-testid="query-button">Pesquisa</button>
            <Link
              to={ { pathname: '/cart' } }
              type="button"
              id="cart-button"
              data-testid="shopping-cart-button"
            >
              Cart
            </Link>
          </form>
          {/* <ShoppingCart shopping={ shopping } cart={ cart } /> */}
          <hr />
          <ProductList
            products={ products.results }
            category={ category }
            inputValue={ inputValue }
            shoppingList={ shoppingList }
            shopping={ shopping }
            cart={ cart }
          />
        </main>
        <footer>
          <h4>Contacts</h4>
        </footer>
      </div>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  inputValue: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  shoppingList: PropTypes.func.isRequired,
  shopping: PropTypes.arrayOf(Object).isRequired,
  cart: PropTypes.bool.isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Home;
