import styled from '@emotion/styled/macro';
import Layout from '@components/Layout';
import SoundCloudIframe from '@components/SoundCloudIframe';
import SocialBar from '@components/SocialBar';

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
