import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

import { getAllWorks } from '../lib/api';
import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';
import SocialBar from '../components/SocialBar';
import ToTop from '../components/ToTop';
import { Breakpoints } from '../styles/breakpoints';

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

const Works = ({ allWorks }) => {
  const [ref, inView] = useInView({
    rootMargin: '350px',
  });

  return (
    <Layout title="Chi Vong | Works">
      <Container>
        <ProjectList ref={ref}>
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
      <ToTop inView={inView} />
    </Layout>
  );
};

export async function getStaticProps() {
  const allWorks = await getAllWorks();
  return {
    props: { allWorks },
    revalidate: 1,
  };
}

export default Works;
