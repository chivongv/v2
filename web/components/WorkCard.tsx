import styled from '@emotion/styled';
import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa';
import { ExtendedTheme } from '../styles/theme';

const Container = styled.div<{ theme: ExtendedTheme }>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 15,
  borderRadius: 10,
  transition: 'transform 0.2s linear',
  boxShadow: `3px 3px 5px ${theme.colors.shadow}, -2px -2px 7px ${theme.colors.shadow}`,
  width: '100%',
  minHeight: 200,
  justifyContent: 'center',
  ':hover, :focus': {
    transform: 'translateY(-10px)',
  },
}));

const StyledLinks = styled.div<{ theme: ExtendedTheme }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  marginRight: 10,

  a: {
    marginRight: 15,
    color: theme.colors.text,
    ':hover, :focus': {
      color: theme.colors.accent,
    },
    svg: {
      marginRight: 3,
    },
  },
  'a:last-child': {
    marginRight: 0,
  },
}));

const Name = styled('h2')<{ theme: ExtendedTheme }>(({ theme }) => ({
  fontSize: 'calc(0.6rem + 0.4vw)',
  margin: '10px 0 7px',
  color: theme.colors.accent,
}));

const Body = styled.div({
  flex: 1,
  lineHeight: 1.5,
});

const TagList = styled.ul({
  listStyleType: 'none',
  display: 'flex',
  width: '100%',
  margin: '20px 0 0',
  'li:last-child': {
    marginRight: 0,
  },
});

const Tag = styled.li<{ theme: ExtendedTheme }>(({ theme }) => ({
  color: theme.colors.tag,
  marginRight: 10,
  marginBottom: 7,
  ':hover, :focus': {
    color: theme.colors.accent,
  },
}));

const IconSelector = (link = 'github') => {
  if (link.includes('gitlab')) {
    return <FaGitlab />;
  } else {
    return <FaGithub />;
  }
};

const WorkCard = ({ data }) => {
  if (data) {
    const { title, source, demo, excerpt, tags } = data;

    return (
      <Container>
        {source || demo ? (
          <StyledLinks className="works-links">
            {source ? (
              <a
                href={source}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                {IconSelector(source)} Source
              </a>
            ) : null}
            {demo ? (
              <a href={demo} target="_blank" rel="nofollow noopener noreferrer">
                <FaExternalLinkAlt /> Demo
              </a>
            ) : null}
          </StyledLinks>
        ) : null}
        {title ? <Name>{title}</Name> : null}
        {excerpt ? (
          <Body
            dangerouslySetInnerHTML={{
              __html: excerpt,
            }}
          ></Body>
        ) : null}
        <TagList className="work-tags">
          {tags
            ? tags.map((tag, j) => {
                return <Tag key={j}>{tag}</Tag>;
              })
            : null}
        </TagList>
      </Container>
    );
  }

  return null;
};

export default WorkCard;
