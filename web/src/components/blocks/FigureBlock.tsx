import styled from '@emotion/styled';
import { urlForImage } from '@lib/sanity';

const Caption = styled('figcaption')({
  textAlign: 'center',
});

const FigureBlock = ({ node }) => {
  if (!node || !node.asset) {
    return null;
  }

  return (
    <figure>
      <img
        src={urlForImage(node, 400).url()}
        alt={node.alt}
        style={{ borderRadius: 2 }}
      />
      {node.caption && <Caption>{node.caption}</Caption>}
    </figure>
  );
};

export default FigureBlock;
