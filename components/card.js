import React, { Component } from 'react'
import data from '../contributors'

export default class card extends Component {
  // Import the contributers object and maps over them to create a card for each contributor
  mapper () {
    return data.contributors.map(contributor => {
      return (
        <div className="col-sm-4" key={contributor.username}>
          <div className="card">
            <h5 className="card-header">{contributor.name}</h5>
            <div className="card-body">
              <h5 className="card-title">{contributor.username}</h5>
              <p className="card-text"><a href={contributor.githubURL}>{contributor.githubURL}</a></p>
              <p className="card-text">{contributor.city}, {contributor.country}</p>
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        {/* Calls the mapper function */}
        {this.mapper()}
      </div>
    )
  }
}
