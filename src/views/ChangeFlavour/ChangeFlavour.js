import React from 'react';
import { Row, Col } from 'antd';
import { StickyLayout, Header, Footer, Content } from 'components/layout';
import ProductSelection from './ProductSelection/ProductSelection';

const ChangeFlavour = () => (
  <StickyLayout title="Change Flavour">
    <Header>
      <Row>
        <Col flex={1}>Search input</Col>
        <Col flex={4}>Legend</Col>
      </Row>
    </Header>
    <Content>
      <ProductSelection />
    </Content>
    <Footer>Footer placeholder</Footer>
  </StickyLayout>
);

export default ChangeFlavour;
