import React, {PureComponent} from "react"
import {Link} from "react-router-dom"

import Routes from "./Routes"

export default class App extends PureComponent {
  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about-us">About</Link>
        </header>
        <main>
          <Routes />
        </main>
      </>
    )
  }
}
