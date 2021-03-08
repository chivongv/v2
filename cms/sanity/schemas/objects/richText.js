export default {
  name: 'richText',
  type: 'array',
  title: 'RichText',
  of: [
    { type: 'accordion' },
    {
      type: 'block',
    },
    {
      type: 'code',
      options: {
        withFilename: true,
      },
    },
    { type: 'figure' },
    { type: 'gif' },
  ],
};
