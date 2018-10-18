import * as React from 'react'
import { storiesOf } from '@storybook/react'

import InputFieldOutline from './InputFieldOutline'
import Template from '../../Template/Template'
import i18n from '../../../i18n/i18n'

storiesOf('InputField/Outline', module)
  .add('Outline', () => (
    <Template>
      <InputFieldOutline placeholder={i18n.t('inputfield.fullname')} />
    </Template>
  ))
  .add('With error', () => (
    <Template>
      <InputFieldOutline
        placeholder={i18n.t('inputfield.fullname')}
        error={i18n.t('errors.provideYourFullName')}
      />
    </Template>
  ))
