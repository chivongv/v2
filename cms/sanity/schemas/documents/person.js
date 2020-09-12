export default {
  name: "person",
  type: "document",
  title: "Person",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      }
    },
    {
      name: "bio",
      type: "string",
      title: "Bio",
    },
    {
      name: "profileImage",
      type: "image",
      title: "Profile image",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: 'slug.current',
      media: "profileImage",
    }
  },
}
