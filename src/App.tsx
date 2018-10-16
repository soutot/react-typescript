import * as React from 'react'
import { Helmet } from 'react-helmet'

import Routes from './router/routes'
import favicon from './assets/logo.png'

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Super Digital</title>
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <meta name="description" content="Super Digital" />

          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
        <Routes />
      </React.Fragment>
    )
  }
}

export default App
