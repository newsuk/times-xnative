// @flow

import React from "react";
import { ArticleProvider } from "@times-components/provider";
import withClient from "@thetimes/with-client";
import Article from "@times-components/article";

type ArticleProps = {
  articleId: string,
  analyticsStream: (data: any) => void
};

const ArticleDetailsPage = ({ articleId, analyticsStream }: ArticleProps) => (
  <ArticleProvider id={articleId} debounceTimeMs={100}>
    {({ article, isLoading, error }) => (
      <Article
        article={article}
        isLoading={isLoading}
        error={error}
        analyticsStream={analyticsStream}
      />
    )}
  </ArticleProvider>
);

export default withClient(ArticleDetailsPage);
