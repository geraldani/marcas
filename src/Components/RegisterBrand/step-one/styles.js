import styled from 'styled-components'
import { COLOR } from '../../common/constants'
import { Link } from 'react-router-dom'

const StyledCountrySelected = styled.p`
  font-size: 1.1em;
  display: inline-block;
  padding: 5px 12px;
  border-radius: 15px;
  bottom:0;
  margin-bottom: -50px;
  position: absolute;
  left: 0;
  background-color: ${COLOR.aqua};
  color: ${COLOR.darkGrey}
`
const StyledAlert = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  background-color: ${COLOR.lighBlue};
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  & p{
    margin-bottom: 0;
  }
  & span{
    color: ${COLOR.blue};
    font-style: italic;
    font-weight: normal;
    font-size: 0.8em;
    cursor: pointer;
  }
`
const StyledPrice = styled(Link)`
  text-align: right;
  margin-bottom: 10px;
  font-weight: normal;
  font-style: italic;
  font-size: .8em;
`

export {
  StyledCountrySelected,
  StyledAlert,
  StyledPrice
}
