import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from '@emotion/styled/macro';
import { Breakpoints } from '../styles/breakpoints';

const Button = styled('button')({
  position: 'fixed',
  bottom: 30,
  right: 10,
  zIndex: 99,
  padding: 10,
  color: '#fff',
  backgroundColor: 'var(--colors-primary)',
  borderRadius: '50%',
  boxShadow: '0 2px 2px rgba(0, 0, 0, 0.15)',
  border: 'none',
  cursor: 'pointer',
  svg: {
    width: 20,
    height: 20,
  },
  '@media all and  (min-width: 500px)': {
    right: 20,
  },
  [Breakpoints.LargerThan1000]: {
    right: 30,
  },
});

const ToTop = ({ inView }) => {
  function handleClick() {
    document.documentElement.scrollTop = 0;
    // @ts-ignore
    window.pageYOffset = 0;
  }

  if (!inView) return null;
  return (
    <Button
      aria-label="Click here to get to the top of the page"
      onClick={() => handleClick()}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ToTop;
