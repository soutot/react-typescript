import * as React from 'react'
import { storiesOf } from '@storybook/react'

import Template from './Template'

storiesOf('Template', module).add('default', () => (
  <Template>
    <div>Lorem ipsum</div>
  </Template>
))
