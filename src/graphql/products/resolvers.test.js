const {
  Query: { selectedProducts, otherProducts },
} = require('./resolvers');

const MOCK_PRODUCTS = [{ id: 1 }];
const mockGetCurrentProducts = jest.fn(() => MOCK_PRODUCTS);
const mockGetProducts = jest.fn(() => MOCK_PRODUCTS);
const productsApi = {
  getCurrentProducts: mockGetCurrentProducts,
  getProducts: mockGetProducts,
};

describe('products resolvers', () => {
  describe('selectedProducts', () => {
    it('should fetch selectedProducts from productsApi and resolve a promise with the result', () => {
      const result = selectedProducts(null, null, {
        dataSources: { productsApi },
      });
      expect(mockGetCurrentProducts).toHaveBeenCalled();
      expect(result).resolves.toEqual(MOCK_PRODUCTS);
    });
  });

  describe('otherProducts', () => {
    it('should fetch products from productsApi and resolve a promise with the result', () => {
      const args = { search: 'coke', excludeId: '2' };
      const result = otherProducts(null, args, {
        dataSources: { productsApi },
      });
      expect(mockGetProducts).toHaveBeenCalledWith({
        search: args.search,
        selectedId: args.excludeId,
        excludeSelected: true,
      });
      expect(result).resolves.toEqual(MOCK_PRODUCTS);
    });
  });
});
