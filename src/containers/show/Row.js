import styled from "styled-components"

import {greys} from "global/colors"
import media from "global/media"

const RowItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid ${greys.light};
  padding: 10px 0; 
  min-height: 50px;
  > div {
    width: 20%;
  }
  p {
    width: 40%;
    margin: 0;
  }
  ${media.tablet`
    border-bottom: 0px solid ${greys.light};
    width: 100%;
  `}
`

export default RowItem
