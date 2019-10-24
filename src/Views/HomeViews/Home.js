import React from 'react'
import RegisterBrand from './RegisterBrand'
import Help from './Help'
import Work from './howWeWork/Work'
import AboutUs from './AboutUs'
import Formalities from './Formalities'
import Contact from './Contact'
import Footer from '../Footer'

export default function Home () {
  return (
    <div style={{ marginTop: '66px' }}>
      <RegisterBrand />
      <Work />
      <AboutUs />
      <Help />
      <Formalities />
      <Contact />
      <Footer />
    </div>
  )
}
