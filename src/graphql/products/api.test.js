const getMockProduct = id => ({
  product_code: id,
  average_sales: 1,
  price: 500,
});
const MOCK_DATA = {
  productUpdateData: [
    getMockProduct('1'),
    getMockProduct('2'),
    getMockProduct('3'),
  ],
  productCapacity: { '1': 100 },
  currentProducts: ['1', '2'],
};
const getFormattedMockProduct = id => {
  const mockProduct = getMockProduct(id);
  return {
    ...mockProduct,
    capacity: MOCK_DATA.productCapacity[id] || 0,
    revenue: mockProduct.average_sales * mockProduct.price,
    cols: 0,
  };
};

const {
  getCurrentProducts,
  getProductById,
  getProductCapacity,
  // getProducts,
} = require('./api');

jest.mock('./data', () => MOCK_DATA);

describe('productsApi', () => {
  describe('getCurrentProducts', () => {
    const expected = [
      { ...getFormattedMockProduct('1') },
      { ...getFormattedMockProduct('2') },
    ];
    expect(getCurrentProducts()).toEqual(expected);
  });

  describe('getProductById', () => {
    it('should return the product with the provided id if it exists', () => {
      expect(getProductById('1')).toEqual(getMockProduct('1'));
    });

    it('should return false if no product with the provided id exists', () => {
      expect(getProductById('INVALID_ID')).toEqual(false);
    });
  });

  describe('getProductCapacity', () => {
    it('should return capacity for a product if it is present in data', () => {
      expect(getProductCapacity('1')).toEqual(100);
    });

    it('should return zero if no capacity in data for product', () => {
      expect(getProductCapacity('2')).toEqual(0);
    });
  });

  describe('getProducts', () => {
    // TODO: implement stubbed tests
    it('should return all products with capacity, calculated revenue and cols fields added, if no options provided', () => {});
    it('should return all products with added fields and net_gain, if a selectedId is provided', () => {});
    it('should not include selected product in results if selectedId provided and excludeSelected is true', () => {});
    it('should filter results by product name if search provided', () => {});
    it('should limit results to those with ids in provided requestedIds', () => {});
  });
});
