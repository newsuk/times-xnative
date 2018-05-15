// @flow

import React from "react";
import PropTypes from "prop-types";
import { NativeModules } from "react-native";
import ArticlePage from "@thetimes/article";
import { platformAdConfig } from "../ad-config/platform-ad-config";

const {
  onRelatedArticlePress,
  onLinkPress,
  onAuthorPress,
  onVideoPress,
  onTopicPress
} = NativeModules.NativeModuleArticleActions;
const config = NativeModules.NativeModuleReactConfig;
const { fetch } = NativeModules.NativeModuleFetch;
const { track } = NativeModules.NativeModuleAnalytics;

const ArticlePageView = ArticlePage(config)(fetch);

const Article = ({ articleId }: { articleId: string }) => (
  <ArticlePageView
    articleId={articleId}
    analyticsStream={track}
    onArticlePress={url => onRelatedArticlePress(url)}
    onLinkPress={url => onLinkPress(url)}
    onAuthorPress={slug => onAuthorPress(slug)}
    onVideoPress={extras => onVideoPress(extras)}
    onTopicPress={url => onTopicPress(url)}
    platformAdConfig={platformAdConfig({
      sectionId: "9e51e2a0-fadf-11e7-9a34-94e1b34681c3",
      sectionName: "News",
      articlePositionInSlot: 3
    })}
  />
);

export default Article;
