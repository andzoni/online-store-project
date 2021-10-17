import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { data, data: { id }, handleChange } = this.props;
    return (
      <label htmlFor={ id }>
        <br />
        <input
          type="radio"
          onChange={ handleChange }
          name="category"
          id={ id }
          value={ id }
          data-testid="category"
        />
        { data.name }
      </label>
    );
  }
}

Category.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Category;
