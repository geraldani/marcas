import React from 'react'
import { Link } from 'react-router-dom'

const logo = 'https://img.pngio.com/melia-expansion-melia-hotels-international-brand-png-1060_328.png'

const Logo = ({ className = '' }) => {
  return (
    <Link className={`navbar-brand ${className}`} to='/'>
      <img src={logo} alt='brand' className='img-fluid' style={{ background: '#d8d8d8', borderRadius: '14px', padding: '5px' }} />
    </Link>
  )
}

export default Logo
