import React, { Component } from 'react'

export default class jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron">
        <h1 class="display-4">Hacktoberfest19</h1>
        <p class="lead">A repositry for all new contributors to open source!</p>
        <hr class="my-4" />
        <p>Simply add you name, Github profile, city and country to the list below!</p>
        <a class="btn btn-primary btn-lg" href="#" role="button">Github Repositry</a>
      </div>
    )
  }
}
