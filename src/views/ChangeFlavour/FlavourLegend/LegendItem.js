import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Col } from 'antd';
import styles from './LegendItem.module.css';

const LegendItem = ({ color, label }) => (
  <Col>
    <span className={cx(styles.item, styles[`is-${color}`])}>{label}</span>
  </Col>
);

LegendItem.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LegendItem;
