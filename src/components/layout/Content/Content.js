import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import ContentArea from '../StickyLayout/ContentArea';
import styles from './Content.module.css';

const Content = ({ children }) => (
  <Layout.Content className={styles.wrapper}>
    <ContentArea>{children}</ContentArea>
  </Layout.Content>
);

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
