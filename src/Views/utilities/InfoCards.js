import React from 'react'
import Button from './Button'

const CardInfo = (props) => {

  return (
    <div className={`row mx-0 mb-4 ${props.index % 2 === 0 ? 'justify-content-start' : 'justify-content-end'}`}>
      <div className='col-12 col-md-10 col-xl-8 mb-4'>
        <div className='card shadow-medium'>
          <div className={`card-body d-flex flex-column ${props.index % 2 === 0 ? 'align-items-start' : 'align-items-end'}`}>
            <h4 className='card-title mb-4' style={{ color: '#4a4a4a' }}>{props.title}</h4>
            <p className={`card-subtitle mb-4 text-muted text-normal ${props.index % 2 === 0 ? 'text-left' : 'text-right'}`}>{props.description}</p>
            <Button title={props.buttonTitle} link={props.link} />
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardInfo
