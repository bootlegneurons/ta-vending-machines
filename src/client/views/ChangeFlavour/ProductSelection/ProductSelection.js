import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Result, Spin } from 'antd';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import {
  SELECTED_PRODUCTS_QUERY,
  OTHER_PRODUCTS_QUERY,
} from 'graphql/products/queries';
import SelectedProducts from './SelectedProducts/SelectedProducts';
import OtherProducts from './OtherProducts/OtherProducts';
import styles from './ProductSelection.module.css';

const ProductSelection = ({ onProductSelected, search, value: newProduct }) => {
  const [currentProduct, setCurrentProduct] = useState('');
  const {
    loading: selectedProductsLoading,
    error: selectedProductsError,
    data: selectedProductsData,
  } = useQuery(SELECTED_PRODUCTS_QUERY);
  const [
    getOtherProducts,
    {
      loading: otherProductsLoading,
      error: otherProductsError,
      data: otherProductsData,
    },
  ] = useLazyQuery(OTHER_PRODUCTS_QUERY);

  // on currentProduct or search change, refetch other products
  useEffect(() => {
    if (!currentProduct) {
      return;
    }

    const fetchProducts = async () => {
      await getOtherProducts({
        variables: {
          search,
          excludeId: currentProduct,
        },
      });
    };

    fetchProducts();
  }, [getOtherProducts, currentProduct, search]);

  const renderSelectedProducts = () => {
    if (selectedProductsError) {
      return (
        <Result
          status="error"
          title="Error fetching products"
          subTitle="Please refresh to try again"
        />
      );
    }

    const items = selectedProductsData && selectedProductsData.selectedProducts;
    return (
      <Spin spinning={selectedProductsLoading || !selectedProductsData}>
        <SelectedProducts
          items={items || []}
          onChange={id => setCurrentProduct(id)}
          value={currentProduct}
        />
      </Spin>
    );
  };

  const renderOtherProducts = () => {
    if (!currentProduct) {
      return (
        <Result
          status="info"
          title="No product selected"
          subTitle="Please select a product from the list to the left"
        />
      );
    }

    if (otherProductsError) {
      return (
        <Result
          status="error"
          title="Error fetching products"
          subTitle="Please refresh to try again"
        />
      );
    }

    const items = otherProductsData && otherProductsData.otherProducts;
    return (
      <Spin spinning={otherProductsLoading || !otherProductsData}>
        <OtherProducts
          items={items || []}
          onChange={onProductSelected}
          value={newProduct}
        />
      </Spin>
    );
  };

  // TODO: refactor to eliminate classNames. TwoColumnContentArea ? columns prop for Content?
  return (
    <Row className={styles.wrapper}>
      <Col className={styles['left-col']} flex="0 1 auto">
        {renderSelectedProducts()}
      </Col>
      <Col flex="1 0 auto">{renderOtherProducts()}</Col>
    </Row>
  );
};

ProductSelection.propTypes = {
  onProductSelected: PropTypes.func,
  search: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProductSelection;
