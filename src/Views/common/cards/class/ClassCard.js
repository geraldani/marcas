import React from 'react'
import { StyledSublabel } from '../../../styles/GlobalStyles'
import CkeckInput from '../../check/CkeckInput'
import { StylesCkeckInput } from './styles'
import { upperFirstLetter } from '../../../../utils'

const ClassCard = ({ name, title, description, onChange }) => {
  return (
    <div className='card mb-3'>
      <div className='card-header bg-white py-3' style={{ borderBottomWidth: '2px' }}>
        <StyledSublabel className='my-0'>{title} - {upperFirstLetter(name)}</StyledSublabel>
      </div>
      <div className='card-body'>
        <div>
          {/*<h6>{upperFirstLetter(name)}</h6>*/}
          <CkeckInput
            label={description}
            // styles={StylesCkeckInput}
            name={name}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ClassCard
