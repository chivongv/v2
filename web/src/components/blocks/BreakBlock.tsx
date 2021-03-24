import styled from '@emotion/styled/macro';

const EmptyBreak = styled('div')<{ height?: number }>(({ height }) => ({
  height: height ? height : 50,
}));

const LineBreak = styled('div')<{ height?: number }>(({ height }) => ({
  height: height ? height : 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

const BreakBlock = ({ node }) => {
  switch (node.style) {
    case 'emptyBreak': {
      return <EmptyBreak height={node.height} />;
    }
    case 'lineBreak': {
      return (
        <LineBreak height={node.height}>
          <hr />
        </LineBreak>
      );
    }
    default:
      return <EmptyBreak />;
  }
};

export default BreakBlock;
