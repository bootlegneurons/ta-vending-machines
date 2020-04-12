import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ContentArea from '../StickyLayout/ContentArea';
import styles from './Header.module.css';

const Header = ({ children }) => (
  <Layout.Header className={styles.wrapper}>
    <ContentArea>{children}</ContentArea>
  </Layout.Header>
);

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
