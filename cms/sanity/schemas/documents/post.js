import { format } from 'date-fns';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedDate',
      title: 'Published date',
      description:
        'This field can be used to schedule posts when to show them.',
      type: 'datetime',
    },
    {
      name: 'updatedDate',
      title: 'Last updated date',
      type: 'datetime',
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'string',
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'figure',
    },
    {
      name: 'body',
      type: 'string',
      title: 'Body text',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Post tags',
      of: [
        {
          type: 'string',
          validation: (Rule) =>
            Rule.required().min(1).error('Minimum 1 character is required'),
        },
      ],
    },
  ],
  orderings: [
    {
      name: 'publishedDateAsc',
      title: 'Published Date old–>new',
      by: [
        {
          field: 'publishedDate',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishedDateDesc',
      title: 'Published Date new->old',
      by: [
        {
          field: 'publishedDate',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'desc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedDate: 'publishedDate',
      slug: 'slug',
      media: 'coverImage',
    },
    prepare({
      title = 'No title',
      publishedDate = Date.now(),
      slug = {},
      media,
    }) {
      const dateSegment = format(new Date(publishedDate), 'yyyy/MM');
      const path = `/${dateSegment}/${slug.current}/`;
      return {
        title,
        media,
        subtitle: publishedDate ? path : 'Missing publishing date',
      };
    },
  },
};
