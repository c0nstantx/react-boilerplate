import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <header className={'header'}>
        <div className={'logo'}>
          <img src={'logo.svg'} />
        </div>
        <div className={'content'}>
          React Boilerplate Project
        </div>
      </header>
    )
  }
}

export default Header
