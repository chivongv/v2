import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

import { allWorksForHomeQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import Hero from '@sections/Hero';
import Layout from '@components/Layout';
const ToTop = dynamic(() => import('@components/ToTop'));
import Works from '@sections/Works';
const SocialBar = dynamic(() => import('@components/SocialBar'));

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
      <Layout title="Chi Vong | Frontend Engineer">
        <Hero />
        <Works works={works} ref={ref} />
        <SocialBar />
        {inView && <ToTop inView={inView} />}
      </Layout>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const works = overlayDrafts(
    await getClient(preview).fetch(allWorksForHomeQuery),
  );
  return {
    props: { works, preview },
    revalidate: 60,
  };
}

export default Home;
