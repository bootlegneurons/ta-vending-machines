import React from 'react';
import PropTypes from 'prop-types';

// TODO: remove eslint-disable on next line
// eslint-disable-next-line no-unused-vars
const SelectedProducts = ({ items, onChange, value }) => (
  <div>
    Selected Products:{' '}
    {items.map(el => (
      <p>{el.product_code}</p>
    ))}
  </div>
);

SelectedProducts.propTypes = {
  // TODO: extract prop-type for product data
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedProducts;
