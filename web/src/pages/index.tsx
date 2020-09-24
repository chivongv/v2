import { getAllWorksForHome } from '../lib/api';
import Layout from '../components/Layout';
import Hero from '../sections/Hero';
import Works from '../sections/Works';

const Home = ({ works }) => {
  return (
    <div>
      <Layout title="Software Engineer">
        <Hero />
        <Works works={works} />
      </Layout>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const works = await getAllWorksForHome(preview);
  return {
    props: { works, preview },
    revalidate: 1,
  };
}

export default Home;
