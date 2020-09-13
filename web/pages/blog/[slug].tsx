import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import styled from '@emotion/styled';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import { CMS_NAME } from '../../lib/constants';
import Navbar from '../../components/Navbar';
import Layout from '../../components/Layout';
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api';

const Container = styled('div')({
  marginBottom: 10,
});

const PostBody = styled('div')({
  maxWidth: 1200,
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
          <h2>Loading…</h2>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | {post.author.name}
                </title>
              </Head>
              <h2>{post.title}</h2>
              <small>{post.publishedDate}</small>
              {`by ${post.author.name}`}
              <PostBody>
                <BlockContent blocks={post.body} />
              </PostBody>
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
