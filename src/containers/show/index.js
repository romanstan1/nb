import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import media from "global/media"
import {greys} from "global/colors"
import {fetchTodaysShows} from "store/actions"
import {H2, H3} from "../../components/labels"
import Feed from "./Feed"


class Show extends PureComponent {
  static propTypes = {
  }

  render() {
    return (
      <>
        Show page
      </>
    )
  }
}

const mapDispatch = {
  fetchTodaysShows
}

export default connect(null, mapDispatch)(Show)
