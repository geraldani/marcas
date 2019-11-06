import React from 'react'
import { StyledLinkImage } from './styles'
import { COLOR } from '../constants'

const logo = 'https://img.pngio.com/melia-expansion-melia-hotels-international-brand-png-1060_328.png'

const Logo = ({ className = '' }) => {
  return (
    <StyledLinkImage className={className} to='/'>
      <img
        src={logo}
        alt='brand'
        className='img-fluid'
        style={{ background: COLOR.mediumGray, borderRadius: '14px', padding: '5px' }}
      />
    </StyledLinkImage>
  )
}

export default Logo
