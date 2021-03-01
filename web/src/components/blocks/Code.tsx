import dynamic from 'next/dynamic';
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'));
import syntaxTheme from '@styles/syntax-theme';

const CodeBlock = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter language={language || 'text'} style={syntaxTheme}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
