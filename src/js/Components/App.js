import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import PageNotFound from './PageNotFound'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route
            path='/' exact
            render={ () => (
              <div className='container'>
                Boilerplate !!!
              </div>
            ) }
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    )
  }
}

export default App
