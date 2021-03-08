const sharedPostFields = `
  _id,
  name,
  excerpt,
  publishedDate,
  updatedDate,
  title,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`;

const sharedProjectFields = `
  _id,
  demo,
  excerpt,
  source,
  tags,
  title,
`;

export const postsIndexQuery = `
  *[_type == "post"] | order(publishedDate desc, updatedDate desc) {
    ${sharedPostFields}
    tags,
  }
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(updatedDate desc) | [0] {
    ${sharedPostFields}
    body,
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(publishedDate desc, updatedDate desc) | [0...2] {
    ${sharedPostFields}
    body,
  }
}`;

export const postSlugsQuery = `
  *[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
  *[_type == "post" && slug.current == $slug][0] {
    ${sharedPostFields}
  }
`;

export const allWorksForHomeQuery = `
  *[_type == "project" && showOnFrontPage] | order(publishedDate desc){
    ${sharedProjectFields}
  }
`;

export const worksIndexQuery = `
  *[_type == "project"]| order(publishedDate desc){ 
    ${sharedProjectFields}
    showOnFrontPage,
    body,
    gif,
    coverImage
  }
`;
