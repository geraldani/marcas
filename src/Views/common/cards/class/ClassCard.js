import React from 'react'
import { StyledSublabel } from '../../../GlobalStyles'
import CkeckInput from '../../check/CkeckInput'
import { StylesCkeckInput } from './styles'

const ClassCard = ({ title, items }) => {
  return (
    <div className='card mb-3'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <StyledSublabel className='my-0'>{title}</StyledSublabel>
      </div>
      <div className='card-body'>
        <div>
          {
            items.map((item, index) => {
              return (
                <CkeckInput
                  key={item.value}
                  title={item.description}
                  styles={index !== 0 && StylesCkeckInput}
                  value={item.value}
                  controller={index === 0}
                />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ClassCard
