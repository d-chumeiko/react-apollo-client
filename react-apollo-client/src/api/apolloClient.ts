import { ApolloClient, InMemoryCache } from '@apollo/client';

import { API_URL } from '../constants';

export const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || API_URL, // It is better to store APIs in .env files in real apps
  cache: new InMemoryCache(),
});
