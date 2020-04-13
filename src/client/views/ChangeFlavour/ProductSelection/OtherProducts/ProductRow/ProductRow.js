import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import cx from 'classnames';
import { ProductCategoryLabels } from 'client/views/ChangeFlavour/constants';
import styles from './ProductRow.module.css';

// TODO: refactor to extract common util (used by ColumnLabels)
const getFlexAttr = columns => ({
  flex: `0 1 ${(100.0 * (columns / 24)).toFixed(3)}%`,
});

const ProductRow = ({
  id,
  isSelected,
  average_sales: vends,
  display_category: category,
  product_name: name,
  price,
  net_gain: netGain,
}) => {
  const renderNetGain = () => {
    if (!netGain || Number.isNaN(netGain)) {
      return '-';
    }

    const isPositive = netGain > 0;
    const netGainFormatted = `${isPositive ? '+' : '-'}$${Math.abs(
      netGain
    ).toFixed(2)}`;

    return (
      <span
        className={cx(styles['net-gain'], {
          [styles['is-positive']]: isPositive,
        })}
      >
        {netGainFormatted}
      </span>
    );
  };

  return (
    <Row
      className={cx(styles.wrapper, { [styles['is-selected']]: isSelected })}
    >
      {/* TODO: figure out better way of setting flex dynamically */}
      <Col
        className={cx(styles.category, { [styles['is-selected']]: isSelected })}
        style={getFlexAttr(1)}
      >
        <div
          className={
            styles[`is-${ProductCategoryLabels[category].toLowerCase()}`]
          }
        />
      </Col>
      <Col style={getFlexAttr(12)}>
        <div className={styles.product}>
          <div className={styles.thumbnail}>
            <img
              alt={`Product ${name}`}
              src={`https://cdn.vendinganalytics.com/reyes-ccb/tb/${id}.png`}
            />
          </div>
          <div className={styles.details}>
            <h3>{name}</h3>
            <h4>{id}</h4>
          </div>
        </div>
      </Col>
      {/* TODO: extract helpers for common calculation logic */}
      <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
        ${(price / 100).toFixed(2)}
      </Col>
      <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
        {vends.toFixed(2)}
      </Col>
      <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
        ${(vends * price).toFixed(2)}
      </Col>
      <Col className={styles['is-aligned']} style={getFlexAttr(2)}>
        {renderNetGain()}
      </Col>
    </Row>
  );
};

ProductRow.propTypes = {
  average_sales: PropTypes.number.isRequired,
  display_category: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  net_gain: PropTypes.number,
};

export default ProductRow;
