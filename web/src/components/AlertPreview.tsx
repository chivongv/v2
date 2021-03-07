import Link from 'next/link';
import styled from '@emotion/styled';

const Container = styled('div')({
  margin: '10px auto',
  padding: 10,
  fontsize: '1rem',
});

const ButtonLink = styled('a')({
  color: 'var(--colors-primary)',
  cursor: 'pointer',
});

const AlertPreview = () => {
  return (
    <Container>
      You are in preview mode.{' '}
      <Link href="/api/exit-preview" passHref>
        <ButtonLink>Click here to exit.</ButtonLink>
      </Link>
    </Container>
  );
};
export default AlertPreview;
