import React from 'react'
import { StyledLinkImage } from './styles'
import logoDark from '../../../assets/img/logo_laweb.png'
import logoLight from '../../../assets/img/logo laweb_white.png'

const Logo = ({ className = '', light }) => {
  return (
    <StyledLinkImage className={className} to='/'>
      <img
        src={light ? logoLight : logoDark}
        alt='brand'
        className='img-fluid'
      />
    </StyledLinkImage>
  )
}

export default Logo
