import * as React from 'react';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled/macro';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

import { worksIndexQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import { Breakpoints } from '@styles/breakpoints';
const Layout = dynamic(() => import('@components/Layout'));
const ProjectCard = dynamic(() => import('@components/cards/ProjectCard'));
const SocialBar = dynamic(() => import('@components/SocialBar'));
const ToTop = dynamic(() => import('@components/ToTop'));
const AlertPreview = dynamic(() => import('@components/AlertPreview'));

const Container = styled('div')({
  display: 'flex',
  minHeight: '85vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  [Breakpoints.LargerThan1000]: {
    minHeight: '100vh',
  },
});

const ProjectList = styled(motion.ul)({
  margin: '50px 0 20px',
  listStyle: 'none',
});

const ProjectCardWrapper = styled(motion.li)({
  maxWidth: 1100,
  minWidth: 300,
});

const animations = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0 },
};

const Works = ({ allWorks, preview }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });
  const controls = useAnimation();

  React.useEffect(() => {
    if (controls) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Layout title="Chi Vong | Works">
      <Container>
        <ProjectList>
          {preview && <AlertPreview redirect="works" />}
          {allWorks
            ? allWorks.map((project, i) =>
                project ? (
                  <ProjectCardWrapper
                    key={project._id}
                    ref={ref}
                    initial="hidden"
                    animate="visible"
                    variants={animations}
                    transition={{ delay: i * 0.3, duration: 1.5 }}
                  >
                    <ProjectCard data={project} />
                  </ProjectCardWrapper>
                ) : null,
              )
            : null}
        </ProjectList>
      </Container>
      <SocialBar />
      {inView && <ToTop inView={inView} />}
    </Layout>
  );
};

export async function getStaticProps({ preview = false }) {
  const allWorks = overlayDrafts(
    await getClient(preview).fetch(worksIndexQuery),
  );
  return {
    props: { allWorks, preview },
    revalidate: 1,
  };
}

export default Works;
