export default {
  name: 'break',
  type: 'object',
  title: 'Break',
  fields: [
    {
      name: 'style',
      type: 'string',
      title: 'Break style',
      options: {
        list: [
          { title: 'Empty break', value: 'emptyBreak' },
          { title: 'Line break', value: 'lineBreak' },
        ],
      },
    },
    {
      name: 'height',
      type: 'number',
      title: 'Break height',
    },
  ],
};
