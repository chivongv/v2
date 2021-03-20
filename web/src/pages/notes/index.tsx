import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import Layout from '@components/Layout';
import { Breakpoints } from '@styles/breakpoints';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import { notesIndexQuery } from '@lib/queries';
const SocialBar = dynamic(() => import('@components/SocialBar'));
const ToTop = dynamic(() => import('@components/ToTop'));
const AlertPreview = dynamic(() => import('@components/AlertPreview'));
const NotePostCard = dynamic(() => import('@components/cards/NotePostCard'));
import { NotePost } from 'types/notepost';

const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '85vh',
  paddingTop: 70,
  [Breakpoints.LargerThan1000]: {
    minHeight: '100vh',
  },
});

const Title = styled('h2')({
  fontSize: 'calc(0.875rem + 0.8vw)',
  textAlign: 'center',
  color: 'var(--colors-primary)',
  overflowWrap: 'break-word',
});

const SubTitle = styled('h3')({
  fontSize: '0.875rem',
  textAlign: 'center',
  color: 'var(--colors-text)',
  overflowWrap: 'break-word',
  maxWidth: 900,
  padding: '10px 15px',
  margin: '15px auto',
});

const NoteList = styled(motion.ul)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  margin: '20px auto 15px',
  gap: 20,
  listStyle: 'none',
  [Breakpoints.TabletOrLarger]: {
    margin: '20px auto 15px',
  },
});

const NotePostWrapper = styled(motion.li)({
  '> div': {
    width: '100vw',
    maxWidth: 450,
  },
});

const moveUp = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  },
  hover: {
    boxShadow: `3px 3px 5px var(--colors-primary), -2px -2px 7px var(--colors-primary)`,
  },
};

const Notes = ({ allNotes, preview }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });

  return (
    <Layout title="Chi Vong | Notes">
      <Container>
        <Title>Notes</Title>
        <SubTitle>
          These are my notes on my journey to become a Software Engineer. They
          are written for myself and they contain my opinions and principles. I
          am sharing these publicly because I believe in learning in public.
        </SubTitle>
        {preview && <AlertPreview redirect="notes" />}
        <NoteList ref={ref}>
          {allNotes.map((note: NotePost, index) => {
            return (
              <NotePostWrapper
                key={index}
                initial="hidden"
                animate="visible"
                variants={moveUp}
                whileHover="hover"
                whileFocus="hover"
              >
                <NotePostCard data={note} />
              </NotePostWrapper>
            );
          })}
        </NoteList>
      </Container>
      <SocialBar />
      {inView && <ToTop inView={inView} />}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allNotes = overlayDrafts(
    await getClient(preview).fetch(notesIndexQuery),
  );

  return {
    props: { allNotes, preview },
    revalidate: 10,
  };
}

export default Notes;
