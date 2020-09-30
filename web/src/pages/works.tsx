import styled from '@emotion/styled';

import Layout from '../components/Layout';
import SocialBar from '../components/SocialBar';
import ProjectCard from '../components/ProjectCard';
import { getAllWorks } from '../lib/api';

const Container = styled('div')({
  display: 'flex',
  minHeight: '85vh',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '@media screen and (min-width: 1000px)': {
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
  return (
    <Layout title="Works">
      <Container>
        <ProjectList>
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
