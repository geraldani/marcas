import React from 'react'
import RegisterCard from '../../common/cards/register/RegisterCard'
import Header from '../../common/header/Header'
import { ROUTES } from '../../common/constants'
import { StyledImage, StyledSubtitle, StyledTitle } from './styles'
import { StyledLabelName } from '../../GlobalStyles'
import imageUrl from '../../../assets/img/svg/icon-confirm.svg'
import { setViewUp } from '../../../Components/utils'

const FinishRegister = () => {
  const fakeData = [
    { name: 'Contraseña', type: 'password' },
    { name: 'Repetir contraseña', type: 'password' }
  ]
  setViewUp()

  return (
    <>
      <Header />
      <div className='margin-header row justify-content-center mx-0 pt-0 pt-md-5 px-md-5 mx-5'>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <RegisterCard data={fakeData} buttonName='Aceptar' link={ROUTES.signup} className='px-3'>
            <StyledImage src={imageUrl} alt='image' />
            <StyledTitle>¡Felicitaciones!</StyledTitle>

            <StyledTitle>
              Estas a un paso de finalizar<br />tu trámite
            </StyledTitle>

            <StyledSubtitle>
              En este momento estamos gestionando tu pedido.
            </StyledSubtitle>

            <StyledSubtitle>
              Te estaremos enviando un mail con los avances
            </StyledSubtitle>

            <StyledLabelName className='mt-md-5 mt-4 text-center'>
              Crea tu clave para luego ver el estado de tu trámite
            </StyledLabelName>
          </RegisterCard>
        </div>
      </div>
    </>
  )
}

export default FinishRegister
