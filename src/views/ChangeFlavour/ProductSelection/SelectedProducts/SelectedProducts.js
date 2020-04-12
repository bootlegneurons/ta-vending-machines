import React from 'react';
import PropTypes from 'prop-types';
import ItemList from 'components/ItemList/ItemList';
import ProductCard from './ProductCard';
import ColumnLabels from '../ColumnLabels';

const ITEM_KEY = 'product_code';

const SelectedProducts = ({ items, onChange }) => (
  <>
    <ColumnLabels labels={[{ label: 'Selected Products', columns: 24 }]} />
    <ItemList
      itemComponent={ProductCard}
      items={items}
      itemId={ITEM_KEY}
      onSelect={id => onChange(id)}
    />
  </>
);

SelectedProducts.propTypes = {
  // TODO: extract prop-type for product data
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectedProducts;
