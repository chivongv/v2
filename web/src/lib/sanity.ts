import dynamic from 'next/dynamic';
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
const AccordionBlock = dynamic(() => import('@blocks/AccordionBlock'));
const BreakBlock = dynamic(() => import('@blocks/BreakBlock'));
const CodeBlock = dynamic(() => import('@blocks/CodeBlock'));
const FigureBlock = dynamic(() => import('@blocks/FigureBlock'));
const GIFBlock = dynamic(() => import('@blocks/GIFBlock'));
const YouTubeBlock = dynamic(() => import('@blocks/YouTubeBlock'));
import { sanityConfig } from './config';

export const serializers = {
  types: {
    accordion: AccordionBlock,
    break: BreakBlock,
    code: CodeBlock,
    figure: FigureBlock,
    gif: GIFBlock,
    youtube: YouTubeBlock,
  },
};

export const imageBuilder = createImageUrlBuilder(sanityConfig);

export const urlForImage = (source, width = 0) => {
  if (width) {
    return imageBuilder.image(source).width(width);
  } else {
    return imageBuilder.image(source).auto('format').fit('max');
  }
};

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig,
);

export const PortableText = createPortableTextComponent({
  ...sanityConfig,
  serializers: serializers,
});
