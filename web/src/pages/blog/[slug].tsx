import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Image from 'next/image';
import styled from '@emotion/styled';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { formatDate } from '../../utils/datetime-utils';
import { Breakpoints } from '../../styles/breakpoints';

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
  '> a': {
    margin: '20px 0',
    display: 'inline-block',
    color: 'var(--colors-text)',
  },
});

const ContentWrapper = styled('div')({
  flex: 1,
  p: {
    marginBottom: 10,
  },
  a: {
    color: 'var(--colors-primary)',
  },
  [Breakpoints.LargerThan1000]: {
    marginBottom: 15,
  },
});

const Post = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={router.isFallback ? 'Loading...' : post.title}>
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
            <PostInfo>
              {`Published on ${formatDate(post.publishedDate)} by ${
                post.author.name
              }.`}
              {post.updatedDate &&
                ` Last updated ${formatDate(post.updatedDate, 'datetime')}.`}
            </PostInfo>
            {post.coverImage && (
              <ImageWrapper>
                <Image src={post.coverImage} width="800" height="600" />
              </ImageWrapper>
            )}
            <PostBody>
              <ContentWrapper>
                <BlockContent blocks={post.body} />
              </ContentWrapper>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={`https://twitter.com/search?q=${encodeURIComponent(
                  'https://chivongv.se/blog/' + post.slug,
                )}`}
              >
                Discuss on Twitter
              </a>
            </PostBody>
          </>
        )}
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
      morePosts: data?.morePosts || null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths:
      allPosts?.map((post) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Post;
