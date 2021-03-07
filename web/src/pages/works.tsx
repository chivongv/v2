import dynamic from 'next/dynamic';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import { worksIndexQuery } from '@lib/queries';
import { getClient, overlayDrafts } from '@lib/sanity.server';
import Layout from '@components/Layout';
import ProjectCard from '@components/cards/ProjectCard';
const SocialBar = dynamic(() => import('@components/SocialBar'));
const ToTop = dynamic(() => import('@components/ToTop'));
import { Breakpoints } from '@styles/breakpoints';
import AlertPreview from '@components/AlertPreview';

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

const ProjectList = styled('ul')({
  margin: '50px 0 20px',
});

const ProjectCardWrapper = styled('div')({
  maxWidth: 1100,
  minWidth: 300,
});

const Works = ({ allWorks, preview }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });

  return (
    <Layout title="Chi Vong | Works">
      <Container>
        <ProjectList ref={ref}>
          {preview && <AlertPreview />}
          {allWorks
            ? allWorks.map((project) =>
                project ? (
                  <ProjectCardWrapper key={project._id}>
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
