import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './Button'
import Template from '../../Template/Template'
import i18n from '../../../i18n/i18n'

storiesOf('Button', module).add('default', () => (
  <Template>
    <Button text={i18n.t('continue')} onClick={action('Clicked')} />
  </Template>
))
