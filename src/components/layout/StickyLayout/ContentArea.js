import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContentArea.module.css';

const ContentArea = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

ContentArea.propTypes = {
  children: PropTypes.node,
};

export default ContentArea;
