import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {fetchASingleShow} from "store/actions"
import {H2, H3} from "components/labels"
import Loading from "components/Loading"
import Nav from "components/Nav"
import TopPanel from "components/TopPanel"

import Cast from "./Cast"

class Show extends PureComponent {
  static propTypes = {
    fetchASingleShow: PropTypes.func.isRequired,
    selectedShow: PropTypes.object,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {match} = this.props
    this.props.fetchASingleShow(match.params.id)
  }

  render() {
    const {selectedShow} = this.props
    if (!selectedShow) return <Loading />
    return (
      <>
        <Nav />
        <TopPanel>
          <H2 bold>Tv Bland</H2>
          {/* <Subheading>Tv show and web series database. <br />
            Create personalised schedules. Episode guide, cast, crew, and character information.</Subheading> */}
        </TopPanel>

        <H2>{selectedShow.name}</H2>
        <H3>Cast</H3>
        <Cast data={selectedShow._embedded} />
      </>
    )
  }
}

const mapState = (state) => ({
  selectedShow: state.data.selectedShow
})


const mapDispatch = {
  fetchASingleShow
}

export default connect(mapState, mapDispatch)(Show)
