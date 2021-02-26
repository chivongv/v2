import { ReactNode } from 'react';
import Head from 'next/head';
import styled from '@emotion/styled';

import Navbar from '../components/Navbar';

const Container = styled('div')({
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = ({ children, ...customMeta }: Props) => {
  const meta = {
    title: 'Chi Vong',
    description: `Frontend Developer, Software Engineer`,
    type: 'website',
    ...customMeta,
  };

  return (
    <Container>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Chi Vong" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <ContentWrapper>
        <main>{children}</main>
      </ContentWrapper>
      <Footer>
        © {new Date().getFullYear()} Built with &#9829; by{' '}
        <span className="highlight">Chi Vong</span>
      </Footer>
    </Container>
  );
};

export default Layout;
