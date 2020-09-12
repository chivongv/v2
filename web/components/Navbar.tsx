import Link from 'next/link';
import styled from '@emotion/styled';

import ToggleMode from './ToggleMode';

const Container = styled('nav')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100vw',
  maxWidth: 1200,
  margin: '0 auto',
  paddingRight: 20,
  height: 50,
});

const InnerContainer = styled('div')({
  '> ul': {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    '& li:not(:last-child)': {
      background: 'linear-gradient(to right, #e66465, #9198e5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginRight: 20,
      fontWeight: 600,
    },
  },
});

const Anchor = styled('a')(({ theme }) => ({
  cursor: 'pointer',
  [':hover, :focus']: {
    borderBottom: `3px solid ${theme.colors.accent}`,
    // borderBottom: `3px solid #000`,
  },
}));

const Navbar = () => {
  return (
    <Container>
      <InnerContainer>
        <ul>
          <li>
            <Link href="/" as="/">
              <Anchor>Home</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/works" as="/works">
              <Anchor>Works</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/blog">
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
