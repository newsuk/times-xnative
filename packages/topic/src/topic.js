// @flow

import React from "react";
import Topic from "@times-components/topic";
import { TopicProvider } from "@times-components/provider";
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
  <TopicProvider slug={topicSlug} page={1} pageSize={20} debounceTimeMs={250}>
    {({ topic, isLoading, error, page, pageSize, onNext, onPrev, refetch }) => (
      <Topic
        topic={topic}
        slug={topicSlug}
        isLoading={isLoading}
        error={error}
        onArticlePress={(event, extras) => onArticlePress(extras.url)}
        analyticsStream={analyticsStream}
        page={page}
        refetch={refetch}
        pageSize={pageSize}
      />
    )}
  </TopicProvider>
);

export default withClient(TopicPage);
