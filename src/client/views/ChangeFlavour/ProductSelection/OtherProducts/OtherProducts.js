import React from 'react';
import PropTypes from 'prop-types';
import { ItemList, ColumnLabels } from 'client/components';
import { PRODUCT_KEY } from 'client/views/ChangeFlavour/constants';
import ProductRow from './ProductRow/ProductRow';

const OtherProducts = ({ items, onChange, value: newProduct }) => (
  <>
    <ColumnLabels
      labels={[
        { label: 'Product', offset: 1, columns: 12 },
        { label: 'Price', columns: 3 },
        { label: 'Vends', columns: 3 },
        { label: 'Revenue', columns: 3 },
        { label: 'Net Gain', columns: 2 },
      ]}
    />
    <ItemList
      itemComponent={ProductRow}
      items={items}
      itemId={PRODUCT_KEY}
      onSelect={id => onChange(id)}
      value={newProduct}
    />
  </>
);

OtherProducts.propTypes = {
  // TODO: extract prop-type for product data
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default OtherProducts;
