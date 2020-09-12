import React from 'react';
import { action } from '@storybook/addon-actions';
import ToggleMode from '../components/ToggleMode';

export default {
  title: 'Button',
};

export const toggleMode = () => {
  return <ToggleMode onClick={action('clicked')} />;
};
