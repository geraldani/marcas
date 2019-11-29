import React from 'react'
import { StyledContainer } from './styles'
import Button from '../../buttons/Button'
import { ROUTES } from '../../../../utils/constants'

const PageNotFound = () => {
  return (
    <StyledContainer>
      <img src='https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif' alt='pageNotFound'style={{ maxWidth: '80%' }} />
      <h2>Opps... <br /> Esta pagina no existe</h2>
      <Button title='Regresar' link={ROUTES.home} className='mt-4' />
    </StyledContainer>
  )
}

export default PageNotFound
