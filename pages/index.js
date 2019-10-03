import React, { Component } from 'react'
import Layout from '../components/layout'
import Jumbotron from '../components/jumbotron'

export default class index extends Component {
  render() {
    return (
      <Layout>
        <Jumbotron />
        <h1>Contributers</h1>
        <hr />
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Jesse Lyon</h5>
                <p className="card-text"><a href="https://github.com/ProfessorNudelz">https://github.com/ProfessorNudelz</a></p>
                <p className="card-text">Melbourne, Australia</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Jesse Lyon</h5>
                <p className="card-text"><a href="https://github.com/ProfessorNudelz">https://github.com/ProfessorNudelz</a></p>
                <p className="card-text">Melbourne, Australia</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Jesse Lyon</h5>
                <p className="card-text"><a href="https://github.com/ProfessorNudelz">https://github.com/ProfessorNudelz</a></p>
                <p className="card-text">Melbourne, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
