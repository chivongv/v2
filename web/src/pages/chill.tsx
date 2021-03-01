import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import Layout from '@components/Layout';
const SoundCloudIframe = dynamic(() => import('@components/SoundCloudIframe'));
const SocialBar = dynamic(() => import('@components/SocialBar'));

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const Chill = () => {
  return (
    <Layout title="Chill | Chi Vong">
      <Container>
        <SoundCloudIframe />
      </Container>
      <SocialBar />
    </Layout>
  );
};

export default Chill;
