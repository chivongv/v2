import imageUrlBuilder from '@sanity/image-url';
import styled from '@emotion/styled';
import client from '@lib/sanity';

const Caption = styled('figcaption')({
  textAlign: 'center',
});

const imageBuilder = imageUrlBuilder(client);

const FigureBlock = ({ node }) => {
  if (!node || !node.asset) {
    return null;
  }

  const { caption, alt } = node;

  return (
    <figure>
      <img src={imageBuilder.image(node).width(400).url()} alt={alt} />
      {caption && <Caption>{caption}</Caption>}
    </figure>
  );
};

export default FigureBlock;
