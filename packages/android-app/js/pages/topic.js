// @flow

import React from "react";
import { NativeModules } from "react-native";
import TopicPage from "@thetimes/topic";

const config = NativeModules.ReactConfig;
const { track } = NativeModules.ReactAnalytics;
const { fetch } = NativeModules.NativeFetch;
const { onArticlePress } = NativeModules.TopicEvents;

// const TopicPageView = TopicPage(config)(fetch);

const View = ({ topicSlug }: { topicSlug: string }) => (
  <TopicPage
    topicSlug={topicSlug}
    onArticlePress={onArticlePress}
    analyticsStream={track}
  />
);

export default View;
