import styled from '@emotion/styled';
import { FaGithub, FaGitlab, FaExternalLinkAlt } from 'react-icons/fa';
import imageUrlBuilder from '@sanity/image-url';

import client from '../lib/sanity';
import { ExtendedTheme } from '../styles/theme';

const Container = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  width: '100%',
  borderRadius: 10,
  boxShadow: `3px 3px 7px ${theme.colors.shadow}, 
            -2px -2px 7px ${theme.colors.shadow}`,
  marginBottom: 20,
}));

const TwoCol = styled('div')({
  marginTop: 15,
  '@media all and (min-width: 800px)': {
    display: 'flex',
    minHeight: 250,
  },
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '10px 15px',
  minHeight: 200,
  fontSize: '0.875rem',
  width: '100%',
  textAlign: 'center',
});

const ProjectLinks = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
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
  '@media all and (min-width: 800px)': {
    justifyContent: 'flex-start',
  },
}));

const Name = styled('h2')<{ theme: ExtendedTheme }>(({ theme }) => ({
  margin: '10px 0 7px',
  fontSize: 'calc(0.8rem + 0.4vw)',
  color: theme.colors.accent,
}));

const Body = styled('div')({
  flex: 1,
  p: {
    marginBottom: 10,
    lineHeight: 1.5,
  },
  ul: {
    marginLeft: 25,
  },
});

const Thumbnail = styled('div')<{ theme: ExtendedTheme }>(({ theme }) => ({
  width: '100%',
  maxWidth: '100vw',
  background: theme.colors.thumbnail,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  borderRadius: 5,
  img: {
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
    maxHeight: 400,
  },
  '@media all and (min-width: 800px)': {
    maxWidth: 400,
  },
  '@media all and (min-width: 1000px)': {
    maxWidth: 600,
  },
}));

const TagList = styled('ul')({
  listStyleType: 'none',
  display: 'flex',
  width: '100%',
  margin: '10px 0 0',
  justifyContent: 'center',
  'li:last-child': {
    marginRight: 0,
  },
  '@media all and (min-width: 800px)': {
    justifyContent: 'flex-start',
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

const imageBuilder = imageUrlBuilder(client);

const ProjectCard = ({ data }) => {
  if (data) {
    const { title, source, demo, body, coverImage, tags } = data;

    return (
      <Container>
        <TwoCol>
          <Content>
            {title ? <Name>{title}</Name> : null}
            {body ? (
              <Body>
                <p>{body}</p>
              </Body>
            ) : null}
            {source || demo ? (
              <ProjectLinks>
                {demo ? (
                  <a
                    href={demo}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                ) : null}
                {source ? (
                  <a
                    href={source}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    {IconSelector(source)} Source
                  </a>
                ) : null}
              </ProjectLinks>
            ) : null}
            <TagList>
              {tags
                ? tags.map((tag, j) => {
                    return <Tag key={j}>{tag}</Tag>;
                  })
                : null}
            </TagList>
          </Content>
          <Thumbnail>
            {coverImage && coverImage.asset ? (
              <img
                loading="lazy"
                src={imageBuilder.image(coverImage).width(400).url()}
                alt={title}
              />
            ) : null}
          </Thumbnail>
        </TwoCol>
      </Container>
    );
  }

  return null;
};

export default ProjectCard;