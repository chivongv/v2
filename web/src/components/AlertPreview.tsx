import * as React from 'react';
import styled from '@emotion/styled/macro';

const Container = styled('div')({
  margin: '10px auto',
  padding: 10,
  fontsize: '1rem',
});

const ButtonLink = styled('a')({
  color: 'var(--colors-primary)',
  cursor: 'pointer',
});

type Props = {
  redirect: string;
};

const AlertPreview: React.FC<Props> = ({ redirect }) => {
  return (
    <Container>
      You are in preview mode.{' '}
      <ButtonLink href={`/api/exit-preview?redirect=${redirect}`}>
        Click here to exit.
      </ButtonLink>
    </Container>
  );
};
export default AlertPreview;
