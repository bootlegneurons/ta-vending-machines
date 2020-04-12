import React from 'react';
import { Layout } from 'antd';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import ProductSelection from './ProductSelection/ProductSelection';

const ChangeFlavour = () => (
  <Layout>
    <Header title="Change Flavour" />
    <ProductSelection />
    <Footer />
  </Layout>
);

export default ChangeFlavour;
