import { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import Navbar from '../components/Navbar';

const Container = styled('div')({
  minHeight: '100vh',
});

const InnerContainer = styled('div')({
  maxWidth: 1000,
  margin: '0 auto',
});

const Wrapper = styled('div')({
  padding: '20px 0',
  textAlign: 'center',
  margin: '0 auto',
});

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Container>
      <InnerContainer>
        <Head>
          <title>Chi Vong | {title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <main>{children}</main>
        <footer>
          <Wrapper>
            © {new Date().getFullYear()} Built with &#9829; by Chi Vong
          </Wrapper>
        </footer>
      </InnerContainer>
    </Container>
  );
};

export default Layout;
