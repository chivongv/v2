import sanityClient from '@sanity/client';
import sanityImage from '@sanity/image-url';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const options = {
  dataset: 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  // useCdn == true gives fast, cheap responses using a globally distributed cache.
  // Set this to false if your application require the freshest possible
  // data always (potentially slightly slower and a bit more expensive).
};

const client = sanityClient(options);

export const imageBuilder = sanityImage(client);

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const serializers = {
  types: {
    code: ({ node }) => {
      if (!node || !node.code) {
        return null;
      }
      const { language, code } = node;
      return (
        <SyntaxHighlighter
          language={language || 'text'}
          customStyle={{ fontSize: '1rem' }}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      );
    },
  },
};

export default client;
