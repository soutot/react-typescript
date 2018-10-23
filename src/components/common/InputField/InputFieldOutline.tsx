import * as React from 'react'
import styled from 'styled-components'

import Text from '../Text/Text'
import theme from '../../../theme/theme'

const InputFieldOutlineContainer = styled.section`
  display: flex;
  flex-direction: column;
`

// const TextFieldStyled = styled(TextField)`
const TextFieldStyled = styled.input`
  && {
    margin: 10px;
    text-align: center;
    border: 1px solid ${theme.colors.neutral}33;
    border-radius: 10px;
    height: 40px;
    width: 260px;
    background: ${theme.colors.none};
    outline: none;
    color: ${theme.colors.text};
  }
`

const ErrorText = styled(Text)`
  display: flex;
  align-self: center;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.error};
`

interface Props {
  placeholder?: string
  label?: string
  name?: string
  value?: string
  onChange?: () => void
  disabled?: boolean
  error?: string
}

const InputFieldOutline = ({
  placeholder,
  label,
  name,
  value,
  onChange,
  disabled,
  error,
  ...props
}: Props) => (
  <InputFieldOutlineContainer>
    <TextFieldStyled
      type="text"
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
    />
    <ErrorText>{error ? error : ''}</ErrorText>
  </InputFieldOutlineContainer>
)

export default InputFieldOutline
