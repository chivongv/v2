import Link from 'next/link';
import styled from '@emotion/styled';
import { useColorMode } from 'theme-ui';
import ToggleMode from './ToggleMode';
import { ExtendedTheme } from '../styles/theme';

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

const InnerContainer = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  '> ul': {
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center',
    alignItems: 'center',
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
