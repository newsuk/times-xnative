// @flow

import React from "react";
import { ArticleProvider } from "@times-components/provider";
import withClient from "@thetimes/with-client";
import Article from "@times-components/article";
import { PlatformAdConfig, adTargetConfig } from "./ad-targeting-config";

type ArticleProps = {
  articleId: string,
  analyticsStream: (data: any) => void,
  onRelatedArticlePress: (extras: any) => void,
  onAuthorPress: (extras: any) => void,
  platformAdConfig: PlatformAdConfig
};

const ArticleDetailsPage = ({
  articleId,
  analyticsStream,
  onRelatedArticlePress,
  platformAdConfig,
  onAuthorPress
}: ArticleProps) => (
  <ArticleProvider id={articleId} debounceTimeMs={100}>
    {({ article, isLoading, error }) => {
      const adConfig = isLoading
        ? {}
        : adTargetConfig(platformAdConfig, article);

      return (
        <Article
          article={article}
          isLoading={isLoading}
          error={error}
          analyticsStream={analyticsStream}
          adConfig={adConfig}
          onRelatedArticlePress={onRelatedArticlePress}
          onAuthorPress={onAuthorPress}
        />
      );
    }}
  </ArticleProvider>
);

export default withClient(ArticleDetailsPage);
