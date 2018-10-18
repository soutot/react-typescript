import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Home from './Home'
import Template from '../Template/Template'
import { MemoryRouter } from 'react-router'

storiesOf('Home', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <Template>
      <Home
        onForgotPasswordClick={action('ForgotPassword')}
        onRegisterClick={action('Register')}
        onSupportClick={action('Support')}
      />
    </Template>
  ))
  .add('English', () => (
    <Template>
      <Home
        onForgotPasswordClick={action('ForgotPassword')}
        onRegisterClick={action('Register')}
        onSupportClick={action('Support')}
      />
    </Template>
  ))
