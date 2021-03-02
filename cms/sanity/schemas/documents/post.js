import { format } from 'date-fns';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post title',
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
      type: 'image',
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body text',
      of: [
        { type: 'block' },
        { type: 'figure' },
        {
          type: 'code',
        },
      ],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'person' }],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ name: 'tag', title: 'Tag', type: 'string' }],
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
