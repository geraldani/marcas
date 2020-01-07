import React from 'react'
import StepOne from '../step-one/StepOne'
import StepTwo from '../step-two/StepTwo'
import StepThree from '../step-three/StepThree'
import StepFour from '../step-four/StepFour'
import StepFive from '../step-five/StepFive'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'
import CircleSteps from '../../common/circles/CircleSteps'
import CardSteps from '../../common/cards/steps/CardSteps'
import OrderCard from '../../common/cards/order/OrderCard'
import { useHeader } from '../../../hooks/useHeader'

// vista de los pasos o vistas del formulario con datos a ser pedidos en cada uno
const Steps = (props) => {
  const commonProps = { state: props.state, onChange: props.onChange, errors: props.errors }
  const { step, removeCountry, handleClickSearch, handleKeyDownSearch, dataSearch, loading } = props

  let aditionalProps = {}
  let WrappedComponennt

  switch (step) {
    case 1:
      WrappedComponennt = StepOne
      aditionalProps = { removeCountry }
      break
    case 2:
      WrappedComponennt = StepTwo
      break
    case 3:
      WrappedComponennt = StepThree
      break
    case 4:
      WrappedComponennt = StepFour
      break
    case 5:
      WrappedComponennt = StepFive
      aditionalProps = { handleClickSearch, handleKeyDownSearch, dataSearch, loading }
      break
  }
  return <WrappedComponennt {...aditionalProps} {...commonProps} />
}

// botones de navegacion para avanaza o retroceder en el formulario
const ButtonsNavigation = ({ step, handleClickBack, totalSteps, handleClickNext }) => {
  const buttonTitle = step === totalSteps ? 'Finalizar' : 'Continuar'
  const justify = step === 1 ? 'justify-content-end' : 'justify-content-between'

  const ButtonBack = () =>
    <Button
      title='Volver'
      className='px-5 mb-3 mb-md-0'
      styled='outline-primary'
      onClick={handleClickBack}
    />

  const ButtonNext = () =>
    <Button
      title={buttonTitle}
      className='px-5'
      onClick={handleClickNext}
    />

  return (
    <div className={`border-top mt-5 py-3 px-4 d-flex flex-column flex-md-row ${justify}`}>
      {step > 1 && <ButtonBack/>}
      <ButtonNext/>
    </div>
  )
}

const RegisterView = (props) => {
  const [container, headerAbove] = useHeader()

  const buttonsProps = {
    step: props.step,
    handleClickBack: props.handleClickBack,
    totalSteps: props.totalSteps,
    handleClickNext: props.handleClickNext
  }

  return (
    <>
      <section className={`${headerAbove ? 'margin-header' : ''} mb-5`} ref={container}>
        <div className='container-fluid pt-4 pt-md-5 px-3 px-md-5'>
          <div className='row justify-content-end'>

            {/* Circulos del paso actual y totales */}
            <div className='col-12 mb-0 mb-md-4'>
              <CircleSteps actualStep={props.step} totalSteps={props.totalSteps}/>
            </div>

            {/* formulario principal */}
            <div className='row w-100 m-0'>
              <div className='col-12 col-lg-9 order-lg-first order-last'>
                <CardSteps title={`Paso ${props.step}`}>
                  {/* Formulario actual dependiendo de que paso este */}
                  <Steps {...props} />
                  {/* botones de navegacion */}
                  <ButtonsNavigation {...buttonsProps} />
                </CardSteps>
              </div>

              {/* Detalle de la orden Card */}
              <div className='col-12 mt-2 mt-md-4 col-lg-3 mt-lg-0 order-lg-last order-first mb-4'>
                <OrderCard state={props.state} showMenu={headerAbove} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterView
