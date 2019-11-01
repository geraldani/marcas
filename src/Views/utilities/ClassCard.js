import React from 'react'
import { StyledSublabel } from '../GlobalStyles'
import { css } from 'styled-components'
import CkeckInput from './CkeckInput'
import { COLOR } from './constants'

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

const StylesCkeckInput = css`
    color: ${COLOR.darkGrey + '8c'};
    font-weight: normal;
    font-size: 13px;
    padding-right: 1.5em;
`
export default ClassCard
