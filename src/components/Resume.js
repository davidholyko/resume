import React, { Component } from 'react'
import InfoColumn from './columns/InfoColumn'
import ContentColumn from './columns/ContentColumn'
import ReactToPrint from 'react-to-print'

class Resume extends Component {
  render () {
    return (
      <div id="resume">
        <InfoColumn />
        <ContentColumn />
      </div>
    )
  }
}

class Print extends Component {
  render () {
    return (
      <React.Fragment>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <Resume ref={el => (this.componentRef = el)} />
      </React.Fragment>
    )
  }
}

export default Print
