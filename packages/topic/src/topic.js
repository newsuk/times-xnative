// @flow

import React from "react";
import { Text } from "react-native";

type TopicProps = {
  topicSlug: string,
  onArticlePress: (url: string) => void,
  analyticsStream: (data: any) => void
};

const TopicPage = ({
  topicSlug,
  onArticlePress,
  analyticsStream
}: TopicProps) => <Text>Hello {topicSlug}</Text>;

export default TopicPage;
