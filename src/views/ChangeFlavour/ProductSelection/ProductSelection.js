import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import SelectedProducts from './SelectedProducts/SelectedProducts';
import OtherProducts from './OtherProducts';
import styles from './ProductSelection.module.css';

// TODO: replace hardcoded data with provided data source
// TODO: ensure not overfetching, transform props when fetching
const currentProducts = [
  {
    display_category: 0,
    product_code: '133129',
    product_name: '16Z CN 24LS_MON NRG',
    type_name: 'BEVERAGE',
    average_sales: 1.24275,
    price: 275,
    subsidy_price: 0,
    expected_price: 275,
    revenue_bar_width: 28.2876883513,
    is_known: true,
    is_predicted: false,
  },
  {
    display_category: 0,
    product_code: '114756',
    product_name: '20Z PT 24LS_FANTA ORG',
    type_name: 'BEVERAGE',
    average_sales: 2.05903,
    price: 175,
    subsidy_price: 0,
    expected_price: 175,
    revenue_bar_width: 28.1207961115,
    is_known: true,
    is_predicted: false,
  },
];

const ProductSelection = ({ onProductSelected, search, value }) => {
  const [currentProduct, setCurrentProduct] = useState('');

  // TODO: on currentProduct or search change, refetch other products
  // TODO: debounce fn call ? prevent race conditions
  useEffect(() => {}, [currentProduct, search]);

  // TODO: refactor to eliminate classNames. TwoColumnContentArea ? columns prop for Content?
  return (
    <Row className={styles.wrapper}>
      <Col className={styles['left-col']} flex="0 1 auto">
        <SelectedProducts
          items={currentProducts}
          onChange={id => setCurrentProduct(id)}
        />
      </Col>
      <Col flex="1 0 auto">
        <OtherProducts
          items={[]}
          onChange={onProductSelected}
          selectedId={null}
          value={value}
        />
      </Col>
    </Row>
  );
};

ProductSelection.propTypes = {
  onProductSelected: PropTypes.func,
  search: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ProductSelection;
