import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ id, isSelected }) => (
  <p>{`${isSelected ? ' > ' : ''} ${id}`}</p>
);

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default ProductCard;
