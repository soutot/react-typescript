import * as React from 'react'
import { Icon } from '@material-ui/core'
import styled from 'styled-components'
import theme from '../../../theme/theme'

// **************************************************
// *****  Styled Components
// **************************************************
const StyledIcon = styled(Icon).attrs({
  style: {
    color: theme.colors.primary,
    fontSize: '20px',
  },
})``

// **************************************************
// *****  Interfaces
// **************************************************
interface Props {
  name: string
  className?: string
  style?: any
}

// **************************************************
// ***** Component
// **************************************************
const IconComponent = ({ name, className }: Props) => {
  return <StyledIcon className={className}>{name}</StyledIcon>
}

export default IconComponent
