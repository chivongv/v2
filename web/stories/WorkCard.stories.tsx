import WorkCard from '../components/WorkCard';

export default {
  title: 'Card',
};

const data = {
  title: 'Test title',
  source: 'wwww.github.com',
  demo: 'wwww.github.com',
  excerpt: 'Test WorkCard',
  tags: ['html', 'css', 'javascript'],
};

export const workCard = () => {
  return <WorkCard data={data} />;
};
