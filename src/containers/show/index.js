import React, {PureComponent} from "react"
// import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {fetchASingleShow} from "store/actions"
import {H2, H3} from "components/labels"
import Loading from "components/Loading"
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
