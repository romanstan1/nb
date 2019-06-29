import React from "react"
import styled from "styled-components"

import media from "../global/media"

const StyledH1 = styled.h1`
  font-size: 50px;
  font-weight: 400;
  ${media.tablet`
    font-size: 40px;
  `}
  ${(props) => (props.bold && "font-weight: 700;")}
  ${(props) => (props.light && "font-weight: 300;")}
`

const StyledH2 = styled.h2`
  font-size: 30px;
  font-weight: 400;
  ${media.tablet`
    font-size: 25px;
  `}
  ${(props) => (props.bold && "font-weight: 700;")}
  ${(props) => (props.light && "font-weight: 300;")}
`

const StyledH3 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  ${media.tablet`
    font-size: 18px;
  `}
  ${(props) => (props.bold && "font-weight: 700;")}
  ${(props) => (props.light && "font-weight: 300;")}
`

const StyledPara = styled.p`
  font-size: 16px;
  font-weight: 400;
  ${media.tablet`
    font-size: 14px;
  `}
  ${(props) => (props.bold && "font-weight: 700;")}
  ${(props) => (props.light && "font-weight: 300;")}
`

export const H1 = (props) => <StyledH1 {...props} />

export const H2 = (props) => <StyledH2 {...props} />

export const H3 = (props) => <StyledH3 {...props} />

export const P = (props) => <StyledPara {...props} />
