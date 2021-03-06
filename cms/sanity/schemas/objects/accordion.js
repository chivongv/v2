export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'isOpen',
      title: 'Is accordion open?',
      type: 'boolean',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
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
      ],
    },
  ],
};
