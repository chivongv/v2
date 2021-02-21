import { useInView } from 'react-intersection-observer';

import { getAllWorksForHome } from '../lib/api';
import Hero from '../sections/Hero';
import Layout from '../components/Layout';
import SocialBar from '../components/SocialBar';
import ToTop from '../components/ToTop';
import Works from '../sections/Works';

type Work = {
  _id: string;
  demo: string;
  excerpt: string;
  source: string;
  tags: string[];
  title: string;
};

type Props = {
  works: Work[];
};

const Home = ({ works }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <div>
      <Layout title="Frontend Engineer">
        <Hero />
        <SocialBar />
        <Works works={works} ref={ref} />
        <ToTop inView={inView} />
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
