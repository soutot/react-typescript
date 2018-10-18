import * as React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import InputAdornment from '@material-ui/core/InputAdornment'

import Icon from '../Icon/Icon'
import theme from '../../../theme/theme'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// **************************************************
// *****  Styled Components
// **************************************************
const customTheme = createMuiTheme({
  overrides: {
    MuiOutlinedInput: {
      notchedOutline: {
        borderColor: `${theme.colors.neutral}33`,
        borderRadius: 10,
      },
      root: {
        '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
          borderColor: theme.colors.primary,
        },
        width: 260,
        height: 40,
      },
      input: {
        color: theme.colors.text,
        textAlign: 'center',
        fontSize: theme.fontSizes.medium,
        marginLeft: 35,
      },
    },
    MuiInput: {
      input: {
        color: theme.colors.text,
      },
      underline: {
        '&:before': {
          borderBottom: `1px solid ${theme.colors.text}`,
        },
        '&:after': {
          borderBottom: `2px solid  ${theme.colors.primary}`,
        },
        '&:hover:not($disabled):not($focused):not($error):before': {
          borderBottom: `2px solid ${theme.colors.text}`,
        },
      },
    },
  },
})

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`
const InputFieldContainer = styled.section`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  height: 30px;
`

const TextFieldStyled = styled(TextField).attrs({
  InputLabelProps: {
    style: {
      color: theme.colors.text,
    },
  },
})`
  && {
    text-align: center;
    width: 260px;
  }
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props {
  placeholder?: string
  label?: string
  name?: string
  value?: string
  onChange?: (event: object) => void
  disabled?: boolean
  errorText?: string
  icon?: string
  variant?: 'standard' | 'outlined' | 'filled'
  type?: string
}

// **************************************************
// ***** Component
// **************************************************
const InputField = ({
  placeholder,
  label,
  name,
  value,
  onChange,
  disabled,
  errorText,
  icon,
  variant,
  type = 'text',
  ...props
}: Props) => (
  <MuiThemeProvider theme={customTheme}>
    <Wrapper>
      <InputFieldContainer>
        <TextFieldStyled
          placeholder={placeholder}
          name={name}
          label={label}
          error={!!errorText}
          helperText={errorText && errorText}
          value={value}
          onChange={onChange}
          disabled={disabled}
          type={type}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <Icon name={icon || ''} />
              </InputAdornment>
            ),
          }}
          variant={variant}
          {...props}
        />
      </InputFieldContainer>
    </Wrapper>
  </MuiThemeProvider>
)

export default InputField
