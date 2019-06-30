import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {greys} from "global/colors"
import {fetchTodaysShows} from "store/actions"
import {H2, H3} from "components/labels"
import TopPanel from "components/TopPanel"
import Feed from "./Feed"

const Subheading = styled(H3)`
  padding: 20px 0 20px 0;
  color: ${greys.medium};
`

class Home extends PureComponent {
  static propTypes = {
    allShows: PropTypes.array,
    fetchTodaysShows: PropTypes.func.isRequired
  }
  componentDidMount() {
    if (!this.props.allShows) this.props.fetchTodaysShows()
  }
  render() {
    return (
      <>
        <TopPanel>
          <H2 bold>Tv Bland</H2>
          <Subheading>Tv show and web series database. <br />
          Create personalised schedules. Episode guide, cast, crew, and character information.</Subheading>
        </TopPanel>
        <Feed />
      </>
    )
  }
}

const mapState = (state) => ({
  allShows: state.data.allShows
})

const mapDispatch = {
  fetchTodaysShows
}

export default connect(mapState, mapDispatch)(Home)
