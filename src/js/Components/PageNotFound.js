import React, { Component } from 'react'
import Header from "./Header";

class PageNotFound extends Component {

  render () {
    return (
      <div>
        <Header/>
        <div className={'not-found'}>
          PAGE '{location.pathname}' NOT FOUND
        </div>
      </div>
    )
  }
}

export default PageNotFound
