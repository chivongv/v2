import Link from 'next/link';

import Layout from '../../components/Layout';
import { getAllPostsForHome } from '../../lib/api';

const Blog = ({ allPosts }) => {
  const heroPost = allPosts[0];

  return (
    <Layout title="Blog">
      <div>
        {heroPost && (
          <>
            <h3>{heroPost.title}</h3>
            <small>{heroPost.publishedDate}</small>
            <div>{heroPost.excerpt}</div>
            <Link href="/blog/[slug]" as={`/blog/${heroPost.slug}`}>
              <a>Read more</a>
            </Link>
          </>
        )}
      </div>
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
