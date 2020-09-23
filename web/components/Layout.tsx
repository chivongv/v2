import { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import Navbar from '../components/Navbar';

const Container = styled('div')({
  minHeight: '100vh',
  position: 'relative',
});

const ContentWrapper = styled('div')({
  maxWidth: 1000,
  margin: '0 auto',
  paddingBottom: '2.5rem',
});

const Footer = styled('footer')({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  height: '2.5rem',
  textAlign: 'center',
});

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <Container>
      <Head>
        <title>Chi Vong | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer>
        © {new Date().getFullYear()} Built with &#9829; by Chi Vong
      </Footer>
    </Container>
  );
};

export default Layout;
