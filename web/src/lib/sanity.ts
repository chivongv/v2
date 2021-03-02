import dynamic from 'next/dynamic';
import {
  createImageUrlBuilder,
  createPreviewSubscriptionHook,
} from 'next-sanity';
const CodeBlock = dynamic(() => import('@blocks/Code'));
const FigureBlock = dynamic(() => import('@blocks/Figure'));
import { sanityConfig } from './config';

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source, width) => {
  if (width) {
    return imageBuilder.image(source).width(width);
  } else {
    return imageBuilder.image(source).auto('format').fit('max');
  }
};

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig,
);

export const serializers = {
  types: {
    code: CodeBlock,
    figure: FigureBlock,
  },
};
