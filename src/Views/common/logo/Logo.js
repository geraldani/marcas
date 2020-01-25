import React from 'react'
import { StyledLinkImage } from './styles'
import { ROUTES } from '../../../utils/constants'
const logoDark = 'http://logosvg.com/wp-content/uploads/2016/08/logosvgcom.png'
const logoLight = 'https://cdn.worldvectorlogo.com/logos/react.svg'

const Logo = ({ className = '', light }) => {
  return (
    <StyledLinkImage className={className} to={ROUTES.home}>
      <img
        src={light ? logoLight : logoDark}
        alt='brand'
        className='img-fluid'
      />
    </StyledLinkImage>
  )
}

export default Logo
