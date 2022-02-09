import { graphql } from 'graphql';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { GraphQLResponse, Network, Environment, Store, RecordSource } from 'relay-runtime';
import { fetchGraphQL } from '../relay';

// Relay is not prescriptive about how GraphQL requests are made.
// This is an example showing how to request GraphQL data.
// You should fill this in with how to make requests to your GraphQL
// API of choice.

export function createServerNetwork() {
  return Network.create(fetchGraphQL);
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}