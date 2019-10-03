import React, { Component } from 'react'
import Head from 'next/head'

export default class header extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Hacktoberfest19</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <link rel="stylesheet" href="/static/bootstrap.min.css" />
          <link rel="stylesheet" href="/static/index.css" />
          <script src="/static/jquery.min.js" />
          <script src="/static/popper.min.js" />
          <script src="/static/bootstrap.min.js" />
        </Head>
      </div>
    )
  }
}
