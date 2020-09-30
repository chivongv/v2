import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from '@emotion/styled';
import { ExtendedTheme } from '../styles/theme';

const Button = styled('button')<{ theme: ExtendedTheme }>(({ theme }) => ({
  position: 'fixed',
  bottom: 30,
  right: 10,
  zIndex: 99,
  padding: 10,
  color: '#fff',
  backgroundColor: theme.colors.primary,
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
  '@media all and (min-width: 1000px)': {
    right: 30,
  },
}));

const ToTop = ({ inView }) => {
  function handleClick() {
    document.documentElement.scrollTop = 0;
    // @ts-ignore
    window.pageYOffset = 0;
  }

  if (!inView) return null;
  return (
    <Button onClick={() => handleClick()}>
      <FaArrowUp />
    </Button>
  );
};

export default ToTop;
