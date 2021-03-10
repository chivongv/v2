import Link from 'next/link';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Breakpoints } from '../styles/breakpoints';

const Container = styled(motion.div)({
  display: 'flex',
  minHeight: '85vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [Breakpoints.LargerThan1000]: {
    minHeight: '100vh',
  },
});

const Title = styled(motion.h2)({
  fontSize: 'calc(1rem + 2.5vw)',
  lineHeight: 1.5,
  marginBottom: 20,
});

const SubTitle = styled(motion.h3)({
  fontSize: 'calc(0.6rem + 0.8vw)',
  maxWidth: 800,
  width: '85vw',
  lineHeight: 1.3,
  textAlign: 'center',
});

const Anchor = styled(motion.a)({
  marginTop: 15,
  backgroundColor: 'var(--colors-primary)',
  color: '#fff',
  position: 'relative',
  padding: '10px 15px',
  borderRadius: 4,
  '::selection': {
    backgroundColor: 'initial',
    color: 'initial',
  },
  '@media screen and (min-width: 594px)': {
    marginTop: 30,
  },
});

const moveLeft = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0 },
};

const moveUp = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  return (
    <Container initial="hidden" animate="visible">
      <Title variants={moveLeft} transition={{ delay: 0.5, duration: 1 }}>
        Hi, I'm <span className="highlight">Chi</span>
      </Title>
      <SubTitle variants={moveUp} transition={{ delay: 1.5, duration: 2 }}>
        Software Engineer
      </SubTitle>
      <Link href="/#works" passHref>
        <Anchor variants={moveUp} transition={{ delay: 3, duration: 2 }}>
          Read more
        </Anchor>
      </Link>
    </Container>
  );
};

export default Hero;
