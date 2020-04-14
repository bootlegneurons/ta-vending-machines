import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import memoize from 'fast-memoize';
import { formatCurrency } from 'client/utils';
import styles from './ProductCard.module.css';

const ProductCard = memoize(
  ({
    id,
    isSelected,
    cols,
    average_sales: vends,
    product_name: name,
    price,
    revenue,
  }) => (
    <div
      className={cx(styles.wrapper, { [styles['is-selected']]: isSelected })}
    >
      <div className={styles.thumbnail}>
        <img
          alt={`Product ${name}`}
          src={`https://cdn.vendinganalytics.com/reyes-ccb/tb/${id}.png`}
        />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <h4>{id}</h4>
        <dl>
          <dt>Price:</dt>
          <dd>{formatCurrency(price / 100)}</dd>
          <dt>Vends:</dt>
          <dd>{vends.toFixed(2)}</dd>
          <dt>Revenue:</dt>
          <dd>{formatCurrency(revenue, true)}</dd>
          <dt>Cols:</dt>
          <dd>{cols}/10</dd>
        </dl>
      </div>
    </div>
  )
);

ProductCard.propTypes = {
  average_sales: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
  revenue: PropTypes.number.isRequired,
};

export default ProductCard;
