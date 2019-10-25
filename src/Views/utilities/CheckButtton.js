import React from 'react'
import styled from 'styled-components'
import { COLORS } from './constants'

const CheckButtton = ({ value, title, description }) => {
  return (
    <Card>
      <Checkbox type='radio' value={value} name='radioButton' />
      <div>
        <h5>{title}</h5>
        <Description>
          {description}
        </Description>
      </div>
    </Card>
  )
}

const Description = styled.p`
  color: ${COLORS.darkGrey};
  font-size: .9em;
  line-height: 1.2;
`
const Checkbox = styled.input`
  margin-right: 1em;
  cursor: pointer;
`

const Card = styled.label`
  background-color: ${COLORS.lightGrey};
  display: flex;
  border-radius: 10px;
  border: solid 1px ${COLORS.mediumGray};
  padding: 15px 15px 8px 15px;
  margin-bottom: 20px;
  cursor: pointer;
`

export default CheckButtton
