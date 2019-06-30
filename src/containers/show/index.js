import React, {PureComponent} from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import PropTypes from "prop-types"

import {fetchASingleShow} from "store/actions"
import {H2, H1, P} from "components/labels"
import Loading from "components/Loading"
import Nav from "components/Nav"
import TopPanel from "components/TopPanel"
import Rating from "components/Rating"
import media from "global/media"
import Cast from "./Cast"
import Details from "./Details"

const StyledH2 = styled(H2)`
  margin-top: 40px;
`
const ImageWrapper = styled.div`
  width: 30%;
 img {
    display: block;
    width: 100%;
    height: auto;
  }
  ${media.tablet`
    flex-direction: column;
    width: 100%;
  `}
`
const ShowHeadingSection = styled.div`
  display: flex;
  
  section {
    width: 70%;
    padding-left: 40px;
  }
  ${media.tablet`
    flex-direction: column;
    section {
      width: 100%;
      padding-left: 0px;
    }
  `}
`

const ColumnSection = styled.div`
  width: 48%;
  min-height: 200px;
  ${media.tablet`
    margin-bottom: 70px;
    width: 100%;
  `}
`

const StyledH1 = styled(H1)`
  padding-bottom: 15px;
`

const ColumnHeader = styled(H2)`
  padding-bottom: 15px;
`

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  padding: 50px;
  justify-content: space-between;
  ${media.tablet`
    flex-direction: column;
    margin-top: 20px;
    padding: 20px;
  `}
`

class Show extends PureComponent {
  static propTypes = {
    fetchASingleShow: PropTypes.func.isRequired,
    selectedShow: PropTypes.object,
    match: PropTypes.object.isRequired
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const {match} = this.props
    this.props.fetchASingleShow(match.params.id)
  }

  render() {
    const {selectedShow} = this.props
    if (!selectedShow) return <Loading />
    console.log("selectedShow:", selectedShow)

    return (
      <>
        <Nav />
        <TopPanel noMargin>
          <StyledH2 bold>Tv Bland</StyledH2>
          <ShowHeadingSection>
            <ImageWrapper>
              <img src={selectedShow.image.original} alt="" />
            </ImageWrapper>
            <section>
              <Rating value={selectedShow.rating} id={selectedShow.id} />
              <StyledH1>{selectedShow.name}</StyledH1>
              <P light>{selectedShow.summary.replace(/<\/?[^>]+(>|$)/g, "")}</P>
            </section>
          </ShowHeadingSection>
        </TopPanel>

        <Grid>
          <ColumnSection>
            <ColumnHeader>Show Info</ColumnHeader>
            <Details
              streamedOn={selectedShow.network.name}
              schedule={selectedShow.schedule.days}
              status={selectedShow.status}
              genres={selectedShow.genres} />
          </ColumnSection>

          <ColumnSection>
            <ColumnHeader>Starring</ColumnHeader>
            <Cast data={selectedShow._embedded} />
          </ColumnSection>
        </Grid>
      </>
    )
  }
}

const mapState = (state) => ({
  selectedShow: state.data.selectedShow
})


const mapDispatch = {
  fetchASingleShow
}

export default connect(mapState, mapDispatch)(Show)
