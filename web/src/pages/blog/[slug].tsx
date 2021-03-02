import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '@components/Layout';
import { postQuery, postSlugsQuery } from '@lib/queries';
import { getClient, overlayDrafts, sanityClient } from '@lib/sanity.server';
import { Breakpoints } from '@styles/breakpoints';
import { sanityConfig } from '@lib/config';
import { serializers, usePreviewSubscription } from '@lib/sanity';
import NotFound from '@pages/404';
import SocialBar from '@components/SocialBar';
import { BlogPost } from 'types/blogpost';

const Container = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  paddingTop: 70,
  minHeight: '100vh',
});

const PostTitle = styled('h3')({
  color: 'var(--colors-primary)',
  marginBottom: 10,
});

const PostInfo = styled('div')({
  marginBottom: 15,
  fontSize: 12,
  color: 'var(--colors-tag)',
  padding: '0 10px',
});

const ImageWrapper = styled('div')({
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
});

const PostBody = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'initial',
  padding: '15px',
  width: '100%',
  maxWidth: 800,
  height: '100%',
  margin: '0 auto',
});

const ContentWrapper = styled('div')({
  flex: 1,
  p: {
    marginBottom: '1.5em',
    lineHeight: 1.4,
  },
  a: {
    color: 'var(--colors-primary)',
  },
  blockquote: {
    borderLeft: '5px solid var(--colors-primary)',
    background: 'hsla(221.9, 88.8%, 64.9%, 0.15)',
    margin: '0 0 1.5em',
    padding: '1em 1.5em',
    borderRadius: 4,
    lineHeight: 1.5,
    letterSpacing: 0.5,
  },
  figure: {
    maxWidth: 600,
    margin: '1.5em auto',
    '> img': {
      width: '100%',
      height: '100%',
    },
  },
  [Breakpoints.TabletOrLarger]: {
    marginBottom: 15,
  },
});

const PostLink = styled('a')({
  color: 'var(--colors-primary)',
});

type Props = {
  data: {
    post: BlogPost;
    morePosts: BlogPost;
  };
  preview: boolean;
};

const Post: FC<Props> = ({ data, preview }) => {
  const router = useRouter();
  const slug = data?.post?.slug;
  const { data: mdata } = usePreviewSubscription(postQuery, {
    params: { slug },
    initialData: data,
    enabled: Boolean(preview && slug),
  });

  if (!mdata || (!router.isFallback && !slug)) {
    return <NotFound />;
  }

  const { post, morePosts } = mdata;

  const postURL = `https://chivongv.se/blog/${slug}`;

  return (
    <Layout
      title={
        router.isFallback ? 'Loading...' : `${post.title} | Chi Vong's blog`
      }
    >
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <Head>
              <title>
                {post.title} | {post.author.name}
              </title>
            </Head>
            <PostTitle>{post.title}</PostTitle>
            {post.coverImage && (
              <ImageWrapper>
                <Image src={post.coverImage} width="800" height="600" />
              </ImageWrapper>
            )}
            <PostBody>
              <ContentWrapper>
                <BlockContent
                  blocks={post.body}
                  dataset={sanityConfig.dataset}
                  projectId={sanityConfig.projectId}
                  serializers={serializers}
                />
              </ContentWrapper>
              <div>
                <PostLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://twitter.com/search?q=${encodeURIComponent(
                    postURL,
                  )}`}
                >
                  Discuss on Twitter
                </PostLink>
                {` • `}
                <PostLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://twitter.com/intent/tweet/?text=Great post by @chivongv ${encodeURIComponent(
                    postURL,
                  )}`}
                >
                  Tweet about this post
                </PostLink>
              </div>
            </PostBody>
          </>
        )}
        <SocialBar />
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const { post, morePosts } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });

  return {
    props: {
      preview,
      data: {
        post,
        morePosts: overlayDrafts(morePosts),
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })) || [],
    fallback: true,
  };
}

export default Post;
