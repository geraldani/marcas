import React from 'react'
import { StyledNav, StyledLink, StyledButton } from './styles'
import { ROUTES } from '../../../utils/constants'
import { useWindowHeight } from '../../../hooks/useWindowHeight'
import { IoIosLogOut as IconLogout } from 'react-icons/io'

const Navbar = ({ onLogout }) => {
  const [height, viewPortHeight] = useWindowHeight()
  return (
    <StyledNav className='nav flex-column justify-content-between align-items-start' {...{ viewPortHeight, height }}>
      <div className='d-flex flex-column w-100'>
        <StyledLink active='true' to={ROUTES.registerBrand}>Tus Tramites</StyledLink>
        <StyledLink to={ROUTES.searchBrand}>Marcas locales</StyledLink>
      </div>
      <StyledButton onClick={onLogout}>
        Salir
        <IconLogout size='20px' style={{ marginLeft: '10px' }} />
      </StyledButton>
    </StyledNav>
  )
}

export default Navbar
