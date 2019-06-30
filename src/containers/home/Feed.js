import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import media from "global/media"
import {greys} from "global/colors"
import Masonry from "react-masonry-component"
import {H3, P} from "components/labels"
import {loadMore} from "store/actions"
import Thumbnail from "./Thumbnail"

const Subheading = styled(H3)`
  padding: 20px 0 10px 10px;
  color: ${greys.medium};
`

const Wrapper = styled.div`
  padding: 20px 40px;
  ${media.tablet`
    padding: 10px 10px;
  `}
`
const Loading = styled.div`
  text-align: center;
  padding: 50px 0;
`
const LoadMoreButton = styled.div`
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
  color: ${greys.black};
  background: ${greys.light};
  &:hover {
    background: ${greys.lightest};
  }
`

const masonryOptions = {
  transitionDuration: 500
}

const PAGE_SIZE = 10

class Feed extends PureComponent {
  static propTypes = {
    allShows: PropTypes.array,
    page: PropTypes.number.isRequired,
    loadMore: PropTypes.func.isRequired
  }
  loadMore = () => {
    this.props.loadMore()
  }
  handleClick = (e) => {
    console.log("e.target.value:", e.target.value)
  }
  render() {
    const {allShows, page} = this.props
    if (!allShows) {
      return (
        <Loading><P>Loading...</P></Loading>
      )
    }
    const thumbnails = allShows.slice(0, page * PAGE_SIZE).map((listing) =>
      <Thumbnail
        key={listing.id}
        handleClick={this.handleClick}
        listing={listing} />
    )
    return (
      <Wrapper>
        <Subheading>Today&apos;s shows</Subheading>
        <Masonry
          elementType="ul"
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}>
          {thumbnails}
        </Masonry>
        <LoadMoreButton onClick={this.loadMore}>Load more</LoadMoreButton>
      </Wrapper>
    )
  }
}

const mapState = (state) => ({
  allShows: state.data.allShows,
  page: state.data.page
})

const mapDispatch = {
  loadMore
}

export default connect(mapState, mapDispatch)(Feed)
