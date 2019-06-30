import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {greys} from "global/colors"

const Star = styled.li`
  list-style: none;
  margin: 50px 40px 50px 0;
  position: relative;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid ${greys.medium};
  border-left: 100px solid transparent;
  transform: rotate(35deg);
  opacity: 0.3;
  ${(props) => (props.active && "opacity: 1;")}
  &:before {
    border-bottom: 80px solid ${greys.medium};
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: ${greys.medium};
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid ${greys.medium};
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }
`

const Wrapper = styled.div`
  margin: 15px 0 10px 2px;
  height: 25px;
  position: relative;
  display: flex;
  text-align: left;
  ul {
    display: flex;
    transform: scale(0.1);
    transform-origin: top left; 
    height: 100%;
    width: 100%;
  }
`

export default class Rating extends PureComponent {
  static propTypes = {
    value: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }
  render() {
    const {value, id} = this.props
    const activeStars = Array(value).fill("")
    const remainingStars = Array(5 - value).fill("")
    return (
      <Wrapper>
        <ul>
          {activeStars.map((val, i) => <Star key={`star-active${i}-${id}`} active />)}
          {remainingStars.map((val, i) => <Star key={`star-${i}-${id}`} />)}
        </ul>
      </Wrapper>
    )
  }
}
