import React from 'react';
import PropTypes from 'prop-types';
import ItemList from 'components/ItemList/ItemList';
import { PRODUCT_KEY } from 'views/ChangeFlavour/constants';
import ProductCard from './ProductCard';
import ColumnLabels from '../ColumnLabels';

const SelectedProducts = ({ items, onChange, value: currentProduct }) => (
  <>
    <ColumnLabels labels={[{ label: 'Selected Products', columns: 24 }]} />
    <ItemList
      itemComponent={ProductCard}
      items={items}
      itemId={PRODUCT_KEY}
      onSelect={id => onChange(id)}
      value={currentProduct}
    />
  </>
);

SelectedProducts.propTypes = {
  // TODO: extract prop-type for product data
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedProducts;
