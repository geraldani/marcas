import React from 'react'
import { COLORS } from './constants'

const CardSteps = ({ title, children }) => {
  return (
    <div className='card shadow-card border-0'>
      <div className='card-header py-3  pl-5' style={{ backgroundColor: COLORS.lightGrey }}>
        <h4 className='mb-0'>{title}</h4>
      </div>
      <div className='card-body pl-5'>
        {children}
      </div>
    </div>
  )
}

export default CardSteps
