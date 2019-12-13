import React from 'react'
import Header from '../../common/header/Header'
import { StyledImage, StyledSubtitle, StyledTitle } from './styles'
import { StyledLabelName } from '../../styles/GlobalStyles'
import imageUrl from '../../../assets/img/svg/icon-confirm.svg'
import Card from '../../common/cards/genericCard/Card'
import CardBody from '../../common/cards/genericCard/CardBody'
import InputText from '../../common/inputs/text/InputText'
import Button from '../../common/buttons/Button'
import ErrorAlert from '../../common/alerts/ErrorAlert'
import Loader from '../../common/loader/Loader'
import ModalLoader from '../../common/modal/ModalLoader'

const FinishRegister = ({ form, onClick, onChange, value, errors, loading, errorFetch }) => {
  return (
    <>
      <ModalLoader showModal={loading}/>
      <Header/>
      <div className='margin-header row justify-content-center mx-0 pt-0 pt-md-5 px-md-5 mx-5'>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <Card>
            <CardBody>
              <div className='d-flex justify-content-center'>
                <StyledImage src={imageUrl} alt='image'/>
              </div>
              <StyledTitle>¡Felicitaciones!</StyledTitle>

              <StyledTitle>
                Estas a un paso de finalizar<br/>tu trámite
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
              <form>
                {
                  form.map(field => (
                    <InputText
                      key={field.name}
                      onChange={onChange}
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      error={errors[field.name]}
                      value={value[field.name]}
                    />
                  ))
                }
                {errors.passDontMatch && <ErrorAlert message={errors.passDontMatch}/>}
                {errorFetch && <ErrorAlert message={errorFetch}/>}
                <Button title='Aceptar' className='w-100 mt-5' onClick={onClick}/>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default FinishRegister
