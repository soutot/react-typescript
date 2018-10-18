import * as React from 'react'
import { storiesOf } from '@storybook/react'

import InputField from './InputField'
import Template from '../../Template/Template'
import i18n from '../../../i18n/i18n'

storiesOf('InputField/Default', module)
  .add('InputField', () => (
    <Template>
      <InputField placeholder={i18n.t('inputfield.fullname')} />
    </Template>
  ))
  .add('With value', () => (
    <Template>
      <InputField
        placeholder={i18n.t('inputfield.fullname')}
        value="Lorem Ipsum"
      />
    </Template>
  ))
  .add('With icon', () => (
    <Template>
      <InputField
        icon="person-outline"
        placeholder={i18n.t('inputfield.fullname')}
      />
    </Template>
  ))
  .add('With label', () => (
    <Template>
      <InputField label="CPF só números" icon="person-outline" />
    </Template>
  ))
  .add('With error', () => (
    <Template>
      <InputField
        placeholder={i18n.t('inputfield.fullname')}
        errorText={i18n.t('errors.provideYourFullName')}
      />
    </Template>
  ))
  .add('Outlined', () => (
    <Template>
      <InputField
        placeholder={i18n.t('inputfield.fullname')}
        variant="outlined"
      />
    </Template>
  ))
  .add('Outlined With error', () => (
    <Template>
      <InputField
        placeholder={i18n.t('inputfield.fullname')}
        variant="outlined"
        errorText={i18n.t('errors.provideYourFullName')}
      />
    </Template>
  ))
