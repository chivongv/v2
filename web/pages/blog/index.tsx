import Link from 'next/link';

import Layout from '../../components/Layout';
import { getAllPostsForHome } from '../../lib/api';

const Blog = ({ allPosts }) => {
  return (
    <Layout title="Blog">
      {allPosts.map((post, index) => {
        return (
          <div key={index}>
            <h3>{post.title}</h3>
            <small>{post.publishedDate}</small>
            <div>{post.excerpt}</div>
            <Link href="/blog/[slug]" as={`/blog/${post.slug}`}>
              <a>Read more</a>
            </Link>
          </div>
        );
      })}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}

export default Blog;
