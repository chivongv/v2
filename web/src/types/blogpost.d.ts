export type BlogPost = {
  slug: string;
  title: string;
  author: {
    name: string;
  };
  excerpt: string;
  publishedDate: Datetime;
  updatedDate: Datetime;
  coverImage: string;
  body: unknown;
  tags: string[];
};
