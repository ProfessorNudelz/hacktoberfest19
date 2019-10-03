import React, { Component } from 'react'
import Header from './header'
import Navbar from './navbar'

export default class layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}
