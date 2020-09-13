export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: process.env.SANITY_BUILD_HOOK_ID,
                  title: 'Sanity Studio',
                  name: 'portfolio-sanity-skhsxc0i',
                  apiId: process.env.SANITY_API_ID,
                },
                {
                  buildHookId: process.env.NETLIFY_BUILD_HOOK_ID,
                  title: 'Portfolio Website',
                  name: 'chivongv',
                  apiId: process.env.NETLIFY_API_ID,
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'Code repo',
            value: 'https://github.com/chivongv/v2',
            category: 'Code',
          },
          { title: 'Frontend', value: 'https://chivongv.se', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recent blog posts',
        order: '_createdAt desc',
        types: ['post'],
      },
      layout: { width: 'medium' },
    },
  ],
};
