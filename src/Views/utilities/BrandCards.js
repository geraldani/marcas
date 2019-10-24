import React from 'react'

const BrandCards = ({ number, description }) => {
  return (
    <div className='col-3'>
      <h4>{number}</h4>
      <p>{description}</p>
    </div>
  )
}

export default BrandCards
