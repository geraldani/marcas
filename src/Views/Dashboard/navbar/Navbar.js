import React from 'react'
import { StyledNav, StyledLink } from './styles'
import { ROUTES } from '../../../utils/constants'
import { useWindowHeight } from '../../../hooks/useWindowHeight'

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
  // const [height, viewPortHeight] = useWindowHeight()
  const { header } = props
  return (
    <StyledNav className='nav flex-column justify-content-between align-items-start' header={header}>
      <div className='d-flex flex-column w-100'>
        {
          navMenu.map(e => <StyledLink key={e.name} to={e.link} activeClassName='active'>{e.name}</StyledLink>)
        }
      </div>
    </StyledNav>
  )
}

export default Navbar
