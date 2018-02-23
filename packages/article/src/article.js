// @flow

import React from "react"
import { ArticleProvider } from "@times-components/provider"
import withClient from "@thetimes/with-client";
import Article from "@times-components/article"

const ArticleDetailsPage = ({ articleId }) => (
  <ArticleProvider id={articleId} debounceTimeMs={100}>
    {({ article, isLoading, error }) => (
      <Article
        article={article}
        isLoading={isLoading}
        error={error}
        analyticsStream={() => { }}
      />
    )}
  </ArticleProvider>
)

export default withClient(ArticleDetailsPage)
