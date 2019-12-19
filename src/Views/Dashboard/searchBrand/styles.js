import styled from 'styled-components'
import { COLOR } from '../../../utils/constants'

const size = 21
const StyledTab = styled.button`
  border: none;
  background: none;
  display: inline-flex;
  padding: 0 0 1rem 0;
  margin-right: 30px;
  align-items: center;
  span{
    background: ${COLOR.primary};
    color: ${COLOR.white};
    text-align: center;
    font-size: 13px;
    border-radius: 50%;
    height: ${size}px;
    width: ${size}px;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover,
  &.active{
    box-shadow: inset 0 -4px ${COLOR.primary};
    color: ${COLOR.primary};
    font-weight: 500;
  }
`

const StyledInfo = styled.div`
  h6{
    color: ${COLOR.darkGrey};
    padding-top: 1rem;
  }
  p{
    color: ${COLOR.textColor};
    font-weight: normal;
  }

`
export {
  StyledTab,
  StyledInfo
}
