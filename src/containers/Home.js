import React, {PureComponent} from "react"
import {H1, H2, H3, P} from "../components/labels"

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <H1 bold>Home Page</H1>
        <H1>Home Page</H1>
        <H2 bold>Home Page</H2>
        <H2>Home Page</H2>
        <H3 bold>Home Page</H3>
        <H3>Home Page</H3>
        <P bold>Home Page</P>
        <P>Home Page</P>
        <P light>Home Page</P>
      </>
    )
  }
}
