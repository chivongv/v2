import styled from '@emotion/styled/macro';

export const Time = styled('time')({
  position: 'absolute',
  bottom: 0,
  right: 0,
  fontSize: '0.75rem',
});

export const BackTo = styled('a')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  color: 'var(--colors-primary)',
  fontSize: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  svg: {
    marginRight: 5,
  },
});
