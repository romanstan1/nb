import React, {PureComponent} from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import {P} from "components/labels"
import Loading from "components/Loading"
import {greys} from "global/colors"
import Row from "./Row"

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%; 
  }
  > div {
    background: ${greys.light};
    width: 50px;
    height: 50px;
    border-radius: 100%; 
  }
`

export default class Cast extends PureComponent {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const {data} = this.props
    if (!data || !data.cast) return <Loading />
    return (
      <>
        {
          data.cast.map(({person, character}, i) =>
            <Row key={`${person.id}-${i}`}>
              <ProfilePicture>
                {person.image
                  ? <img src={person.image.medium} alt={person.name} />
                  : <div />}
              </ProfilePicture>
              <P>{person.name} </P>
              <P light>{character.name} </P>
            </Row>
          )
        }
      </>
    )
  }
}
