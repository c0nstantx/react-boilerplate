import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import PageNotFound from './PageNotFound'
import Home from "./Home";

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route
            path='/' exact component={Home}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
