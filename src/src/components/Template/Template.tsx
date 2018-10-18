import * as React from 'react'
import styled from 'styled-components'

// **************************************************
// **************************************************
// Styled Components
// **************************************************
// **************************************************
const Container = styled.section`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    45deg,
    rgba(84, 0, 163, 1) 40%,
    rgba(16, 141, 187, 1) 100%
  );
`

// **************************************************
// *****  Interfaces
// **************************************************
interface Props {
  children: React.ReactElement<any> | React.ReactNode[]
}

// **************************************************
// *****  Component
// **************************************************
const Template = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default Template
