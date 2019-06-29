import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"

import media from "global/media"
import {greys} from "global/colors"
import Masonry from "react-masonry-component"
import {H1, H2, H3, P} from "../../components/labels"

const Subheading = styled(H3)`
  padding: 20px 0 40px 0;
  color: ${greys.medium};
`

const Wrapper = styled.div`
  /* background: ${greys.light}; */
  padding: 20px 50px;
  ${media.tablet`
    padding: 20px 10px;
  `}
`

class Feed extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Subheading>Today&apos;s shows</Subheading>
      </Wrapper>
    )
  }
}

const mapState = (state) => ({
  allShows: state.data.allShows,
  page: state.data.page
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(Feed)
