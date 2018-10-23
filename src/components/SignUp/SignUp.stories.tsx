import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import SignUp from './SignUp'
import Template from '../Template/Template'

storiesOf('SignUp', module).add('default', () => (
  <Template>
    <SignUp onRegisterClick={action('Register')} />
  </Template>
))
