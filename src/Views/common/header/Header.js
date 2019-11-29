import React  from 'react'
import Logo from '../logo/Logo'
import { menu } from '../../../data.js'
import { StyledNavItem, StyledLink, StyledSubLink } from './styles'
import HamburgerButton from '../buttons/Hamburger/HamburgerButton'
import { COLOR } from '../../../utils/constants'

const Header = (props) => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-white'>
        <Logo />
        {/* Button for mobile that shows and hide the main menu */}
        {
          props.showMenu &&
          <>
            <button
              className='navbar-toggler p-0'
              type='button'
              data-toggle='collapse'
              data-target='#navbarNavHeader'
              aria-controls='navbarNavHeader'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <HamburgerButton color={COLOR.primary} />
            </button>

            <div className='collapse navbar-collapse justify-content-end' id='navbarNavHeader'>
              <ul className='navbar-nav'>
                {
                  menu.home.map(menu => {
                    let active = ''
                    if (menu.path && props.page) {
                      active = props.page === menu.path.slice(1) ? 'active' : ''
                    }
                    return (
                      <StyledNavItem className={`nav-item position-relative ${active}`} key={menu.name}>
                        {
                          menu.submenu
                            ? <Submenu items={menu.submenu} name={menu.name} />
                            : <StyledLink className='nav-link' to={menu.path}>{menu.name}</StyledLink>
                        }
                      </StyledNavItem>
                    )
                  })
                }
              </ul>
            </div>
          </>
        }
      </nav>
    </header>
  )
}

const Submenu = ({ items, name }) => (
  <>
    <StyledLink
      to='/'
      className='nav-link dropdown-toggle'
      id='navbarDropdownMenuLink'
      role='button'
      data-toggle='dropdown'
      ria-haspopup='true'
      aria-expanded='false'
    >
      {name}
    </StyledLink>
    <div className='dropdown-menu border-0' aria-labelledby='navbarDropdownMenuLink'>
      {
        items.map((item, index) => (
          <StyledSubLink className='dropdown-item' to={item.path} key={index}>{item.name}</StyledSubLink>
        ))
      }
    </div>
  </>
)

export default Header
