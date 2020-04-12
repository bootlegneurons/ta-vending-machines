import React, { useState } from 'react';
import { Row, Col, Input, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { StickyLayout, Header, Footer, Content } from 'components/layout';
import ProductSelection from './ProductSelection/ProductSelection';
import FlavourLegend from './FlavourLegend/FlavourLegend';

// TODO: Refactor Header/Footer content into new layout wrapper components
const ChangeFlavour = () => {
  const [search, setSearch] = useState('');
  const [newProductId, setNewProductId] = useState('');

  return (
    <StickyLayout title="Change Flavour">
      <Header>
        <Row gutter={16} justify="space-between">
          <Col flex={1}>
            <Input
              onChange={({ target: { value } }) => setSearch(value)}
              placeholder="Search"
              suffix={
                <Tooltip title="Filter results by product name">
                  <QuestionCircleOutlined />
                </Tooltip>
              }
              value={search}
            />
          </Col>
          <Col flex={4}>
            <FlavourLegend />
          </Col>
        </Row>
      </Header>
      <Content>
        <ProductSelection
          onProductSelected={id => setNewProductId(id)}
          search={search}
          value={newProductId}
        />
      </Content>
      <Footer>
        <Row gutter={8} justify="end">
          <Col>
            <Button size="large">Cancel</Button>
          </Col>
          <Col>
            <Button disabled={!!newProductId} size="large" type="primary">
              Save
            </Button>
          </Col>
        </Row>
      </Footer>
    </StickyLayout>
  );
};

export default ChangeFlavour;
