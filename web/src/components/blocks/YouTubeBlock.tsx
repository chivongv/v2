import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import styled from '@emotion/styled/macro';

const Container = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

const YouTubeBlock = ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return (
    <Container>
      <YouTube videoId={id} />
    </Container>
  );
};

export default YouTubeBlock;
