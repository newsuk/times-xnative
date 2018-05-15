// @flow

import React from "react";
import { NativeModules } from "react-native";
import TopicPage from "@thetimes/topic";

const { onArticlePress } = NativeModules.NativeModuleTopicActions;
const config = NativeModules.NativeModuleReactConfig;
const { track } = NativeModules.NativeModuleAnalytics;

const View = ({ topicSlug }: { topicSlug: string }) => (
  <TopicPage
    topicSlug={topicSlug}
    onArticlePress={onArticlePress}
    analyticsStream={track}
  />
);

export default View;
