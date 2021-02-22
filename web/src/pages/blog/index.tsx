import styled from '@emotion/styled';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

import { formatDate } from '../../utils/datetime-utils';
import { getAllPostsForHome } from '../../lib/api';
import Layout from '../../components/Layout';
import SocialBar from '../../components/SocialBar';
import ToTop from '../../components/ToTop';

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
  '@media screen and (min-width: 1000px)': {
    minHeight: '100vh',
  },
});

const Title = styled('h2')({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: 'var(--colors-primary)',
});

const PostItem = styled('li')({
  listStyle: 'none',
  padding: 10,
  '> a': {
    display: 'flex',
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
    <Layout title="Blog">
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
      <ToTop inView={inView} />
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
    revalidate: 1,
  };
}

export default Blog;
