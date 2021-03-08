import { urlForFile } from '@utils/urlForFile';

const GIFBlock = ({ node }) => {
  if (!node || (!node.mp4 && !node.webm && !node.ogg)) {
    return null;
  }

  return (
    <div>
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
    </div>
  );
};

export default GIFBlock;
