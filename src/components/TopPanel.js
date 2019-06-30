import styled from "styled-components"

import media from "global/media"
import {greys} from "global/colors"

const TopPanel = styled.div`
  background: ${greys.light};
  padding: 50px 50px 200px;
  margin-bottom: -200px;
  ${media.tablet`
    margin-bottom: 0px;
    padding: 20px;
  `}
`

export default TopPanel
