import { postBySlugQuery } from '@lib/queries';
import { previewClient } from '@lib/sanity.server';

export default async function preview(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (!req.query.slug) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  if (req.query.type && req.query.type === 'post') {
    const post = await previewClient.fetch(postBySlugQuery, {
      slug: req.query.slug,
    });

    if (!post || !post.slug) {
      return res
        .status(401)
        .json({ message: 'No valid post or post slug returned.' });
    }

    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});

    // Redirect to the path from the fetched post
    // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
    res.writeHead(307, { Location: `/blog/${post.slug}` });
  } else if (req.query.type && req.query.type === 'project') {
    res.setPreviewData({});
    res.writeHead(307, { Location: `/works` });
  } else {
    res.setPreviewData({});
    res.writeHead(307, { Location: `/` });
  }
  res.end();
}
