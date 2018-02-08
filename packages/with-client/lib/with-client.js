"use strict";

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _apolloClient = require("apollo-client");

var _apolloLinkHttp = require("apollo-link-http");

var _apolloCacheInmemory = require("apollo-cache-inmemory");

var _reactApollo = require("react-apollo");

var _reactNative = require("react-native");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const withClient = config => fetch => WrappedComponent => {
    const fragmentMatcher = new _apolloCacheInmemory.IntrospectionFragmentMatcher({
        introspectionQueryResultData: {
            __schema: {
                types: [{
                    kind: "UNION",
                    name: "Media",
                    possibleTypes: [{
                        name: "Image"
                    }, {
                        name: "Video"
                    }]
                }]
            }
        }
    });

    const link = (0, _apolloLinkHttp.createHttpLink)({
        uri: config.graphqlEndPoint,
        fetch: (uri, opts) => {
            return fetch(uri, opts).then(responseBody => new Response(responseBody));
        }
    });

    const client = new _apolloClient.ApolloClient({
        link,
        cache: new _apolloCacheInmemory.InMemoryCache({
            fragmentMatcher
        })
    });

    return props => React.createElement(
        _reactApollo.ApolloProvider,
        { client: client },
        React.createElement(WrappedComponent, props)
    );
};