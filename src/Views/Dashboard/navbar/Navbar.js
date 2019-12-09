import React from 'react'
import { StyledNav, StyledLink } from './styles'
import { ROUTES } from '../../../utils/constants'

const Navbar = () => {
  return (
    <StyledNav className='nav flex-column'>
      <StyledLink active to={ROUTES.registerBrand}>Tus Tramites</StyledLink>
      <StyledLink to={ROUTES.registerBrand}>Marcas locales</StyledLink>
    </StyledNav>
  )
}

export default Navbar
