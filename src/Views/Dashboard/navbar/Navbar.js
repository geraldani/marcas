import React from 'react'
import { StyledNav, StyledLink, StyledButton } from './styles'
import { ROUTES } from '../../../utils/constants'
import { useWindowHeight } from '../../../hooks/useWindowHeight'
import { IoIosLogOut as IconLogout } from 'react-icons/io'

const navMenu = [
  {
    name: 'Tus Tramites',
    link: ROUTES.dashboard
  },
  {
    name: 'Buscador de marcas',
    link: ROUTES.searchBrand
  },
  {
    name: 'Registrar nueva marca',
    link: ROUTES.registerBrand
  }
]
const Navbar = (props) => {
  const [height, viewPortHeight] = useWindowHeight()
  return (
    <StyledNav className='nav flex-column justify-content-between align-items-start' {...{ viewPortHeight, height }}>
      <div className='d-flex flex-column w-100'>
        {
          navMenu.map(e => <StyledLink key={e.name} to={e.link} activeClassName='active'>{e.name}</StyledLink>)
        }
      </div>
      <StyledButton onClick={props.onLogout}>
        Salir
        <IconLogout size='20px' style={{ marginLeft: '10px' }} />
      </StyledButton>
    </StyledNav>
  )
}

export default Navbar
