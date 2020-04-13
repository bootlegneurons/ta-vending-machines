const path = require('path');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} = require('merge-graphql-schemas');
const dataSources = require('./dataSources');

// Types & resolvers stitching from /graphql directory & subfolders
const typeDefs = mergeTypes(
  fileLoader(path.join(__dirname, './**/*.graphql')),
  { all: true }
);
const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, './**/resolvers.js'))
);
const schema = makeExecutableSchema({ typeDefs, resolvers });

const gqlServer = new ApolloServer({
  schema,
  dataSources,
});

module.exports = gqlServer;
