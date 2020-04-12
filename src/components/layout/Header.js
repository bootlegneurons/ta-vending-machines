import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col, Divider } from 'antd';
import styles from './Header.module.css';

const Header = ({ title }) => (
  <Layout.Header className={styles.wrapper}>
    {title}
    <Divider />
    <Row>
      <Col flex={1}>Search input</Col>
      <Col flex={4}>Legend</Col>
    </Row>
  </Layout.Header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
