import styled from "styled-components"

import media from "global/media"
import {greys} from "global/colors"

const Footer = styled.footer`
  background: ${greys.light};
  height: 240px;
  ${media.tablet`
    height: 120px;
  `}
`

export default Footer
