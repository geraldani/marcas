import React from 'react'
import { IoIosArrowBack as ArrowBack, IoIosArrowForward as ArrowNext } from 'react-icons/io'
import { StyledPageItem } from './styles'

const Paginator = () => {
  return (
    <ul className='pagination justify-content-center mb-0'>
      <StyledPageItem className='page-item'>
        <a className='page-link' href='#' tabIndex='-1' aria-disabled='true'><ArrowBack/></a>
      </StyledPageItem>

      <StyledPageItem className='page-item'>
        <a className='page-link' href='#'>1</a>
      </StyledPageItem>

      <StyledPageItem className='page-item active'>
        <a className='page-link' href='#'>2</a>
      </StyledPageItem>

      <StyledPageItem className='page-item'>
        <a className='page-link' href='#'>3</a>
      </StyledPageItem>

      <StyledPageItem className='page-item disabled'>
        <a className='page-link' href='#'><ArrowNext/></a>
      </StyledPageItem>
    </ul>
  )
}

export default Paginator
