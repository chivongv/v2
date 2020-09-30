import styled from '@emotion/styled';
import Link from 'next/link';

import Layout from '../../components/Layout';
import SocialBar from '../../components/SocialBar';
import { getAllPostsForHome } from '../../lib/api';
import { ExtendedTheme } from '../../styles/theme';
import { formatDate } from '../../utils/datetime-utils';

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

const Title = styled('h2')<{ theme: ExtendedTheme }>(({ theme }) => ({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: theme.colors.primary,
}));

const PostItem = styled('li')({
  listStyle: 'none',
  padding: 10,
  '> a': {
    display: 'flex',
  },
});

const PostTitle = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  color: theme.colors.blue,
  marginRight: '2rem',
}));

const Blog = ({ allPosts }) => {
  return (
    <Layout title="Blog">
      <Container>
        <Title>Blog</Title>
        <ul>
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
