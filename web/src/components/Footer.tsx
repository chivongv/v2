import styled from '@emotion/styled';

const Container = styled('footer')({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '2.5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Footer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Footer;
