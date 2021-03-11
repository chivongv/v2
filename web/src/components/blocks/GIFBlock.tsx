import styled from '@emotion/styled';
import { urlForFile } from '@utils/urlForFile';

const Container = styled('div')({
  maxWidth: 600,
  margin: '0 auto',
});

const Caption = styled('figcaption')({
  textAlign: 'center',
});

const GIFBlock = ({ node }) => {
  if (!node || (!node.mp4 && !node.webm && !node.ogg)) {
    return null;
  }

  return (
    <Container>
      <video width="100%" autoPlay loop muted>
        {node.webm && (
          <source src={`${urlForFile(node.webm)}`} type="video/webm" />
        )}
        {node.mp4 && (
          <source src={`${urlForFile(node.mp4)}`} type="video/mp4" />
        )}
        {node.ogg && (
          <source src={`${urlForFile(node.ogg)}`} type="video/ogg" />
        )}
        Your browser does not support the video tag.
      </video>
      {node.caption && <Caption>{node.caption}</Caption>}
    </Container>
  );
};

export default GIFBlock;
