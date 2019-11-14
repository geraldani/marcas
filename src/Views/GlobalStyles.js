import styled from 'styled-components'
import { COLOR, SCREEN } from './common/constants'

const StyledLegend = styled.p`
  color: ${COLOR.darkGrey};
  font-size: 0.78em;
  font-weight: normal;
  line-height: 1.2;
  width: 65%;
  @media (max-width: ${SCREEN.lg}px){
    width: 100%;
  }
`

const StyledLabelName = styled.label`
  font-size: 1.15em;
  @media(max-width: ${SCREEN.lg}px){
    font-size: 1em;
  }
`
const StyledSublabel = styled.label`
  color: ${props => props.disabled ? COLOR.darkGrey : COLOR.black};
  font-size: 15px;
  margin-top: 1.5rem;
  margin-bottom: 3px;
  text-align: left;
  width: 100%;
  &>*{
    margin-top: 0.5em;
  }
  @media (max-width: ${SCREEN.lg}px){
    margin-top: 0.7rem;
  }
`

const StyledDivMarginBottom = styled.div`
  margin-bottom: 7rem;
  @media (max-width: ${SCREEN.lg}px){
    margin-bottom: 3rem;
  }
`
const marginBottom = {
  marginBottom: '7rem'
}

export {
  StyledLegend,
  StyledSublabel,
  StyledLabelName,
  StyledDivMarginBottom,
  marginBottom
}
