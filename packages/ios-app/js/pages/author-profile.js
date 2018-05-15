// @flow

import React from "react";
import PropTypes from "prop-types";
import { NativeModules } from "react-native";
import AuthorProfilePage from "@thetimes/author-profile";

const { onArticlePress } = NativeModules.NativeModuleArticleActions;
const { onTwitterLinkPress } = NativeModules.NativeModuleSocialActions;
const config = NativeModules.NativeModuleReactConfig;
const { fetch } = NativeModules.NativeModuleFetch;
const { track } = NativeModules.NativeModuleAnalytics;

const AuthorProfileView = AuthorProfilePage(config)(fetch);

const AuthorProfile = ({ authorSlug }: { authorSlug: string }) => (
  <AuthorProfileView
    authorSlug={authorSlug}
    onTwitterLinkPress={url => onTwitterLinkPress(url)}
    onArticlePress={url => onArticlePress(url)}
    analyticsStream={track}
  />
);

export default AuthorProfile;
