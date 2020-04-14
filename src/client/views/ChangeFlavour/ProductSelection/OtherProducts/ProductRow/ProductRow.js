import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Tooltip } from 'antd';
import { CheckCircleFilled } from '@ant-design/icons';
import cx from 'classnames';
import memoize from 'fast-memoize';
import { ProductCategoryLabels } from 'client/views/ChangeFlavour/constants';
import { getFlexAttr, formatCurrency } from 'client/utils';
import RevenueChart from './RevenueChart';
import styles from './ProductRow.module.css';

const ProductRow = memoize(
  ({
    id,
    isSelected,
    average_sales: vends,
    cannibalised,
    capacity,
    display_category: category,
    product_name: name,
    price,
    net_gain: netGain,
  }) => {
    const renderNetGain = () => {
      if (!netGain || Number.isNaN(netGain)) {
        return '-';
      }

      return (
        <span
          className={cx(styles['net-gain'], {
            [styles['is-positive']]: netGain > 0,
          })}
        >
          {formatCurrency(netGain, true)}
        </span>
      );
    };

    return (
      <>
        <Row
          className={cx(styles.wrapper, {
            [styles['is-selected']]: isSelected,
          })}
        >
          {/* TODO: figure out better way of setting flex dynamically */}
          <Col
            className={cx(styles.category, {
              [styles['is-selected']]: isSelected,
            })}
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
              {!!capacity && (
                <Tooltip title="Currently Stocked">
                  <CheckCircleFilled className={styles.stocked} />
                </Tooltip>
              )}
            </div>
          </Col>
          {/* TODO: extract helpers for common calculation logic */}
          <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
            {formatCurrency(price / 100)}
          </Col>
          <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
            {vends.toFixed(2)}
          </Col>
          <Col className={styles['is-aligned']} style={getFlexAttr(3)}>
            {formatCurrency(vends * (price / 100))}
          </Col>
          <Col className={styles['is-aligned']} style={getFlexAttr(2)}>
            {renderNetGain()}
          </Col>
        </Row>
        {cannibalised && isSelected && (
          <RevenueChart data={cannibalised} netGain={netGain} />
        )}
      </>
    );
  }
);

ProductRow.propTypes = {
  average_sales: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  // TODO: extract common prop type (shared with revenue chart)
  cannibalised: PropTypes.shape({
    addedProductRevenue: PropTypes.number.isRequired,
    replacedProductRevenue: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        revenue: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
  display_category: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  net_gain: PropTypes.number,
};

export default ProductRow;
