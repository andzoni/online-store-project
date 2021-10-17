import React from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import '../index.css';

class CategoriesList extends React.Component {
  render() {
    const { categories, handleChangeCategory } = this.props;
    return (
      <aside className="aolado">
        <form>
          {categories
            .map((category) => (
              <Category
                key={ category.id }
                handleChange={ handleChangeCategory }
                data={ category }
              />
            ))}
        </form>
      </aside>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  handleChangeCategory: PropTypes.func.isRequired,
};

export default CategoriesList;

// categories
//             .map((categorie) => (
//               <li
//                 data-testid="category"
//                 key={ categorie.id }
//               >
//                 { categorie.name }
//               </li>))
