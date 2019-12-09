import React from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'

const DashBoard = ({ user = 'Geraldyn Chirinos' }) => {
  return (
    <>
      <HeaderDash user={user} />
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar />
        </div>
        <div className='col-10'>
          {
            [...Array(80)].map(() => <p>Footer</p>)
          }
        </div>
      </div>
    </>
  )
}

export default DashBoard
