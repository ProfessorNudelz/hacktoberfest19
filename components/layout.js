import React, { Component } from 'react'
import Header from './header'
import Navbar from './navbar'
import Footer from './footer'

export default class layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar />
        <div className="container">
          {this.props.children}
          <Footer />
        </div>
      </div>
    )
  }
}
