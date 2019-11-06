import styled from 'styled-components'
import { COLOR, SCREEN } from '../../common/constants'

const StyledImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  margin: 3em auto 2em auto;
  border-radius: 50%;
  background-color: #e7f3fe;
  @media (max-width: ${SCREEN.md}px){
    width: 150px;
    height: 150px;  
  }
`
const StyledTitle = styled.h3`
  @media (max-width: ${SCREEN.md}px){
    font-size: 1.5rem;
  }
`

const StyledSubtitle = styled.p`
  margin-bottom: 0;
  color: ${COLOR.textColor};
  line-height: 1.2;
  @media (max-width: ${SCREEN.md}px){
    font-size: 1rem;
  }
`
export { StyledImage, StyledSubtitle, StyledTitle }
