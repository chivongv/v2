import Link from 'next/link';
import styled from '@emotion/styled';

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

const Title = styled('h2')({
  fontSize: 'calc(1rem + 2.5vw)',
  lineHeight: 1.5,
  marginBottom: 20,
});

const Highlight = styled.span({
  color: 'var(--colors-primary)',
});

const SubTitle = styled('h3')({
  fontSize: 'calc(0.6rem + 0.8vw)',
  maxWidth: 800,
  width: '85vw',
  lineHeight: 1.3,
  textAlign: 'center',
});

const Anchor = styled('a')({
  marginTop: 15,
  backgroundColor: 'var(--colors-primary)',
  color: '#fff',
  position: 'relative',
  padding: '10px 15px',
  borderRadius: 4,
  '@media screen and (min-width: 594px)': {
    marginTop: 30,
  },
});

const Hero = () => {
  return (
    <Container>
      <Title>
        Hi, I'm <Highlight>Chi</Highlight>
      </Title>
      <SubTitle>Frontend Engineer</SubTitle>
      <Link href="/#works" passHref>
        <Anchor>Read more</Anchor>
      </Link>
    </Container>
  );
};

export default Hero;
