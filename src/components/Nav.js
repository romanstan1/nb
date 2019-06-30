import React, {PureComponent} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

import {greys} from "global/colors"
import media from "global/media"

const Wrapper = styled.header`
  position: absolute;
  top:0;
  left: 0;
  background: ${greys.light};
  padding: 0 30px;
  ${media.tablet`
    padding: 0px;
  `}
  a {
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    padding: 5px 20px;
    text-decoration: none;
    color: ${greys.medium};
    &:hover {
      color:${greys.black};
    }
  }
`
export default class Nav extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Link to="/">Go back</Link>
      </Wrapper>
    )
  }
}
