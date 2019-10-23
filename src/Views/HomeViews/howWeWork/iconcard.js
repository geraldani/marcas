import React from 'react'

const Iconcard = ({ title, description, iconPath }) => {
  return (
    <div className='col-md col-6 d-flex justify-content-start flex-column px-4'>
      <div className='iconContainer'>
        <img src={iconPath} alt='icon' className='img-fluid' />
      </div>
      <h3 className='text-center'>{title}</h3>
      <p className='text-center text-normal'>{description}</p>
    </div>
  )
}

export default Iconcard
