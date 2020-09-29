import Link from 'next/link';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';

import ToggleMode from './ToggleMode';
import { ExtendedTheme } from '../styles/theme';

const Container = styled('nav')<{ theme: ExtendedTheme }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100vw',
  margin: '0 auto',
  paddingRight: 20,
  height: 50,
  position: 'fixed',
  backgroundColor: theme.colors.navBarBg,
  boxShadow: `3px 3px 5px ${theme.colors.shadow}`,
  zIndex: 999,
}));

const InnerContainer = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  width: '100%',
  maxWidth: 1000,
  margin: '0 auto',
  '> ul': {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'flex-end',
    '& li:not(:last-child)': {
      background: theme.colors.text,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      marginRight: 20,
      fontWeight: 600,
    },
  },
}));

const Anchor = styled('a')<{ theme: ExtendedTheme }>(({ theme }) => ({
  cursor: 'pointer',
  [':hover, :focus']: {
    borderBottom: `3px solid ${theme.colors.accent}`,
  },
}));

const Navbar = () => {
  const [colorMode, setColorMode] = useColorMode();

  const toggleMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

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
            <Link href="/blog" passHref>
              <Anchor>Blog</Anchor>
            </Link>
          </li>
          <li>
            <ToggleMode onClick={() => toggleMode()} />
          </li>
        </ul>
      </InnerContainer>
    </Container>
  );
};

export default Navbar;
