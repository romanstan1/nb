import React, {PureComponent} from "react"
import styled from "styled-components"
import {P} from "components/labels"

const StyledLoading = styled.div`
  text-align: center;
  padding: 50px 0;
`

export default class Loading extends PureComponent {
  render() {
    return (
      <StyledLoading><P>Loading...</P></StyledLoading>
    )
  }
}
