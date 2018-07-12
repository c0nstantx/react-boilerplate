import React, { Component } from 'react'
import Header from './Header'

class Home extends Component {
  render () {
    return (
      <div>
        <Header/>
        <div className={'home'}>
          <h1>New Project !!</h1>
        </div>
      </div>
    )
  }
}

export default Home
