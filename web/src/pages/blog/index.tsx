import dynamic from 'next/dynamic';
import Link from 'next/link';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import { formatDate } from '@utils/datetime-utils';
import { getAllPostsForHome } from '@lib/api';
import Layout from '@components/Layout';
const SocialBar = dynamic(() => import('@components/SocialBar'));
const ToTop = dynamic(() => import('@components/ToTop'));
import { Breakpoints } from '@styles/breakpoints';
import SoundCloudIframe from '@components/SoundCloudIframe';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '85vh',
  paddingTop: 70,
  gap: 30,
  '> ul': {
    padding: 10,
  },
  [Breakpoints.LargerThan1000]: {
    minHeight: '100vh',
  },
});

const Title = styled('h2')({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: 'var(--colors-primary)',
  overflowWrap: 'break-word',
});

const PostItem = styled('li')({
  listStyle: 'none',
  padding: 10,
  '> a': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const PostTitle = styled('div')({
  color: 'var(--colors-primary)',
  marginRight: '2rem',
});

const Blog = ({ allPosts }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });

  return (
    <Layout title="Chi Vong | Blog">
      <Container>
        <Title>Blog</Title>
        <ul ref={ref}>
          {allPosts.map((post, index) => {
            return (
              <PostItem key={index}>
                <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
                  <a>
                    <PostTitle>{post.title}</PostTitle>
                    <div>{formatDate(post.publishedDate)}</div>
                  </a>
                </Link>
              </PostItem>
            );
          })}
        </ul>
      </Container>
      <SocialBar />
      {inView && <ToTop inView={inView} />}
      <SoundCloudIframe />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 60 * 60,
  };
}

export default Blog;
