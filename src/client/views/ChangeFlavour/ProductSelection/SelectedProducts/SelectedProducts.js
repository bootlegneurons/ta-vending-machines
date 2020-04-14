import React from 'react';
import PropTypes from 'prop-types';
import { ColumnLabels, ItemList } from 'client/components';
import {
  PRODUCT_KEY,
  productPropType,
} from 'client/views/ChangeFlavour/constants';
import { Result, Spin } from 'antd';
import ProductCard from './ProductCard';

const SelectedProducts = ({
  isError,
  isLoading,
  items,
  onChange,
  value: currentProduct,
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

  return (
    <Spin spinning={isLoading || !items}>
      <ColumnLabels labels={[{ label: 'Selected Products', columns: 24 }]} />
      <ItemList
        itemComponent={ProductCard}
        items={items}
        itemId={PRODUCT_KEY}
        onSelect={id => onChange(id)}
        value={currentProduct}
      />
    </Spin>
  );
};

SelectedProducts.propTypes = {
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: productPropType,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectedProducts;
