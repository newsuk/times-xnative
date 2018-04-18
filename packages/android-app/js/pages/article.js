// @flow

import React from "react";
import PropTypes from "prop-types";
import { NativeModules } from "react-native";
import ArticlePage from "@thetimes/article";

const config = NativeModules.ReactConfig;
const { fetch } = NativeModules.NativeFetch;
const { track } = NativeModules.ReactAnalytics;
const {
  onArticlePress,
  onAuthorPress,
  onLinkPress
} = NativeModules.ArticleEvents;

const ArticlePageView = ArticlePage(config)(fetch);

const platformAdConfig = {
  adUnit: "d.thetimes.co.uk",
  networkId: "25436805",
  testMode: "",
  sectionId: "",
  sectionName: "",
  articlePositionInSlot: 0,
  appVersion: "",
  operatingSystem: "",
  operatingSystemVersion: "",
  cookieEid: "",
  cookieAcsTnl: "",
  cookieIamTgt: "",
  deviceId: "",
  deviceIdHash: "",
  environment: "",
  isLoggedIn: true,
  platform: "mobile"
};

const View = ({ articleId }: { articleId: string }) => (
  <ArticlePageView
    articleId={articleId}
    analyticsStream={track}
    onArticlePress={onArticlePress}
    onAuthorPress={onAuthorPress}
    onLinkPress={onLinkPress}
    platformAdConfig={platformAdConfig}
  />
);

export default View;
