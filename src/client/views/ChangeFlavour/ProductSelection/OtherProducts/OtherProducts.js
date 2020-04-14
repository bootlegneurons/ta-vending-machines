import React from 'react';
import PropTypes from 'prop-types';
import { ItemList, ColumnLabels } from 'client/components';
import {
  PRODUCT_KEY,
  productPropType,
} from 'client/views/ChangeFlavour/constants';
import { Result, Spin } from 'antd';
import ProductRow from './ProductRow/ProductRow';

const OtherProducts = ({
  isLoading,
  isError,
  isWaiting,
  items,
  onChange,
  value: newProduct,
}) => {
  if (isError) {
    return (
      <Result
        status="error"
        title="Error fetching products"
        subTitle="Please refresh to try again"
      />
    );
  }

  if (isWaiting) {
    return (
      <Result
        status="info"
        title="No product selected"
        subTitle="Please select a product from the list to the left"
      />
    );
  }

  return (
    <Spin spinning={isLoading || !items}>
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
    </Spin>
  );
};

OtherProducts.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  isWaiting: PropTypes.bool.isRequired,
  items: productPropType,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default OtherProducts;
