import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import styled from '@emotion/styled';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '../../components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';
import { formatDate } from '../../utils/datetime-utils';

const Container = styled('div')({
  textAlign: 'center',
  paddingTop: 70,
  minHeight: '100vh',
});

const PostTitle = styled('h3')({
  color: 'var(--colors-primary)',
  marginBottom: 15,
});

const PostInfo = styled('div')({
  marginBottom: 25,
});

const ContentWrapper = styled('div')({});

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
            <article>
              <Head>
                <title>
                  {post.title} | {post.author.name}
                </title>
              </Head>
              <PostTitle>{post.title}</PostTitle>
              <PostInfo>
                {`${formatDate(post.publishedDate)} by ${post.author.name}`}
              </PostInfo>
              <ContentWrapper>
                <BlockContent blocks={post.body} />
              </ContentWrapper>
            </article>
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
