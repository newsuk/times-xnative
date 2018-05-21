// @flow

import React from "react";
import { NativeModules } from "react-native";
import TopicPage from "@thetimes/topic";

const { onArticlePress } = NativeModules.NativeModuleTopicActions;
const config = NativeModules.NativeModuleReactConfig;
const { fetch } = NativeModules.NativeModuleFetch;
const { track } = NativeModules.NativeModuleAnalytics;

const TopicPageView = TopicPage(config)(fetch);

const View = ({ topicSlug }: { topicSlug: string }) => (
  <TopicPageView
    topicSlug={topicSlug}
    onArticlePress={onArticlePress}
    analyticsStream={track}
  />
);

export default View;
