import React, {PureComponent} from "react"
import styled from "styled-components"
import {H3} from "../../components/labels"

const Wrapper = styled.li`
  img {
    display: block;
    width: 100%;
  }
  list-style: none;
  padding: 0px;
  margin: 10px;
  display: flex-inline;
  border: 1px solid black;
  flex-direction: column;
  width: 210px;
`

export default class Thumbnail extends PureComponent {
  render() {
    const {rating, name, image} = this.props

    return (
      <Wrapper>
        <img src={image.medium} alt={name} />
        <H3 light>{rating}</H3>
        <H3>{name}</H3>
      </Wrapper>
    )
  }
}
