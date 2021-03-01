import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';
import Head from 'next/head';
import BlockContent from '@sanity/block-content-to-react';

import Layout from '@components/Layout';
import { getAllPostsWithSlug, getPost } from '@lib/api';
import { formatDate } from '@utils/datetime-utils';
import { Breakpoints } from '@styles/breakpoints';
import { options, serializers } from '@lib/sanity';
import NotFound from '@pages/404';
import SocialBar from '@components/SocialBar';

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

const Post = ({ post }) => {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <NotFound />;
  }

  const postURL = `https://chivongv.se/blog/${post?.slug}`;

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
                <BlockContent
                  blocks={post.body}
                  dataset={options.dataset}
                  projectId={options.projectId}
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
  const data = await getPost(params.slug, preview);
  return {
    props: {
      preview,
      post: data?.post || null,
    },
    revalidate: 10,
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
