import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ContentArea from '../StickyLayout/ContentArea';
import styles from './Footer.module.css';

const Footer = ({ children }) => (
  <Layout.Footer className={styles.wrapper}>
    <ContentArea>{children}</ContentArea>
  </Layout.Footer>
);

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
