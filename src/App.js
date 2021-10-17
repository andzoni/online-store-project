import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import Home from './pages/Home';
import ProductInfo from './pages/ProductInfo';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      products: [],
      shopping: [],
      cart: false,
      category: undefined,
      inputValue: undefined,
    };
    this.categories = this.categories.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.shoppingList = this.shoppingList.bind(this);
  }

  componentDidMount() {
    this.categories();
  }

  handleChange(event) {
    const { category } = this.state;
    if (category !== '') {
      this.getProduct(category, event.target.value);
      this.setState({
        inputValue: event.target.value,
      });
      return;
    }
    this.getProduct(undefined, event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
  }

  handleChangeCategory(event) {
    const { inputValue } = this.state;
    if (inputValue !== '') {
      this.getProduct(event.target.value, inputValue);
      this.setState({
        category: event.target.value,
      });
      return;
    }
    this.getProduct(event.target.value, undefined);
    this.setState({
      category: event.target.value,
    });
  }

  async getProduct(category, inputValue) {
    const products = await getProductsFromCategoryAndQuery(category, inputValue);
    this.setState({
      products,
    });
  }

  shoppingList(name, id, price) {
    const obj = {
      name,
      id,
      price,
    };
    this.setState((prevState) => ({
      shopping: [...prevState.shopping, obj],
      cart: true,
    }));
  }

  async categories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { category, products, shopping, cart, categories, inputValue } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/details/:id"
            render={ (props) => (<ProductInfo
              { ...props }
              shopping={ shopping }
              cart={ cart }
              products={ products }
              shoppingList={ this.shoppingList }
            />) }
          />
          <Route
            path="/cart"
            render={ () => (<ShoppingCart
              shopping={ shopping }
              cart={ cart }
            />) }
          />
          <Route
            exact
            path="/"
            render={ () => (<Home
              category={ category }
              products={ products }
              shopping={ shopping }
              cart={ cart }
              categories={ categories }
              inputValue={ inputValue }
              shoppingList={ this.shoppingList }
              onChange={ this.handleChange }
              handleChangeCategory={ this.handleChangeCategory }
            />) }
          />
          <Route
            path="/checkout"
            render={ () => (<Checkout
              shopping={ shopping }
              cart={ cart }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
