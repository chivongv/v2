import styled from '@emotion/styled';
import {
  FaRegEnvelope,
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaCodepen,
  FaTwitter,
} from 'react-icons/fa';

import { socialMedia } from '../siteSettings';
import { ExtendedTheme } from '../styles/theme';

const Container = styled('div')({});

const List = styled('ul')<{ theme: ExtendedTheme }>(({ theme }) => ({
  display: 'flex',
  width: '100%',
  minHeight: 50,
  alignItems: 'center',
  position: 'sticky',
  left: 0,
  bottom: '5%',
  listStyle: 'none',
  justifyContent: 'center',
  marginBottom: 50,
  '::before': {
    content: '""',
    display: 'inline-block',
    backgroundColor: theme.colors.text,
    width: 0,
    height: 1,
    margin: 0,
    marginRight: 5,
  },
  '::after': {
    content: '""',
    display: 'inline-block',
    backgroundColor: theme.colors.text,
    width: 0,
    height: 1,
    margin: 0,
    marginLeft: 5,
  },
  '> li': {
    margin: 3,
    '> span': {
      display: 'none',
      position: 'absolute',
      marginTop: 35,
      marginLeft: -45,
    },
  },
  '@media all and (min-width: 1230px)': {
    flexDirection: 'column',
    width: 50,
    position: 'fixed',
    left: 30,
    bottom: 0,
    marginBottom: 0,
    '::before': {
      width: 1,
      height: 35,
      margin: '0 auto 10px',
    },
    '::after': {
      width: 1,
      height: '60px !important',
      margin: '10px auto 0',
    },
    '> li': {
      padding: 5,
      margin: '8px auto',
      '> span': {
        display: 'none',
        position: 'absolute',
        marginLeft: 10,
        borderRadius: 4,
        padding: 5,
        marginTop: -5,
      },
    },
  },
}));

const Icon = styled('a')<{ theme: ExtendedTheme }>(({ theme }) => ({
  textDecoration: 'none',
  color: theme.colors.text,
  borderRadius: '50%',
  padding: 10,
  background: 'transparent',
  boxShadow: `0 2px 3px ${theme.colors.shadow}, -1px -1px 2px ${theme.colors.shadow}`,
  ':hover, :focus': {
    color: theme.colors.primary,
  },
  ':hover + span, :focus + span': {
    display: 'inline-block',
    color: theme.colors.accent,
    boxShadow: `0 0 3px ${theme.colors.primary}`,
  },
}));

const IconSelector = ({ name }) => {
  switch (name) {
    case 'Email':
      return <FaRegEnvelope />;
    case 'Twitter':
      return <FaTwitter />;
    case 'GitHub':
      return <FaGithub />;
    case 'LinkedIn':
      return <FaLinkedin />;
    case 'Codepen':
      return <FaCodepen />;
    case 'GitLab':
      return <FaGitlab />;
    default:
      return <FaGithub />;
  }
};

const SocialBar = () => {
  return (
    <Container>
      <List>
        {socialMedia &&
          socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <Icon href={url} className={name} aria-label={name}>
                {IconSelector({ name })}
              </Icon>
              <span>{name}</span>
            </li>
          ))}
      </List>
    </Container>
  );
};

export default SocialBar;
