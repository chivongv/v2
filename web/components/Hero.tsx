import Link from 'next/link';
import styled from '@emotion/styled';
import { IoIosArrowDown } from 'react-icons/io';

const Container = styled('div')({
  display: 'flex',
  minHeight: '85vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (min-width: 1000px)': {
    minHeight: '100vh',
  },
});

const Anchor = styled('a')({
  marginTop: 30,
  color: 'rgba(5, 122, 255, 0.8)',
  animation: `bounce 3s infinite`,
  position: 'relative',
  svg: {
    width: 50,
    height: 50,
  },
  '@media screen and (max-width: 594px)': {
    marginTop: 15,
  },
  '@keyframes bounce': {
    '0%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-25px)',
    },

    '55%': {
      transform: 'translateY(0%)',
    },
    '70%': {
      transform: 'translateY(-10px)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
});

const Hero = () => {
  return (
    <Container>
      <Link href="/#works">
        <Anchor>
          <IoIosArrowDown />
        </Anchor>
      </Link>
    </Container>
  );
};

export default Hero;
