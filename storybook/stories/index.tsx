import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('Testing', module)
  .add('default', () => (
    <div>First Storybook component</div>
  ))
  .add('With button', () => (
    <button onClick={action('clicked')}>Click me</button>
  ))
  