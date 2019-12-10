import styled from 'styled-components'
import { COLOR } from '../../../../utils/constants'

const paddingCard = 1 + 'rem'
const cardBorderWidth = 1 + 'px'
const cardBorderRadius = 10 + 'px'

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: ${props => props.color || COLOR.white};
  background-clip: border-box;
  border: solid ${cardBorderWidth} ${COLOR.border};
  border-radius: ${cardBorderRadius};
  padding: ${paddingCard};
  box-shadow: ${props => props.shadow ? '0 0 1.1rem rgba(0, 0, 0, 0.15)' : 'none'};
  p{
    margin: 0!important;
  }
`

const StyledHeaderCard = styled.div`
  position: relative;
  padding-bottom: ${paddingCard};
  &:before{
    content: '';
    position: absolute;
    width: calc(100% + (${paddingCard}*2));
    height: ${cardBorderWidth};
    bottom:0;
    left: -${paddingCard};
    background-color: ${COLOR.border};
  }
`

const StyledHeaderBody = styled.div`
  padding-top: ${paddingCard};
`

const StyledHeaderFooter = styled.div`
  padding-top: ${paddingCard};
`

export {
  StyledCard,
  StyledHeaderCard,
  StyledHeaderBody,
  StyledHeaderFooter
}
