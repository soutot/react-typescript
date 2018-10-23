import * as React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

import Text from '../Text/Text'
import Icon from '../Icon/Icon'
import theme from '../../../theme/theme'

// **************************************************
// *****  Styled Components
// **************************************************
const ButtonStyled = styled(Button)`
  && {
    text-align: center;
    border: 1px solid ${theme.colors.primary};
    border-radius: 20px;
    height: 40px;
    min-width: 260px;
    background: ${theme.colors.none};
    outline: none;

    &:hover {
      background: ${theme.colors.primary};
    }
  }
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props {
  text: string
  onClick?: () => void
  icon?: string
}

// **************************************************
// ***** Component
// **************************************************
const ButtonComponent = ({ text, onClick, icon, ...props }: Props) => (
  <ButtonStyled onClick={onClick} {...props}>
    <Text>{text}</Text>
    {icon && <Icon name={icon} />}
  </ButtonStyled>
)

export default ButtonComponent
