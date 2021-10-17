import React from 'react';
import PropTypes from 'prop-types';

class ProductSpec extends React.Component {
  render() {
    const { data = [] } = this.props;
    return (
      <div>
        <ul>
          { data.map((spec) => (
            <li key={ spec.id }>
              { `${spec.name}: ${spec.value_name}` }
            </li>)) }
        </ul>
        <form>
          <fieldset>
            <legend>Avaliação:</legend>
            <h1>E-mail</h1>
            <input type="email" placeholder="nome@conta.com" />
            <h1>Avaliação</h1>

            {/* https://codepen.io/gabrielcarvalhogama/pen/edwajP */}

            <label htmlFor="nota1">
              <input type="radio" id="nota1" value="1" name="nota" />
              1
            </label>
            <label htmlFor="nota2">
              <input type="radio" id="nota2" value="2" name="nota" />
              2
            </label>
            <label htmlFor="nota3">
              <input type="radio" id="nota3" value="3" name="nota" />
              3
            </label>
            <label htmlFor="nota4">
              <input type="radio" id="nota4" value="4" name="nota" />
              4
            </label>
            <label htmlFor="nota5">
              <input type="radio" id="nota5" value="5" name="nota" />
              5
            </label>

            <textarea
              data-testid="product-detail-evaluation"
              name="avaliation"
              placeholder="Faça sua avaliação aqui"
              cols="40"
              rows="15"
            />
            <input type="submit" value="Enviar" />
          </fieldset>
        </form>
      </div>
    );
  }
}

ProductSpec.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default ProductSpec;
