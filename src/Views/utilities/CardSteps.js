import React from 'react'
import { COLOR } from './constants'

const CardSteps = (props) => {
  const { title, children, style } = props
  return (
    <div className='card shadow-card border-0' style={style}>
      <div className='card-header py-3  pl-5' style={{ backgroundColor: COLOR.lightGrey }}>
        <h4 className='mb-0'>{title}</h4>
      </div>
      <div className='card-body p-0'>
        <form>
          {children}
        </form>
      </div>
    </div>
  )
}

export default CardSteps
