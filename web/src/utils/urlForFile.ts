import { sanityConfig } from '@lib/config';

const example = 'file-Tb9Ew8CXIwaY6R1kjMvI0uRR-mp4';

const parseAsset = (ref) => {
  const arr = ref.split('-');
  const id = arr[1];
  const format = arr[2];
  if (!id || !format) {
    throw new Error(
      "Malformed asset _ref '" +
        ref +
        '\'. Expected an id like "' +
        example +
        '".',
    );
  }

  return { id, format };
};

export const urlForFile = (source) => {
  const cdnUrl = 'https://cdn.sanity.io';
  const { id, format } = parseAsset(source.asset._ref);
  const filename = id + '.' + format;
  const baseUrl =
    cdnUrl +
    '/files/' +
    sanityConfig.projectId +
    '/' +
    sanityConfig.dataset +
    '/' +
    filename;
  return baseUrl;
};
