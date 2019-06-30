import React, {PureComponent} from "react"
// import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {fetchASingleShow} from "store/actions"
import {H2} from "components/labels"
import Loading from "components/Loading"

class Show extends PureComponent {
  static propTypes = {
    fetchASingleShow: PropTypes.func.isRequired,
    selectedShow: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    const {selectedShow, match} = this.props
    if (!selectedShow) {
      this.props.fetchASingleShow(match.params.id)
    }
  }

  render() {
    const {selectedShow} = this.props
    if (!selectedShow) return <Loading />
    return (
      <div>
        <H2>{selectedShow.name}</H2>
      </div>
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
