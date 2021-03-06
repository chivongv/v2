import styled from '@emotion/styled';
import { urlForImage } from '@lib/sanity';

const Caption = styled('figcaption')({
  textAlign: 'center',
});

const FigureBlock = ({ node }) => {
  if (!node || !node.asset) {
    return null;
  }

  const { caption, alt } = node;

  return (
    <figure>
      <img
        src={urlForImage(node, 400).url()}
        alt={alt}
        style={{ borderRadius: 2 }}
      />
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
};

export default FigureBlock;
