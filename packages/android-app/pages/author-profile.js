// @flow

import React from "react";
import PropTypes from "prop-types";
import { NativeModules } from "react-native";
import AuthorPage from "@thetimes/author-profile";

const config = NativeModules.ReactConfig;
const { track } = NativeModules.ReactAnalytics;
const { fetch } = NativeModules.NativeFetch;
const {
  onArticlePress,
  onTwitterLinkPress
} = NativeModules.AuthorProfileEvents;

const AuthorPageView = AuthorPage(config)(fetch);

const View = ({ authorSlug }: { authorSlug: string }) => (
  <AuthorPageView
    authorSlug={authorSlug}
    onTwitterLinkPress={onTwitterLinkPress}
    onArticlePress={onArticlePress}
    analyticsStream={track}
  />
);

export default View;
