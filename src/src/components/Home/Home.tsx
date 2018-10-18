import * as React from 'react'
import styled from 'styled-components'
import { Button as MUIButton } from '@material-ui/core'
import { withRouter, RouteComponentProps } from 'react-router-dom'

import { UserContextConsumer } from '../../context/UserContext'

import InputField from '../common/InputField/InputField'
import Button from '../common/Button/Button'
import Icon from '../common/Icon/Icon'
import Text from '../common/Text/Text'
import LogoReactApp from '../../assets/logo-reactapp.png'

import i18n from '../../i18n/i18n'
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
  flex: 2;
`

const InputContainer = styled(BaseContainer)`
  flex: 2;
  flex-direction: column;
`

const ForgotPasswordContainer = styled(BaseContainer)`
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  padding-top: 10px;
`

const ButtonContainer = styled(BaseContainer)`
  flex: 2;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TextStyled = styled(Text)`
  font-size: ${theme.fontSizes.small};
  margin-left: 10px;
`

const ButtonStyled = styled(Button)`
  && {
    border-radius: 0px;
    min-width: 0px;
    width: 200px;
  }
`

// **************************************************
// ***** Interfaces
// **************************************************
interface Props extends RouteComponentProps {
  onForgotPasswordClick: () => void
  onRegisterClick: () => void
  onSupportClick: () => void
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
    const {
      onForgotPasswordClick,
      onRegisterClick,
      onSupportClick,
      history,
    } = this.props

    return (
      <UserContextConsumer>
        {(context: any) => (
          <Container>
            <LogoContainer>
              <img src={LogoReactApp} />
            </LogoContainer>
            <InputContainer>
              <InputField
                label={i18n.t('inputfield.cpf')}
                icon="person_outline"
                type="number"
              />
              <InputField
                label={i18n.t('inputfield.password')}
                icon="arrow_forward_ios"
                type="password"
              />
              <ForgotPasswordContainer>
                <MUIButton onClick={onForgotPasswordClick}>
                  <Icon name="lock_open" />
                  <TextStyled>{i18n.t('buttons.forgotPassword')}</TextStyled>
                </MUIButton>
              </ForgotPasswordContainer>
            </InputContainer>
            <ButtonContainer>
              <Button
                text={i18n.t('buttons.wantToRegister')}
                onClick={() => {
                  context.setUserName('Lorem')
                  history.push({ pathname: `/signup` })
                }}
              />
              <ButtonStyled
                text={i18n.t('buttons.support')}
                onClick={onSupportClick}
                icon="arrow_forward_ios"
              />
            </ButtonContainer>
          </Container>
        )}
      </UserContextConsumer>
    )
  }
}

export default withRouter(Home)
