import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
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
  static propTypes = {
    listing: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  render() {
    const {listing, handleClick} = this.props
    const {name, image, id, rating} = listing.show

    return (
      <Wrapper onClick={handleClick} data-id={id}>
        <img src={image.medium} alt={name} />
        <H3 light>{rating}</H3>
        <H3>{name}</H3>
        {/* <H3>{id}</H3> */}
      </Wrapper>
    )
  }
}
