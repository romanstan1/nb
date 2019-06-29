import React, {PureComponent} from "react"
import styled from "styled-components"

import media from "global/media"
import {greys} from "global/colors"
import {H1, H2, H3, P} from "../components/labels"

const TopPanel = styled.div`
  background: ${greys.light};
  padding: 50px;
  ${media.tablet`
    padding: 20px 10px;
  `}
`

const Subheading = styled(H3)`
  padding: 20px 0 40px 0;
  color: ${greys.medium};
`

export default class Home extends PureComponent {
  render() {
    return (
      <>
        <TopPanel>
          <H2 bold>Tv Bland</H2>
          <Subheading>Tv show and web series database. <br />
          Create personalised schedules. Episode guide, cast, crew, and character information.</Subheading>
        </TopPanel>

        <P bold>Home Page</P>
        <P>Home Page</P>
        <P light>Home Page</P>
      </>
    )
  }
}
