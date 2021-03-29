import dynamic from 'next/dynamic';

import { Work } from 'types/work';
import { allWorksForHomeQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import Layout from '@components/Layout';
const Hero = dynamic(() => import('@sections/Hero'));
const Works = dynamic(() => import('@sections/Works'));
const SocialBar = dynamic(() => import('@components/SocialBar'));

type Props = {
  works: Work[];
};

const Home = ({ works }: Props) => {
  return (
    <Layout title="Chi Vong | Software Engineer">
      <Hero />
      <Works works={works} />
      <SocialBar />
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
