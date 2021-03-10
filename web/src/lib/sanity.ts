import dynamic from 'next/dynamic';
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
const AccordionBlock = dynamic(() => import('@blocks/Accordion'));
const BreakBlock = dynamic(() => import('@blocks/Break'));
const CodeBlock = dynamic(() => import('@blocks/Code'));
const FigureBlock = dynamic(() => import('@blocks/Figure'));
const GIFBlock = dynamic(() => import('@blocks/GIF'));
import { sanityConfig } from './config';

export const serializers = {
  types: {
    accordion: AccordionBlock,
    break: BreakBlock,
    code: CodeBlock,
    figure: FigureBlock,
    gif: GIFBlock,
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
