import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import styles from './ColumnLabels.module.css';

const ColumnLabels = ({ labels = [] }) => (
  <Row className={styles.wrapper}>
    {labels.map(({ label, offset = 0, columns = 1 }) => (
      <Col key={label} offset={offset} flex={columns}>
        <span className={styles.label}>{label}</span>
      </Col>
    ))}
  </Row>
);

ColumnLabels.propTypes = {
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      offset: PropTypes.number,
      columns: PropTypes.number,
    })
  ),
};

export default ColumnLabels;
