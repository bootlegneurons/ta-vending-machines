const {
  productUpdateData: PRODUCTS,
  productCapacity: CAPACITIES,
  currentProducts: CURRENT,
} = require('./data');

const getProductCapacity = id => CAPACITIES[id] || 0;

const getProductById = id => {
  const result = PRODUCTS.find(product => product.product_code === id);
  return result || false;
};

const getRevenue = ({ average_sales: averageSales = 0, price = 0 }) =>
  (averageSales * price) / 100;

const getCannibalisedRevenue = ({
  addedProductRevenue = 0,
  replacedProductRevenue = 0,
  products = [],
} = {}) => {
  const productRevenueReducer = (total, current) => total + current.revenue;
  const productRevenue = products.reduce(productRevenueReducer, 0);

  return addedProductRevenue + replacedProductRevenue + productRevenue;
};

// Calculate Revenue, capacity and Net Gain & add to each product
const formatProduct = (product, selectedId) => {
  const capacity = getProductCapacity(product.product_code);
  const revenue = getRevenue(product);
  // TODO: add dummy 'cols' data to source data, for now append default
  const cols = 0;
  const newProduct = {
    ...product,
    capacity,
    revenue,
    cols,
  };

  // Calculate net_gain and add to product, if a product is selected
  if (selectedId) {
    const selected = getProductById(selectedId);
    if (selected) {
      const selectedRevenue = getRevenue(selected);
      const cannibalisedRevenue = getCannibalisedRevenue(product.cannibalised);
      newProduct.net_gain = selectedRevenue - revenue - cannibalisedRevenue;
    }
  }

  return newProduct;
};

const formatProducts = (products, selectedId) =>
  products.map(product => formatProduct(product, selectedId));

const getProducts = ({
  selectedId,
  requestedIds = [],
  excludeSelected = false,
  search = '',
} = {}) => {
  let formattedProducts = formatProducts(PRODUCTS, selectedId);

  if (Array.isArray(requestedIds) && requestedIds.length > 0) {
    const filterByRequested = product =>
      requestedIds.includes(product.product_code);

    formattedProducts = formattedProducts.filter(filterByRequested);
  }

  if (search) {
    const filterBySearch = product => {
      const productName = product.product_name.toLowerCase();
      return productName.includes(search.toLowerCase());
    };

    formattedProducts = formattedProducts.filter(filterBySearch);
  }

  if (selectedId && excludeSelected) {
    const filterBySelected = product => product.product_code !== selectedId;

    formattedProducts = formattedProducts.filter(filterBySelected);
  }

  return formattedProducts;
};

const getCurrentProducts = () => getProducts({ requestedIds: CURRENT });

const productsApi = {
  getCurrentProducts,
  getProducts,
  getProductById,
  getProductCapacity,
};

module.exports = productsApi;
