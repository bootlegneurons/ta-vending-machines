const express = require('express');
const cors = require('cors');
const gqlServer = require('../graphql');

const app = express();
app.use(cors());
gqlServer.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 4000 }, () =>
  // eslint-disable-next-line no-console
  console.log(
    `🚀 Server ready at http://localhost:4000${gqlServer.graphqlPath}`
  )
);
