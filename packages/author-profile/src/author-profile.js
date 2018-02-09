// @flow

import * as React from "react";
import PropTypes from "prop-types";
import AuthorProfile from "@times-components/author-profile";
import { AuthorProfileProvider } from "@times-components/provider";
import withClient from "@thetimes/with-client";

type AuthorProfileProps = {
  authorSlug: string,
  // TODO: add types for these
  onTwitterLinkPress: (extras: any) => void,
  onArticlePress: (extras: any) => void,
  analyticsStream: (data: any) => void
};

const AuthorProfilePage = ({
  authorSlug,
  onTwitterLinkPress,
  onArticlePress,
  analyticsStream
}: AuthorProfileProps) => (
  <AuthorProfileProvider
    articleImageRatio="4:3"
    slug={authorSlug}
    page={1}
    pageSize={20}
    debounceTimeMs={250}
  >
    {({
      author,
      isLoading,
      error,
      page,
      pageSize,
      onNext,
      onPrev,
      refetch
    }) => (
      <AuthorProfile
        author={author}
        slug={authorSlug}
        isLoading={isLoading}
        analyticsStream={analyticsStream}
        error={error}
        page={page}
        pageSize={pageSize}
        refetch={refetch}
        onTwitterLinkPress={(event, extras) => onTwitterLinkPress(extras)}
        onArticlePress={(event, extras) => onArticlePress(extras)}
        onNext={onNext}
        onPrev={onPrev}
      />
    )}
  </AuthorProfileProvider>
);

export default withClient(AuthorProfilePage);
