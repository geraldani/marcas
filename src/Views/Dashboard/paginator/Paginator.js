import React from 'react'
import PropTypes from 'prop-types'
import { IoIosArrowBack as ArrowBack, IoIosArrowForward as ArrowNext } from 'react-icons/io'
import { StyledPageItem } from './styles'

const Paginator = ({ itemsPerPage, currentPage, totalItems, onChangePage }) => {
  let iteratorNro = parseInt(totalItems / itemsPerPage)
  if (totalItems % itemsPerPage !== 0 && iteratorNro !== 0) iteratorNro++

  if (iteratorNro > 1) {
    return (
      <div className='d-flex justify-content-center mb-0'>
        <StyledPageItem
          disabled={currentPage === 1}
          onClick={() => onChangePage(currentPage - 1)}
        >
          <ArrowBack />
        </StyledPageItem>
        {
          [...Array(iteratorNro)].map((e, i) => (
            <StyledPageItem
              key={i}
              active={i + 1 === currentPage}
              onClick={() => onChangePage(i + 1)}
            >
              {i + 1}
            </StyledPageItem>
          ))
        }
        <StyledPageItem
          disabled={currentPage === iteratorNro}
          onClick={() => onChangePage(currentPage + 1)}
        >
          <ArrowNext />
        </StyledPageItem>
      </div>
    )
  } else {
    return null
  }
}

Paginator.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  onChangePage: PropTypes.func
}

export default Paginator
