import * as React from 'react'
import styled from 'styled-components'

import {
  UserContextConsumer,
  UserContextProps,
} from '../../context/UserContext'

import Button from '../common/Button/Button'
import Text from '../common/Text/Text'
import LogoReactApp from '../../assets/logo-reactapp.png'

import theme from '../../theme/theme'

// **************************************************
// ***** Styled Components
// **************************************************
const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const BaseContainer = styled.section`
  display: flex;
  margin: 20px;
`

const LogoContainer = styled.picture`
  display: flex;
  height: 150px;
`

const BoxContainer = styled(BaseContainer)`
  height: 300px;
  width: 250px;
  border: 1px solid ${theme.colors.neutral}33;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ButtonContainer = styled.section`
  bottom: 0;
  position: absolute;
  width: 130px;
`

const ButtonStyled = styled(Button)`
  && {
    min-width: 0px;
    width: 130px;
  }
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props {
  onRegisterClick: () => void
  UserContext?: any
}

interface State {}

// **************************************************
// ***** Component
// **************************************************
class Home extends React.PureComponent<Props, State> {
  // **************************************************
  // ***** Life Cycle
  // **************************************************
  constructor(props: Props) {
    super(props)

    this.state = {}
  }

  // **************************************************
  // ***** Handlers
  // **************************************************

  // **************************************************
  // ***** Render
  // **************************************************
  render() {
    // const { onRegisterClick } = this.props

    return (
      <UserContextConsumer>
        {(context: UserContextProps) => (
          <Container>
            <LogoContainer>
              <img src={LogoReactApp} />
            </LogoContainer>
            <BoxContainer>
              <Text>{`Bem-vindo ${context.userName}`}</Text>
              <ButtonContainer>
                <ButtonStyled text={'OK'} onClick={context.alertName} />
              </ButtonContainer>
            </BoxContainer>
          </Container>
        )}
      </UserContextConsumer>
    )
  }
}

export default Home
