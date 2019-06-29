import React from "react"
import {Route} from "react-router-dom"

import Home from "../Home"
import About from "../About"

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </>
  )
}

export default Routes
