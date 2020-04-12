import React from 'react';
import { Row, Col, Input, Tooltip, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { StickyLayout, Header, Footer, Content } from 'components/layout';
import ProductSelection from './ProductSelection/ProductSelection';
import FlavourLegend from './FlavourLegend/FlavourLegend';

// TODO: Refactor Header/Footer content into new layout wrapper components
const ChangeFlavour = () => (
  <StickyLayout title="Change Flavour">
    <Header>
      <Row gutter={16} justify="space-between">
        <Col>
          <Input
            placeholder="Search"
            suffix={
              <Tooltip title="Filter results by product name">
                <QuestionCircleOutlined />
              </Tooltip>
            }
          />
        </Col>
        <Col>
          <FlavourLegend />
        </Col>
      </Row>
    </Header>
    <Content>
      <ProductSelection />
    </Content>
    <Footer>
      <Row gutter={8} justify="end">
        <Col>
          <Button size="large">Cancel</Button>
        </Col>
        <Col>
          <Button size="large" type="primary">
            Save
          </Button>
        </Col>
      </Row>
    </Footer>
  </StickyLayout>
);

export default ChangeFlavour;
