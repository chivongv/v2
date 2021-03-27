import styled from '@emotion/styled/macro';

const Container = styled('footer')({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Footer = () => {
  return (
    <Container>
      © {new Date().getFullYear()} Built with &#9829; by Chi Vong
    </Container>
  );
};

export default Footer;
