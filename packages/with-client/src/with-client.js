// @flow

import * as React from "react";
import type { ComponentType } from "react";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { fragmentMatcher } from "@times-components/utils/graphql";

interface Config {
  graphqlEndPoint: string;
}

type FetchFunction = (
  input: string | Request,
  init?: RequestOptions
) => Promise<string>;

const withClient = <P: {}>(WrappedComponent: ComponentType<P>) => ({
  graphqlEndPoint
}: Config) => (fetch: FetchFunction): ComponentType<P> => {
  const link = createHttpLink({
    uri: graphqlEndPoint,
    fetch: (uri, opts) => {
      return fetch(uri, opts).then(responseBody => new Response(responseBody));
    }
  });

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache({
      fragmentMatcher
    })
  });

  return (props: P) => (
    <ApolloProvider client={client}>
      <WrappedComponent {...props} />
    </ApolloProvider>
  );
};

export default withClient;
