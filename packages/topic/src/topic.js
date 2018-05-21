// @flow

import React from "react";
import Topic from "@times-components/topic";
import withClient from "@thetimes/with-client";

type TopicProps = {
  topicSlug: string,
  onArticlePress: (url: string) => void,
  analyticsStream: (data: any) => void
};

const TopicPage = ({
  topicSlug,
  onArticlePress,
  analyticsStream
}: TopicProps) => (
  <Topic
    topic={{
      name: "Chelsea",
      description: "A swanky part of town."
    }}
    slug={"chelsea"}
    onArticlePress={(event, extras) => onArticlePress(extras.url)}
    analyticsStream={analyticsStream}
    page={1}
    pageSize={5}
  />
);

export default withClient(TopicPage);
