import Link from 'next/link';
import styled from '@emotion/styled';

import ToggleMode from './ToggleMode';

const Container = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100vw',
  margin: '0 auto',
  paddingRight: 20,
  height: 50,
  position: 'fixed',
  backgroundColor: 'var(--colors-nav-background)',
  boxShadow: `3px 3px 5px var(--colors-shadow)`,
  zIndex: 999,
});

const InnerContainer = styled('div')({
  width: '100%',
  maxWidth: 1000,
  margin: '0 auto',
  '> ul': {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'flex-end',
    '& li:not(:last-child)': {
      background: 'var(--colors-text)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginRight: 20,
      fontWeight: 600,
    },
  },
});

const Anchor = styled('a')({
  cursor: 'pointer',
  [':hover, :focus']: {
    borderBottom: `3px solid var(--colors-primary)`,
  },
});

const Navbar = () => {
  return (
    <Container>
      <InnerContainer>
        <ul>
          <li>
            <Link href="/" passHref>
              <Anchor>Home</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/works" passHref>
              <Anchor>Works</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <Anchor>Blog</Anchor>
            </Link>
          </li>
          <li>
            <ToggleMode />
          </li>
        </ul>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
