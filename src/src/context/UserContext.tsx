import * as React from 'react'

// **************************************************
// *****  Interfaces
// **************************************************
interface Props {}

interface State {
  userName: string
}

export interface UserContextProps extends State {
  setUserName?: (userName: string) => void
  alertName?: () => void
}

// **************************************************
// *****  Context
// **************************************************
const defaultValues = {
  userName: '',
  setUserName: () => {},
  alertName: () => {},
}

const UserContext = React.createContext<UserContextProps>(defaultValues)

// **************************************************
// *****  Component
// **************************************************
class UserContextProvider extends React.PureComponent<Props, State> {
  // **************************************************
  // *****  Life cycle
  // **************************************************
  constructor(props: Props) {
    super(props)

    this.state = {
      userName: '',
    }
  }

  // **************************************************
  // *****  Handlers
  // **************************************************
  setUserName = (userName: string) => {
    this.setState({
      userName,
    })
  }

  alertName = () => {
    window.alert(this.state.userName)
  }

  // **************************************************
  // *****  Render
  // **************************************************
  render() {
    const { children } = this.props
    const { userName } = this.state

    return (
      <UserContext.Provider
        value={{
          setUserName: this.setUserName,
          userName,
          alertName: this.alertName,
        }}
      >
        {children}
      </UserContext.Provider>
    )
  }
}

// **************************************************
// *****  Exports
// **************************************************
export const UserContextConsumer = UserContext.Consumer
export default UserContextProvider
