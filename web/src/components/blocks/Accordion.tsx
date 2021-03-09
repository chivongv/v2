import useCollapse from 'react-collapsed';
import styled from '@emotion/styled';
import { IoIosArrowDown } from 'react-icons/io';
import { PortableText } from '@lib/sanity';

const Container = styled('div')({
  marginBottom: '1.5em',
  background: 'var(--colors-thumbnail-background)',
});

const Header = styled('button')<{ isOpen: boolean }>(({ isOpen }) => ({
  width: '100%',
  height: 36,
  border: 'none',
  color: isOpen ? '#a3acb9' : 'var(--colors-primary)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius: '7px 7px 0 0',
  backgroundColor: 'hsl(220, 13%, 22%)',
  padding: '10px 12px 10px 20px',
  cursor: 'pointer',
}));

const Title = styled('span')({
  fontSize: '1rem',
  ':hover': {
    color: 'var(--colors-primary)',
  },
});

const Arrow = styled('div')<{ isOpen: boolean }>(({ isOpen }) => ({
  svg: {
    width: 30,
    height: 30,
  },
  display: 'flex',
  justifyContent: 'center',
  ':hover': {
    color: 'var(--colors-primary)',
  },
  transform: isOpen ? 'rotate(-180deg)' : 'rotate(0deg)',
  transition: 'transform 600ms ease-in-out',
}));

const Content = styled('section')({
  '> div': {
    padding: '10px',
  },
});

const AccordionBlock = ({ node }) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    easing: 'ease-in-out',
    defaultExpanded: node.isOpen || false,
  });
  if (!node || !node.content) {
    return null;
  }

  const { title, content } = node;

  return (
    <Container>
      <Header isOpen={isExpanded} {...getToggleProps()}>
        <Title>{title}</Title>
        <Arrow isOpen={isExpanded}>
          <IoIosArrowDown />
        </Arrow>
      </Header>
      <Content {...getCollapseProps()}>
        <PortableText blocks={content} />
      </Content>
    </Container>
  );
};

export default AccordionBlock;
