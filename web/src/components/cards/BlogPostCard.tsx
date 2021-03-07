import Link from 'next/link';
import styled from '@emotion/styled';
import { FaLongArrowAltRight } from 'react-icons/fa';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: 15,
  borderRadius: 10,
  transition: 'transform 0.2s linear',
  boxShadow: `3px 3px 5px var(--colors-shadow), -2px -2px 7px var(--colors-shadow)`,
  width: '100%',
  minHeight: 200,
  justifyContent: 'center',
});

const Title = styled('h2')({
  fontSize: '1rem',
  margin: '10px 0 7px',
  color: 'var(--colors-primary)',
  textAlign: 'center',
});

const Body = styled('div')({
  flex: 1,
  lineHeight: 1.5,
  textAlign: 'justify',
  '::selection': {
    backgroundColor: 'none',
    color: 'var(--colors-primary)',
  },
});

const ButtonLink = styled('a')({
  padding: '10px 35px',
  cursor: 'pointer',
  borderRadius: 5,
  margin: '20px auto 0',
  span: {
    marginRight: 10,
  },
  color: 'var(--colors-primary)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
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

const Tag = styled.li({
  color: 'var(--colors-tag)',
  marginRight: 10,
  marginBottom: 7,
  ':hover, :focus': {
    color: 'var(--colors-primary)',
  },
});

const BlogPostCard = ({ data }) => {
  if (data) {
    const { title, slug, excerpt, tags } = data;

    return (
      <Container>
        {title ? (
          <Link href={`/blog/${encodeURIComponent(slug)}`}>
            <a>
              <Title>{title}</Title>
            </a>
          </Link>
        ) : null}
        <Body>{excerpt}</Body>
        <Link href={`/blog/${encodeURIComponent(slug)}`} passHref>
          <ButtonLink>
            <span>Read more</span>
            <FaLongArrowAltRight />
          </ButtonLink>
        </Link>
        <TagList>
          {tags
            ? tags.map((tag, j) => {
                return <Tag key={j}>#{tag}</Tag>;
              })
            : null}
        </TagList>
      </Container>
    );
  }

  return null;
};

export default BlogPostCard;
