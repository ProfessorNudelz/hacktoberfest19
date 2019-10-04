import React, { Component } from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'
import Card from '../components/card'

export default class index extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron />
        <h1>Contributers</h1>
        <hr />
        <Card />
      </Layout>
    )
  }
}
