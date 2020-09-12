import { ReactNode } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

const StyledContainer = styled('div')`
  min-height: 100vh;
  max-width: 100vw;

  @media all and (max-width: 594px) {
    width: 100vw;
  }
`;

const StyledWrapper = styled('div')`
  padding: 20px 0;
  text-align: center;<a
  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by{' '}
  
</a>
  margin: 0 auto;
`;

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div>
      <StyledContainer>
        <Head>
          <title>Chi Vong | {title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>{children}</main>
        <footer>
          <StyledWrapper>
            © {new Date().getFullYear()} Built with &#9829; by Chi Vong
          </StyledWrapper>
        </footer>
      </StyledContainer>
    </div>
  );
};

export default Layout;
