export default {
  name: 'accordion',
  type: 'object',
  title: 'Accordion',
  fields: [
    {
      name: 'showMoreText',
      title: 'Show more text',
      type: 'string',
    },
    {
      name: 'showLessText',
      title: 'Show less text',
      type: 'string',
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
    {
      name: 'isOpen',
      title: 'Is accordion open?',
      type: 'boolean',
    },
    {
      name: 'collapseDirection',
      title: 'Collapse direction',
      type: 'string',
      options: {
        list: [
          { title: 'Up', value: 'up' },
          { title: 'Down', value: 'down' },
        ],
      },
    },
  ],
};
