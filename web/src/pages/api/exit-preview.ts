export default async function exit(req, res) {
  const redirect = req.query.redirect ? '/' + req.query.redirect : '/';

  res.clearPreviewData();
  res.writeHead(307, { Location: redirect });
  res.end();
}
