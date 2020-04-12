import React from 'react';
import { Row } from 'antd';
import LegendItem from './LegendItem';

const FlavourLegend = () => (
  <Row gutter={16} justify="end">
    <LegendItem color="green" label="Recommended Flavours" />
    <LegendItem color="orange" label="Other Flavours" />
    <LegendItem color="red" label="Caution Flavours" />
  </Row>
);

export default FlavourLegend;
