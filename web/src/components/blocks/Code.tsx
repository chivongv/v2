import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import styled from '@emotion/styled';
import { FiCopy } from 'react-icons/fi';

import syntaxTheme from '@styles/syntax-theme';
import { toCapitalize } from '@utils/string-utils';

const Header = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#a3acb9',
  borderRadius: '7px 7px 0 0',
  backgroundColor: 'hsl(220, 13%, 22%)',
  padding: '5px 12px 5px 20px',
});

const Title = styled('span')({
  fontSize: '0.875rem',
});

const Button = styled('button')({
  padding: 5,
  margin: 0,
  border: 'none',
  background: 'transparent',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  '> svg': {
    marginRight: 5,
  },
});

const Text = styled('div')({
  height: 26,
  padding: 5,
  fontWeight: 700,
  color: '#1fb742',
});

const CodeBlock = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const [copied, setCopied] = useState(false);
  const { language, code } = node;

  const handleClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 5000);
    }
  };

  return (
    <div>
      <Header>
        <Title>{toCapitalize(language)}</Title>
        {!copied && (
          <Button onClick={handleClick}>
            <FiCopy /> Copy
          </Button>
        )}
        {copied && <Text>Copied!</Text>}
      </Header>
      <SyntaxHighlighter language={language || 'text'} style={syntaxTheme}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
