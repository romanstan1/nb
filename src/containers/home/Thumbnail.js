import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {P} from "components/labels"
import Rating from "components/Rating"
import media from "global/media"

const Wrapper = styled.li`
  list-style: none;
  display: flex-inline;
  flex-direction: column;
  width: 210px;
  cursor: pointer;
  padding: 0px;
  margin: 20px;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0,0,0,0.0);
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    ${media.tablet`
      transform: scale(1);
    `}
  }
  ${media.tablet`
    width: 180px;
    margin: 5px;
  `}
  img {
    display: block;
    width: 100%;
  }
`

const Title = styled(P)`
  min-height: 60px;
  padding: 2px;
`

export default class Thumbnail extends PureComponent {
  static propTypes = {
    listing: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
  }
  render() {
    const {listing, handleClick} = this.props
    const {name, image, rating, id} = listing.show

    return (
      <Wrapper onClick={() => handleClick(listing.show)}>
        <img src={image.medium} alt={name} />
        <Rating value={rating} id={id} />
        <Title>{name}</Title>
      </Wrapper>
    )
  }
}
