// @flow

import React from "react";
import Topic from "@times-components/topic";

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
    name={"Animals"}
    description={
      "Animals are multicellular eukaryotic organisms that form the biological kingdom Animalia. With few  exceptions, animals consume organic materials."
    }
  />
);

export default TopicPage;
