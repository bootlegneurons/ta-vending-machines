import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './ProductCard.module.css';

const ProductCard = ({
  id,
  isSelected,
  average_sales: vends,
  product_name: name,
  price,
}) => (
  <div className={cx(styles.wrapper, { [styles['is-selected']]: isSelected })}>
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
        <dd>${price / 100}</dd>
        <dt>Vends:</dt>
        <dd>{vends}</dd>
        <dt>Revenue:</dt>
        <dd>${vends * price}</dd>
        <dt>Cols:</dt>
        <dd />
      </dl>
    </div>
  </div>
);

ProductCard.propTypes = {
  average_sales: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  product_name: PropTypes.string.isRequired,
};

export default ProductCard;
