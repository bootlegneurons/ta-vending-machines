module.exports = {
  Query: {
    selectedProducts: async (_, args, { dataSources: { productsApi } }) =>
      Promise.resolve(productsApi.getCurrentProducts()),

    otherProducts: async (_, args, { dataSources: { productsApi } }) =>
      Promise.resolve(
        productsApi.getProducts({
          search: args.search,
          selectedId: args.excludeId,
          excludeSelected: true,
        })
      ),
  },
};
