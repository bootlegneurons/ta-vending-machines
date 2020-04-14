import PropTypes from 'prop-types';

export const PRODUCT_KEY = 'product_code';

export const ProductCategory = {
  RECOMMENDED: 'RECOMMENDED',
  OTHER: 'OTHER',
  CAUTION: 'CAUTION',
};

export const ProductCategoryLabels = [
  ProductCategory.RECOMMENDED,
  ProductCategory.OTHER,
  ProductCategory.CAUTION,
];

export const cannibalisedPropType = PropTypes.shape({
  addedProductRevenue: PropTypes.number.isRequired,
  replacedProductRevenue: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      revenue: PropTypes.number.isRequired,
    })
  ).isRequired,
});

export const productPropType = PropTypes.arrayOf(
  PropTypes.shape({
    display_category: PropTypes.number,
    product_code: PropTypes.string.isRequired,
    product_name: PropTypes.string,
    average_sales: PropTypes.number,
    price: PropTypes.number,
    cannibalised: cannibalisedPropType,
    net_gain: PropTypes.number,
    capacity: PropTypes.number,
    revenue: PropTypes.number,
    cols: PropTypes.number,
  })
);
