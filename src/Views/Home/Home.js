import React from 'react'
import RegisterBrand from './register/RegisterBrand'
import Help from './help/Help'
import Work from './work/Work'
import AboutUs from './aboutus/AboutUs'
import Formalities from './formalities/Formalities'
import Contact from './contact/Contact'
import Footer from '../common/footer/Footer'
import Prices from './Prices/Prices'
import { MainContainer } from '../styles/GlobalStyles'
import { useHeader } from '../../hooks/useHeader'

const props = {
  title: 'Buscá y registrá tu marca',
  subtitle: 'En Laweb.io te damos la posibilidad de registrar tu marca hoy, en el país que vos queras.',
  buttons: ['Registrar marca', 'Otros trámites']
}

export default function Home () {
  const [refContainer, headerAbove] = useHeader()

  return (
    <>
      <MainContainer ref={refContainer} header={headerAbove}>
        <RegisterBrand {...props} />
        <Work />
        <AboutUs />
        <Help />
        <Formalities />
        <Prices />
        <Contact />
        <Footer />
      </MainContainer>
    </>

  )
}
