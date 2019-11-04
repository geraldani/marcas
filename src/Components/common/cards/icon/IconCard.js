import React from 'react'
import { StyledIconContainer, StyledTitle, StyledText } from './styles'

const IconCard = ({ title, description, iconPath }) => {
  return (
    <div className='col-md col-6 d-flex justify-content-start flex-column px-4'>
      <StyledIconContainer>
        <img src={iconPath} alt='icon' className='img-fluid' />
      </StyledIconContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledText className='text-center text-normal'>{description}</StyledText>
    </div>
  )
}

export default IconCard
