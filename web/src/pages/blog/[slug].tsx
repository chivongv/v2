import { FC } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled/macro';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { BlogPost } from 'types/blogpost';
import { Breakpoints } from '@styles/breakpoints';
import { getClient, overlayDrafts, sanityClient } from '@lib/sanity.server';
import { postQuery, postSlugsQuery } from '@lib/queries';
import { PortableText, usePreviewSubscription } from '@lib/sanity';
const AlertPreview = dynamic(() => import('@components/AlertPreview'));
const Layout = dynamic(() => import('@components/Layout'));
const NotFound = dynamic(() => import('@pages/404'));
const ToTop = dynamic(() => import('@components/ToTop'));
const SocialBar = dynamic(() => import('@components/SocialBar'));
import { formatDate } from '@utils/datetime-utils';
import { BackTo, Time } from '@components/sharedPosts';

const Container = styled('article')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  paddingTop: 70,
  minHeight: '100vh',
});

const PostTitle = styled('h1')({
  color: 'var(--colors-primary)',
  margin: '0 10px 10px',
});

const ImageWrapper = styled('div')({
  width: '100%',
  maxWidth: 800,
  margin: '0 auto',
  img: {
    borderRadius: 2,
  },
});

const PostBody = styled('section')({
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
  paddingBottom: '1.5rem',
  marginBottom: 10,
  fontSize: '1.25rem',
  position: 'relative',
  'h1,h2,h3,h4,h5,h6,p': {
    marginTop: '1.2em',
    marginBottom: '1.2em',
    ':first-of-type': {
      marginTop: 0,
    },
  },
  p: {
    lineHeight: 1.7,
    code: {
      color: 'var(--colors-tag)',
    },
  },
  a: {
    color: 'var(--colors-primary)',
  },
  ul: {
    paddingLeft: '1em',
    marginTop: '-0.6em',
    marginBottom: '1em',
    li: {
      paddingTop: '0.25em',
    },
    'li:first-of-type': {
      paddingTop: 0,
    },
  },
  ol: {
    paddingLeft: '1em',
    li: {
      paddingTop: '0.5em',
    },
  },
  blockquote: {
    borderLeft: '5px solid var(--colors-primary)',
    background: 'hsla(221.9, 88.8%, 64.9%, 0.15)',
    marginBottom: '1em',
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
  [Breakpoints.Medium]: {
    marginBottom: 15,
  },
});

const PostLinks = styled('div')({
  textAlign: 'right',
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
                {post.title} | {post.author?.name}
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
                <PortableText blocks={post.body} />
                <Link href="/blog" passHref>
                  <BackTo>
                    <FaLongArrowAltLeft /> Back to blog
                  </BackTo>
                </Link>
                <Time title="Last updated date">
                  {formatDate(post.updatedDate)}
                </Time>
              </ContentWrapper>
              {preview && <AlertPreview redirect="blog" />}
              <PostLinks>
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
              </PostLinks>
            </PostBody>
          </>
        )}
        <SocialBar />
        <ToTop />
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
    paths: paths?.map((slug) => ({ params: { slug } })) || [],
    fallback: true,
  };
}

export default Post;
