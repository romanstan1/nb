import React, {PureComponent} from "react"
import styled from "styled-components"
import {greys} from "global/colors"

const StyledLoading = styled.div`
  text-align: center;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: ${greys.medium};
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
  @keyframes bounce {
    to {
      opacity: 0.3;
      transform: translate3d(0, -1rem, 0);
    }
  }
`

export default class Loading extends PureComponent {
  render() {
    return (
      <StyledLoading>
        <div />
        <div />
        <div />
      </StyledLoading>
    )
  }
}
