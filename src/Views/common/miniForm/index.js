import React from 'react'
import RegisterCard from '../cards/register/RegisterCard'
import { StyledTitle } from './styles'

const FormCard = ({ data, title, buttonName, className }) => {
  return (
    <RegisterCard data={data} buttonName={buttonName} className={className}>
      <StyledTitle className='px-4'>{title}</StyledTitle>
    </RegisterCard>
  )
}
export default FormCard
