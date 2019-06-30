import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import media from "global/media"
import {greys} from "global/colors"
import {fetchTodaysShows} from "store/actions"
import {H2, H3} from "../../components/labels"
import Feed from "./Feed"

const TopPanel = styled.div`
  background: ${greys.light};
  padding: 50px;
  ${media.tablet`
    padding: 20px;
  `}
`

const Subheading = styled(H3)`
  padding: 20px 0 20px 0;
  color: ${greys.medium};
`

class Home extends PureComponent {
  static propTypes = {
    fetchTodaysShows: PropTypes.func.isRequired
  }
  componentDidMount() {
    this.props.fetchTodaysShows()
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

const mapDispatch = {
  fetchTodaysShows
}

export default connect(null, mapDispatch)(Home)
