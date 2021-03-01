import client, { previewClient } from './sanity';

const getUniquePosts = (posts) => {
  const slugs = new Set();
  return posts.filter((post) => {
    if (slugs.has(post.slug)) {
      return false;
    } else {
      slugs.add(post.slug);
      return true;
    }
  });
};

const sharedPostFields = `
  excerpt,
  name,
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

const getClient = (preview) => (preview ? previewClient : client);

export async function getPreviewPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(date desc){
      ${sharedPostFields}
      content
    }`,
    { slug },
  );
  return data[0];
}

export async function getAllPostsWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`);
  return data;
}

export async function getAllPostsForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "post"] | order(publishedDate desc, _updatedAt desc){
      ${sharedPostFields}
    }`);
  return getUniquePosts(results);
}

export async function getPost(slug, preview) {
  const curClient = getClient(preview);
  const post = await curClient
    .fetch(
      `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${sharedPostFields}
        body,
      }`,
      { slug },
    )
    .then((res) => res?.[0]);

  return { post };
}

export async function getPostAndMorePosts(slug, preview) {
  const curClient = getClient(preview);
  const [post, morePosts] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${sharedPostFields}
        body,
      }`,
        { slug },
      )
      .then((res) => res?.[0]),
    curClient.fetch(
      `*[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc){
        ${sharedPostFields}
        body,
      }[0...2]`,
      { slug },
    ),
  ]);
  return { post, morePosts: getUniquePosts(morePosts) };
}

export async function getAllWorksForHome(preview) {
  const results = await getClient(preview)
    .fetch(`*[_type == "project" && showOnFrontPage] | order(publishedDate desc){
      ${sharedProjectFields}
    }`);
  return results;
}

export async function getAllWorks() {
  const data = await client.fetch(`*[_type == "project"]| order(publishedDate desc){ 
    ${sharedProjectFields}
    showOnFrontPage,
    body,
    coverImage
   }`);
  return data;
}
