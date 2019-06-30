import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {H3} from "components/labels"
import Rating from "components/Rating"
import media from "global/media"

const Wrapper = styled.li`
  list-style: none;
  display: flex-inline;
  border: 1px solid black;
  flex-direction: column;
  width: 210px;
  cursor: pointer;
  padding: 0px;
  margin: 20px;
  ${media.tablet`
    margin: 5px;
  `}
  img {
    display: block;
    width: 100%;
  }
`

export default class Thumbnail extends PureComponent {
  static propTypes = {
    listing: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  render() {
    const {listing, handleClick} = this.props
    const {name, image, rating} = listing.show

    return (
      <Wrapper onClick={() => handleClick(listing.show)}>
        <img src={image.medium} alt={name} />
        <H3 light>{rating}</H3>
        <Rating value={rating} />
        <H3>{name}</H3>
      </Wrapper>
    )
  }
}
