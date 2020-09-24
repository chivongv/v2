import styled from '@emotion/styled';
import Link from 'next/link';

import Layout from '../../components/Layout';
import { getAllPostsForHome } from '../../lib/api';
import { ExtendedTheme } from '../../styles/theme';
import { formatDate } from '../../utils/datetime-utils';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: 70,
  gap: 30,
  '> ul': {
    padding: 10,
  },
});

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
        <h2>Blog</h2>
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
