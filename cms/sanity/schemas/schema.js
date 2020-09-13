import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import category from './documents/category';
import figure from './objects/figure';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';
import richText from './objects/richText';
import siteSettings from './documents/siteSettings';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    siteSettings,
    project,
    figure,
    category,
    person,
    post,
    richText,
  ]),
});
