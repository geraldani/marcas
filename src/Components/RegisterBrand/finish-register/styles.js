import styled from 'styled-components'
import { COLOR } from '../../common/constants'

const StyledImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin: 3em auto 2em auto;
  border-radius: 50%;
`

const StyledSubtitle = styled.p`
  margin-bottom: 0;
  color: ${COLOR.textColor};
  line-height: 1.2;
`
export { StyledImage, StyledSubtitle }
