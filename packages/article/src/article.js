// @flow

import React from "react";
import { ArticleProvider } from "@times-components/provider";
import withClient from "@thetimes/with-client";
import Article from "@times-components/article";
import { PlatformAdConfig, adTargetConfig } from "./ad-targeting-config";
import { VideoInfo } from "./video-info";
import { LinkInfo } from "./link-info";

type ArticleProps = {
  articleId: string,
  analyticsStream: (data: any) => void,
  onArticlePress: (url: string) => void,
  onAuthorPress: (slug: string) => void,
  onVideoPress: (info: VideoInfo) => void,
  onLinkPress: (url: string) => void,
  onTopicPress: (url: string) => void,
  platformAdConfig: PlatformAdConfig
};

const ArticleDetailsPage = ({
  articleId,
  analyticsStream,
  platformAdConfig,
  onArticlePress,
  onAuthorPress,
  onVideoPress,
  onLinkPress,
  onTopicPress
}: ArticleProps) => (
    <ArticleProvider id={articleId} debounceTimeMs={100}>
      {({ article, isLoading, error }) => {
        const adConfig =
          isLoading || error ? {} : adTargetConfig(platformAdConfig, article);

        return (
          <Article
            article={article}
            isLoading={isLoading}
            error={error}
            analyticsStream={analyticsStream}
            adConfig={adConfig}
            onRelatedArticlePress={(event, extras) => onArticlePress(extras.url)}
            onAuthorPress={(event, extras) => onAuthorPress(extras.slug)}
            onVideoPress={(event, info) => onVideoPress(info)}
            onLinkPress={(event, linkInfo: LinkInfo) => {
              if (linkInfo.type == "article") {
                onArticlePress(linkInfo.url);
              } else if (linkInfo.type == "topic") {
                onTopicPress(linkInfo.url);
              } else {
                onLinkPress(linkInfo.url);
              }
            }}
          />
        );
      }}
    </ArticleProvider>
  );

export default withClient(ArticleDetailsPage);
