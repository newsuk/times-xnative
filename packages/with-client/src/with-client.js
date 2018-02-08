// @flow

import * as React from "react";
import type { ComponentType } from "react";
import { ApolloClient } from "apollo-client"
import { createHttpLink } from "apollo-link-http"
import { InMemoryCache, IntrospectionFragmentMatcher } from "apollo-cache-inmemory"
import { ApolloProvider } from "react-apollo"

interface Config {
    graphqlEndPoint: string
};

type FetchFunction = (input: string | Request, init?: RequestOptions) => Promise<string>;

const withClient = <P: {}>({graphqlEndPoint}: Config) => (fetch: FetchFunction) => (WrappedComponent: ComponentType<P>): ComponentType<P> => {
    const fragmentMatcher = new IntrospectionFragmentMatcher({
        introspectionQueryResultData: {
            __schema: {
                types: [
                    {
                        kind: "UNION",
                        name: "Media",
                        possibleTypes: [
                            {
                                name: "Image"
                            },
                            {
                                name: "Video"
                            }
                        ]
                    }
                ]
            }
        }
    });

    const link = createHttpLink({
        uri: graphqlEndPoint,
        fetch: (uri, opts) => {
            return fetch(uri, opts)
                .then(responseBody => new Response(responseBody))
        }
    });

    const client = new ApolloClient({
        link,
        cache: new InMemoryCache({
            fragmentMatcher
        }),
    });

    return (props: P) => (
        <ApolloProvider client={client}>
            <WrappedComponent {...props} />
        </ApolloProvider>
    );
}

export default withClient;
