import React from 'react'
import styled from 'styled-components'

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

const StyledIconContainer = styled.div`
  background-color: #fafafa;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & img{
    width: 40%;
  }
`
const StyledTitle = styled.h3`
  font-size: 1.05rem;
  margin-top: 0.8rem;
  margin-bottom: 0.4rem;
  text-align: center;
`
const StyledText = styled.p`
  text-align: center;
  color: #9e9e9e;
  font-weight: normal;
  font-size: 16px;
  line-height: 1.3;
`

export default IconCard
