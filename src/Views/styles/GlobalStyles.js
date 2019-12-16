import styled, { createGlobalStyle, css } from 'styled-components'
import { COLOR, SCREEN } from '../../utils/constants'

const StyledScroll = css`
::-webkit-scrollbar {
    width: 10px!important;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${COLOR.primary + 'c7'};
  }
    ::-webkit-scrollbar-track {
    background: ${COLOR.mediumGray};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${COLOR.primary};
  }

`
const GlobalStyles = createGlobalStyle`
  ${StyledScroll};
  input:focus{
    outline: none!important;
    box-shadow: none!important;
  }
  p{
    margin: 0;
  }
  button:focus{
    outline: none!important;
  }
`

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
const color = (color, disabled) => {
  if (disabled) return COLOR.darkGrey
  else {
    if (color) return color
    else return COLOR.black
  }
}
const StyledSublabel = styled.label`
  color: ${props => color(props.color, props.disabled)};
  font-size: 15px;
  margin-top: 1.5rem;
  margin-bottom: 0;
  text-align: left;
  width: 100%;
  &>*{
    margin-top: 0.5em;
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
  marginBottom,
  GlobalStyles,
  StyledScroll
}
