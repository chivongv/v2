import React from 'react';
import dynamic from 'next/dynamic';
const SyntaxHighlighter = dynamic(() => import('react-syntax-highlighter'));
import styled from '@emotion/styled';
import { FiCopy } from 'react-icons/fi';
import syntaxTheme from '@styles/syntax-theme';

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  font-size: 13px;
  color: #a3acb9;
  background-size: 14px 12px;
  background-position: 13px 10px;
  background-repeat: no-repeat;
  line-height: 14px;
  cursor: default;
  border-radius: 7px 7px 0 0;
  background-color: hsl(220, 13%, 22%);
  padding: 5px 12px 5px 20px;
`;

const Title = styled('h3')({
  fontSize: '1rem',
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
  padding: 5,
  fontWeight: 700,
  color: '#1fb742',
});

const CodeBlock = ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const [copied, setCopied] = React.useState(false);
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
        <Title>{language}</Title>
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
