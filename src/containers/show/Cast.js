import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {H2, H3} from "components/labels"
import Loading from "components/Loading"

const CastItem = styled.div`
`

export default class Cast extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const {data} = this.props
    if (!data || !data.cast) return <Loading />
    return (
      <>
        {
          data.cast.map(({person}, i) => {
            return <CastItem key={`${person.id}-${i}`}> {person.name} </CastItem>
          })
        }
      </>
    )
  }
}
