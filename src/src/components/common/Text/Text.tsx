import * as React from 'react'
import styled from 'styled-components'
import theme from '../../../theme/theme'

// **************************************************
// ***** Styled Components
// **************************************************
const TextComponent = styled.span`
  color: ${theme.colors.text};
  font-size: ${(props: Props) => props.fontSize || theme.fontSizes.medium};
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props {
  children: string
  fontSize?: string
  color?: string
  className?: string
}

// **************************************************
// ***** Component
// **************************************************
const Text = ({ children, fontSize, color, className }: Props) => {
  return (
    <TextComponent className={className} fontSize={fontSize} color={color}>
      {children}
    </TextComponent>
  )
}

export default Text
