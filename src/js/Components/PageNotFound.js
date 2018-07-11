import React, { Component } from 'react'

class PageNotFound extends Component {

  render () {
    return (
      <div>
        <h1>404: PAGE '{location.pathname}' NOT FOUND</h1>
      </div>
    )
  }
}

export default PageNotFound
