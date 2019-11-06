import styled from 'styled-components'
import { COLOR } from '../../common/constants'

const StyledTotal = styled.h4`
  text-align: center;
  margin-top: 1.5em;
  font-size: 2rem;
`

const StyledItem = styled.li`    
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  &:not(:last-child){
    border-bottom: solid 1px rgba(0, 0, 0, 0.125);
  }
`
const StyledType = styled.span`
  color: ${COLOR.black};
  font-size: 1em;
  margin-left: 1em;
`
const StyledValue = styled.span`
  font-size: 1em;
  margin-right: 1em;
  color: ${COLOR.darkGrey};

`

const StyledFieldContainer = styled.div`
  border: solid 1px rgba(0, 0, 0, 0.125);
  margin: 25px auto;
  border-radius: 12px;
  padding-right: 0!important;
  padding-left: 0!important;
`
export { StyledTotal, StyledItem, StyledType, StyledValue, StyledFieldContainer }
