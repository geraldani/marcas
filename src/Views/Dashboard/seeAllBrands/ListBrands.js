import React from 'react'
import TableFilter from '../table/TableFilter'
import Paginator from '../paginator/Paginator'
import SearcherForm from '../searcher/SearcherForm'

const ListBrands = ({ formStructure, onClickDetails, tableInformation }) => {
  return (
    <>
      <div className='row m-0'>
        <div className='col-12 m-auto'>
          <SearcherForm formData={formStructure} />
        </div>
      </div>
      <div className='col px-4 my-4'>
        <TableFilter information={tableInformation} onClick={onClickDetails} hoverable />
      </div>
      <div className='col mb-5'>
        <Paginator />
      </div>
    </>
  )
}

export default ListBrands
