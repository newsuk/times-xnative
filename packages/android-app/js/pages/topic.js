// @flow

import React from "react";
import { NativeModules } from "react-native";
import TopicPage from "@thetimes/topic";

const { onArticlePress } = NativeModules.TopicEvents;
const config = NativeModules.ReactConfig;
const { fetch } = NativeModules.NativeFetch;
const { track } = NativeModules.ReactAnalytics;

const TopicPageView = TopicPage(config)(fetch);

const View = ({ topicSlug }: { topicSlug: string }) => (
  <TopicPageView
    topicSlug={topicSlug}
    onArticlePress={onArticlePress}
    analyticsStream={track}
  />
);

export default View;
