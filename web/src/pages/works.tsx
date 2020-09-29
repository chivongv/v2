import styled from '@emotion/styled';
import Layout from '../components/Layout';

const Container = styled('div')({
  display: 'flex',
  minHeight: '85vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (min-width: 1000px)': {
    minHeight: '100vh',
  },
});

const Works = () => {
  return (
    <Layout title="Works">
      <Container>in Works</Container>
    </Layout>
  );
};

export default Works;
