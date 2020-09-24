import Link from 'next/link';
import styled from '@emotion/styled';

import { ExtendedTheme } from '../styles/theme';

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

const Title = styled('h2')<{ theme: ExtendedTheme }>(({ theme }) => ({
  fontSize: 'calc(1rem + 2.5vw)',
  lineHeight: 1.5,
  marginBottom: 20,
  '.hi': {
    color: theme.colors.hello,
  },
}));

const SubTitle = styled('h3')<{ theme: ExtendedTheme }>(({ theme }) => ({
  fontSize: 'calc(0.6rem + 0.8vw)',
  maxWidth: 800,
  width: '85vw',
  lineHeight: 1.3,
  '.highlight': {
    color: theme.colors.accent,
  },
}));

const Anchor = styled('a')<{ theme: ExtendedTheme }>(({ theme }) => ({
  marginTop: 30,
  backgroundColor: theme.colors.primary,
  color: '#fff',
  position: 'relative',
  padding: '10px 15px',
  borderRadius: 4,
  '@media screen and (max-width: 594px)': {
    marginTop: 15,
  },
}));

const Hero = () => {
  return (
    <Container>
      <Title>
        <span className="hi">Hi!</span> I'm{' '}
        <span className="highlight">Chi</span>
      </Title>
      <SubTitle>
        Welcome to my portfolio!{' '}
        <span className="highlight">Frontend Developer</span> with the goal to
        become a Fullstack Developer and provide innovate solutions.
      </SubTitle>
      <Link href="/#works" passHref>
        <Anchor>Read more</Anchor>
      </Link>
    </Container>
  );
};

export default Hero;
