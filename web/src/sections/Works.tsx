import * as React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import WorkCard from '@components/cards/WorkCard';

const Container = styled(motion.div)({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 1000,
  minHeight: '70vh',
  margin: '0 auto',
  padding: '30px 0',
});

const Title = styled(motion.h2)({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: 'var(--colors-primary)',
});

const WorkList = styled(motion.ul)({
  marginTop: 20,
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: 20,
  listStyle: 'none',
});

const Wrapper = styled(motion.div)({
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

const moveUp = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
};

const moveRight = {
  end: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
    },
  },
  start: {
    opacity: 0,
    x: -200,
  },
};

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

const Works = React.forwardRef(({ works }: Props, ref?: any) => {
  const controls = useAnimation();
  const { ref: mRef, inView } = useInView();

  React.useEffect(() => {
    if (inView) {
      controls.start('end');
    }
  }, [controls, inView]);

  if (works && works.length > 0) {
    return (
      <Container
        id="works"
        initial="start"
        animate={controls}
        variants={moveRight}
      >
        <Title>Some Things I&#39;ve Built</Title>
        <WorkList ref={ref} animate={controls} variants={moveUp}>
          {works.map((work, i) => {
            if (work) {
              return (
                <motion.li
                  key={work._id}
                  ref={mRef}
                  whileHover={{ translateY: -10 }}
                  whileFocus={{ translateY: -10 }}
                >
                  <WorkCard data={work} />
                </motion.li>
              );
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
