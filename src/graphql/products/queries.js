// eslint-disable-next-line prefer-destructuring
const gql = require('apollo-boost').gql;

// TODO: extract fragment for common product fields
const SELECTED_PRODUCTS_QUERY = gql`
  query selectedProducts {
    selectedProducts {
      product_code
      product_name
      price
      average_sales
      revenue
      cols
    }
  }
`;

const OTHER_PRODUCTS_QUERY = gql`
  query otherProducts($excludeId: String!, $search: String) {
    otherProducts(excludeId: $excludeId, search: $search) {
      product_code
      product_name
      price
      average_sales
      display_category
      cannibalised {
        addedProductRevenue
        replacedProductRevenue
        products {
          code
          name
          revenue
        }
      }
      capacity
      revenue
      net_gain
    }
  }
`;

module.exports = {
  SELECTED_PRODUCTS_QUERY,
  OTHER_PRODUCTS_QUERY,
};
