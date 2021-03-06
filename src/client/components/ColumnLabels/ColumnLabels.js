import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { getFlexAttr } from 'client/utils';
import styles from './ColumnLabels.module.css';

/** Creates a row of text labels aligned to a 24 col grid */
const ColumnLabels = ({ labels = [] }) => (
  <Row className={styles.wrapper}>
    {labels.map(({ label, offset = 0, columns = 1 }) => (
      <Col key={label} offset={offset} style={getFlexAttr(columns)}>
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
