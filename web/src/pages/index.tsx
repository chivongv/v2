import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

import { Work } from 'types/work';
import { allWorksForHomeQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import Layout from '@components/Layout';
const Hero = dynamic(() => import('@sections/Hero'));
const ToTop = dynamic(() => import('@components/ToTop'));
const Works = dynamic(() => import('@sections/Works'));
const SocialBar = dynamic(() => import('@components/SocialBar'));

type Props = {
  works: Work[];
};

const Home = ({ works }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  return (
    <Layout title="Chi Vong | Software Engineer">
      <Hero />
      <Works works={works} />
      <div ref={ref}></div>
      <SocialBar />
      {inView && <ToTop inView={inView} />}
    </Layout>
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
