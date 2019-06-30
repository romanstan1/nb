import React from "react"
import {Route} from "react-router-dom"

import Home from "../home"
import Show from "../show"

const Routes = () => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/:id" component={Show} />
    </>
  )
}

export default Routes
