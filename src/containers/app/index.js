import React, {PureComponent} from "react"

import Footer from "components/Footer"
import Routes from "./Routes"

export default class App extends PureComponent {
  render() {
    return (
      <>
        <main>
          <Routes />
        </main>
        <Footer />
      </>
    )
  }
}
