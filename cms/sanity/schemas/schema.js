import createSchema from 'part:@sanity/base/schema-creator';

import schemaTypes from 'all:part:@sanity/base/schema-type';

import accordion from './objects/accordion';
import _break from './objects/break';
import category from './documents/category';
import figure from './objects/figure';
import gif from './objects/gif';
import note from './documents/note';
import person from './documents/person';
import post from './documents/post';
import project from './documents/project';
import richText from './objects/richText';
import siteSettings from './documents/siteSettings';
import youtube from './objects/youtube';

export default createSchema({
  name: 'portfolio',
  types: schemaTypes.concat([
    accordion,
    _break,
    category,
    figure,
    gif,
    note,
    person,
    post,
    project,
    richText,
    siteSettings,
    youtube,
  ]),
});
