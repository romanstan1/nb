import React, {PureComponent} from "react"
import PropTypes from "prop-types"

import {P} from "components/labels"
import Row from "./Row"

export default class Details extends PureComponent {
  static propTypes = {
    streamedOn: PropTypes.string.isRequired,
    schedule: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired
  }

  render() {
    const {streamedOn, schedule, status, genres} = this.props
    return (
      <>
        <Row table>
          <P>Streamed on</P><P light>{streamedOn} </P>
        </Row>
        <Row table>
          <P>Schedule</P><P light>{schedule.join(", ")} </P>
        </Row>
        <Row table>
          <P>Status</P><P light>{status} </P>
        </Row>
        <Row table>
          <P>Genres</P><P light>{genres.join(", ")} </P>
        </Row>
      </>
    )
  }
}
