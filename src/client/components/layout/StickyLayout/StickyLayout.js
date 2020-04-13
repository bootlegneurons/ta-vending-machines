import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from '../Header/Header';
import styles from './StickyLayout.module.css';

const StickyLayout = ({ children, title }) => (
  <Layout className={styles.wrapper}>
    <Header>
      <h2>{title}</h2>
    </Header>
    {children}
  </Layout>
);

StickyLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

export default StickyLayout;
