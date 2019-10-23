import React from 'react'

const Card = ({ title, description, iconPath }) => {
  return (
    <>
      <div className='iconContainer'>
        <img src={iconPath} alt='icon' className='img-fluid' />
      </div>
      <h3 className='text-center'>{title}</h3>
      <p className='text-center'>{description}</p>
    </>
  )
}

export default Card
