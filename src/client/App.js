import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import ChangeFlavour from 'client/views/ChangeFlavour/ChangeFlavour';

const GRAPHQL_ENDPOINT = 'http://localhost:4000/graphql';
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
});

// TODO: implement routing & proper app layout once new app views become known
const App = () => (
  <ApolloProvider client={client}>
    <ChangeFlavour />
  </ApolloProvider>
);

export default App;
