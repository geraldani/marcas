import React from 'react'
import { StyledSublabel } from '../../../GlobalStyles'
import CkeckInput from '../../check/CkeckInput'
import { StylesCkeckInput } from './styles'

const ClassCard = ({ name, items, onChange }) => {
  return (
    <div className='card mb-3'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <StyledSublabel className='my-0'>{name}</StyledSublabel>
      </div>
      <div className='card-body'>
        <div>
          {
            items.map((item, index) => {
              return (
                <CkeckInput
                  key={item.name}
                  label={item.description}
                  styles={index !== 0 && StylesCkeckInput}
                  name={item.name}
                  onChange={onChange}
                />)
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ClassCard
