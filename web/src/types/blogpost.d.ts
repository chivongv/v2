export type BlogPost = {
  slug: string;
  title: string;
  author: {
    name: string;
  };
  coverImage: string;
  body: unknown;
};
