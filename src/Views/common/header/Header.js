import React from 'react'
import Logo from '../logo/Logo'
import { Link } from 'react-router-dom'
import { menu } from '../../../data.js'
import { StyledNavItem, StyledLink } from './styles'

const Header = (props) => (
  <header>
    <nav className='navbar navbar-expand-lg navbar-light shadow-sm fixed-top bg-white'>
      <Logo />
      {/* Button for mobile that shows and hide the main menu */}
      {
        props.showMenu &&
        <>
          <button
            className='navbar-toggler'
            type='button' data-toggle='collapse'
            data-target='#navbarNavHeader'
            aria-controls='navbarNavHeader'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
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
    <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
      {
        items.map((item, index) => (
          <Link className='dropdown-item' to={item.path} key={index}>{item.name}</Link>
        ))
      }
    </div>
  </>
)

export default Header
