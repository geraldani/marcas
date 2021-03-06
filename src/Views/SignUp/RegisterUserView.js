import React from 'react'
import { MainContainer } from '../styles/GlobalStyles'
import Footer from '../common/footer/Footer'
import Card from '../common/cards/genericCard/Card'
import CardHeader from '../common/cards/genericCard/CardHeader'
import CardBody from '../common/cards/genericCard/CardBody'
import Button from '../common/buttons/Button'
import InputText from '../common/inputs/text/InputText'
import ModalLoader from '../common/modal/ModalLoader'
import { StyledError } from '../common/alerts/styles'
import ErrorAlert from '../common/alerts/ErrorAlert'
import { useHeader } from '../../hooks/useHeader'

const RegisterUserView = (props) => {
  const [container, header] = useHeader()
  const {
    form,
    errors,
    onClick,
    errorFetch,
    value,
    loading
  } = props
  return (
    <>
      <MainContainer className='row justify-content-center pt-0 pt-md-5 px-1 px-md-5 mx-0 mx-md-5' ref={container} header={header}>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <Card>
            <CardHeader>
              <h3 className='mb-0'>Registrate</h3>
            </CardHeader>
            <CardBody>
              <form>
                {
                  form.map(field => (
                    <InputText
                      key={field.name}
                      onChange={props.onChange}
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      error={errors[field.name]}
                      value={value[field.name]}
                    />
                  ))
                }
                {props.errors.passDontMatch && <StyledError>{errors.passDontMatch}</StyledError>}
                <Button title='Registrarse' className='w-100 mt-5' onClick={onClick} />
              </form>
            </CardBody>
          </Card>
          <ErrorAlert message={errorFetch} />
        </div>
        <ModalLoader showModal={loading} />
      </MainContainer>
      <Footer />
    </>
  )
}

export default RegisterUserView
