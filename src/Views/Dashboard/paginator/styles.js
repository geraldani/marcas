import styled from 'styled-components'
import { COLOR } from '../../../utils/constants'

const StyledPageItem = styled.li`
  &.page-item:focus,
  .page-link:focus{
    outline: none!important;
  }
  &.page-item .page-link{
    border: none;
    color: ${COLOR.primary};
    background: none;
  }
  &.page-item.active .page-link{
    background-color: ${COLOR.primary};
    border-radius: 50%;
  }
  &.page-item:first-child .page-link,
  &.page-item:last-child .page-link{
    color: ${COLOR.darkGrey};
  }
  &.page-item.disabled:first-child .page-link,
  &.page-item.disabled:last-child .page-link{
    color: ${COLOR.mediumGray};
    background: none;
  }
`
export {
  StyledPageItem
}
