import React, { Component } from 'react'

export default class jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">Hacktoberfest19</h1>
        <p className="lead">A repositry for all new contributors to open source!</p>
        <hr className="my-4" />
        <p>Simply add you name, Github profile, city and country to the list below!</p>
        <a className="btn btn-primary btn-lg" href="https://github.com/ProfessorNudelz/hacktoberfest19" role="button">Github Repositry</a>
      </div>
    )
  }
}
