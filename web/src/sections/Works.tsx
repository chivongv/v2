import Link from 'next/link';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

import WorkCard from '@components/cards/WorkCard';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1000,
  minHeight: '70vh',
  margin: '0 auto',
  padding: '30px 0',
});

const Title = styled('h2')({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: 'var(--colors-primary)',
});

const WorkList = styled('div')({
  marginTop: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 20,
});

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  margin: '20px 0 0',
});

const Anchor = styled('a')({
  color: '#fff',
  background: 'var(--colors-primary)',
  borderRadius: 5,
  padding: '10px 16px',
  '::selection': {
    backgroundColor: 'initial',
    color: 'initial',
  },
});

type Work = {
  _id: string;
  demo: string;
  excerpt: string;
  source: string;
  tags: string[];
  title: string;
};

type Props = {
  works: Work[];
};

const Works = forwardRef(({ works }: Props, ref?: any) => {
  if (works && works.length > 0) {
    return (
      <Container id="works">
        <Title>Some Things I&#39;ve Built</Title>
        <WorkList ref={ref}>
          {works.map((work) => {
            if (work) {
              return <WorkCard key={work._id} data={work} />;
            }
            return null;
          })}
        </WorkList>
        <Wrapper>
          <Link href="/works" passHref>
            <Anchor>See more works</Anchor>
          </Link>
        </Wrapper>
      </Container>
    );
  }

  return null;
});

export default Works;
