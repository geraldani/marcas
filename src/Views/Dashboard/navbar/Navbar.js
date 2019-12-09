import React from 'react'
import { StyledNav, StyledLink } from './styles'
import { ROUTES } from '../../../utils/constants'
import { useWindowHeight } from '../../../hooks/useWindowHeight'

const Navbar = () => {
  const [height, viewPortHeight] = useWindowHeight()
  return (
    <StyledNav className='nav flex-column' {...{ viewPortHeight, height }}>
      <StyledLink active to={ROUTES.registerBrand}>Tus Tramites</StyledLink>
      <StyledLink to={ROUTES.registerBrand}>Marcas locales</StyledLink>
    </StyledNav>
  )
}

export default Navbar
