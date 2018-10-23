import * as React from 'react'
import { Helmet } from 'react-helmet'

import Routes from './router/routes'
import favicon from './assets/logo-reactapp.png'

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <div style={{ padding: 0, margin: 0 }}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>ReactApp</title>
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            />
            <meta name="description" content="ReactApp" />

            <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
          </Helmet>
          <Routes />
        </div>
      </React.Fragment>
    )
  }
}

export default App
