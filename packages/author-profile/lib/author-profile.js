"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _authorProfile = require("@times-components/author-profile");

var _authorProfile2 = _interopRequireDefault(_authorProfile);

var _provider = require("@times-components/provider");

var _withClient = require("@thetimes/with-client");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

const AuthorProfilePage = ({ authorSlug, onTwitterLinkPress, onArticlePress, analyticsStream }) => React.createElement(
  _provider.AuthorProfileProvider,
  {
    articleImageRatio: "4:3",
    slug: authorSlug,
    page: 1,
    pageSize: 20,
    debounceTimeMs: 250
  },
  ({ author, isLoading, error, page, pageSize, onNext, onPrev, refetch }) => React.createElement(_authorProfile2.default, {
    author: author,
    slug: authorSlug,
    isLoading: isLoading,
    analyticsStream: analyticsStream,
    error: error,
    page: page,
    pageSize: pageSize,
    refetch: refetch,
    onTwitterLinkPress: (event, extras) => onTwitterLinkPress(extras),
    onArticlePress: (event, extras) => onArticlePress(extras),
    onNext: onNext,
    onPrev: onPrev
  })
);

exports.default = (0, _withClient.withClient)(AuthorProfilePage);