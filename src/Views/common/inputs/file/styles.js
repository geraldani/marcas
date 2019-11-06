import styled from 'styled-components'
import { COLOR } from '../../constants'

const StyledFileName = styled.span`
  border-bottom-left-radius: 0.25rem;
  border-top-left-radius: 0.25rem;
  border: 1px solid #ced4da;
  border-right: none;
  padding: 0.375rem 0.75rem;
  width: 100%;
  font-weight: normal;
  font-style: italic;
  color: ${COLOR.darkGrey};
  opacity: 0.7;
`
const StyledFileButton = styled.label`
  background-color: ${COLOR.blue};
  border: 1px solid ${COLOR.blue};
  border-top-right-radius: 0.25rem;
  border-bottom-right-radius: 0.25rem;
  color: #fff;
  height: 39px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  margin-bottom: 0;
  cursor:pointer;transition: all 500ms;
  &:hover{
    opacity: 0.7;
  }
  & input{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=0);
    opacity: 0;
    outline: none;
    cursor: inherit;
    display: block;
  }
`
export { StyledFileName, StyledFileButton }
