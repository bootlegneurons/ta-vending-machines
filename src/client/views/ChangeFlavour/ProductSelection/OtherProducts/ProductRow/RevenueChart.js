import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import { HorizontalBar } from 'react-chartjs-2';
import styles from './RevenueChart.module.css';

const ChartColor = {
  RED: 'rgb(246, 93, 62, 1)',
  BLUE: 'rgb(24, 144, 255, 1)',
  GREEN: 'rgb(130, 204, 31, 1)',
  GREY: 'rgb(153, 153, 153, 1)',
  LIGHT_GREY: 'rgb(228, 230, 234, 1)',
  BLACK: 'rgb(53, 53, 53, 1)',
};

const getCannibalisedTotal = products =>
  products.reduce((total, product) => total + product.revenue, 0);

const getCollapsedChartData = (
  { addedProductRevenue, replacedProductRevenue, products },
  netGain
) => {
  const cannibalisedTotal = getCannibalisedTotal(products);
  const replacedBarStart =
    addedProductRevenue - Math.abs(replacedProductRevenue);
  const cannibalisedBarStart = replacedBarStart - Math.abs(cannibalisedTotal);
  const chartData = {
    labels: [
      'Added Product',
      'Replaced Product(s)',
      'Cannibalised Product(s)',
      'Net Gain',
    ],
    datasets: [
      {
        data: [
          addedProductRevenue,
          [replacedBarStart, addedProductRevenue],
          [cannibalisedBarStart, replacedBarStart],
          netGain,
        ],
        backgroundColor: [
          ChartColor.GREEN,
          ChartColor.RED,
          ChartColor.RED,
          ChartColor.BLUE,
        ],
        borderWidth: 0,
      },
    ],
  };
  return chartData;
};

// TODO: implement expanded view
const getExpandedChartData = () => {
  const chartData = {};
  return chartData;
};

const chartOptions = {
  maintainAspectRatio: false,
  layout: { padding: 16 },
  legend: { display: false },
  scales: {
    yAxes: [
      {
        gridLines: {
          display: false,
          padding: 4,
        },
        ticks: { lineHeight: 1.5, fontColor: ChartColor.BLACK },
      },
    ],
    xAxes: [
      {
        position: 'top',
        gridLines: {
          color: ChartColor.LIGHT_GREY,
          borderDash: [4, 8],
          drawBorder: false,
        },
      },
    ],
  },
};

const RevenueChart = ({ data, netGain }) => {
  // eslint-disable-next-line no-unused-vars
  const [isNetExpanded, setIsNetExpanded] = useState(false);
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const newData = isNetExpanded
      ? getExpandedChartData(data, netGain)
      : getCollapsedChartData(data, netGain);
    setChartData(newData);
  }, [data, netGain, isNetExpanded]);

  return (
    <Row className={styles.wrapper}>
      <Col className={styles.chart}>
        <HorizontalBar data={chartData} width={600} options={chartOptions} />
      </Col>
    </Row>
  );
};

RevenueChart.propTypes = {
  data: PropTypes.shape({
    addedProductRevenue: PropTypes.number.isRequired,
    replacedProductRevenue: PropTypes.number.isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        revenue: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
  netGain: PropTypes.number.isRequired,
};

export default RevenueChart;
