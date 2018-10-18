import * as React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Template from '../components/Template/Template'
import Home from '../components/Home/Home'
import SignUp from '../components/SignUp/SignUp'
import UserContext from '../context/UserContext'

const Routes = () => (
  <Router>
    <Switch>
      <Template>
        <UserContext>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
        </UserContext>
      </Template>
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)

export default Routes
