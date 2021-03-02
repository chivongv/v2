import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import { postsIndexQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import Layout from '@components/Layout';
const SocialBar = dynamic(() => import('@components/SocialBar'));
const ToTop = dynamic(() => import('@components/ToTop'));
import { Breakpoints } from '@styles/breakpoints';
import BlogPostCard from '@components/cards/BlogPostCard';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '85vh',
  paddingTop: 70,
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

const PostList = styled('div')({
  margin: '40px auto 15px',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 20,
  [Breakpoints.TabletOrLarger]: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
  },
});

const Blog = ({ allPosts }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });

  return (
    <Layout title="Chi Vong | Blog">
      <Container>
        <Title>Blog</Title>
        <PostList ref={ref}>
          {allPosts.map((post, index) => {
            return <BlogPostCard key={index} data={post} />;
          })}
        </PostList>
      </Container>
      <SocialBar />
      {inView && <ToTop inView={inView} />}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = overlayDrafts(
    await getClient(preview).fetch(postsIndexQuery),
  );

  return {
    props: { allPosts, preview },
    revalidate: 60 * 60,
  };
}

export default Blog;
