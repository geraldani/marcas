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

const Steps = (props) => {
  let WrappedComponennt
  switch (props.step) {
    case 1:
      WrappedComponennt = StepOne
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
      break
  }
  return <WrappedComponennt value={props.value} onChange={props.onChange} />
}

const RegisterView = (props) => {
  // botones de navegacion para avanaza o retroceder en el formulario
  const ButtonsNavigation = () => (
    <div
      className={`border-top mt-5 py-3 px-4 d-flex flex-column flex-md-row ${props.step === 1 ? 'justify-content-end' : 'justify-content-between'}`}>
      {/* Boton volver */
        props.step > 1 &&
          <Button
            title='Volver'
            className='px-5 mb-3 mb-md-0'
            styled='outline-purple'
            onClick={props.handleClickBack}
          />
      }
      {/* Boton continuar o finalizar */}
      <Button
        title={`${props.step === props.totalSteps ? 'Finalizar' : 'Continuar'} `}
        className='px-5'
        onClick={props.handleClickNext}
      />
    </div>
  )

  return (
    <>
      <Header />
      <section className='margin-header mb-5'>
        <div className='container-fluid pt-5 px-3 px-md-5'>
          <div className='row justify-content-end'>

            {/* Circulos del paso actual y totales */}
            <div className='col-12 mb-4'>
              <CircleSteps actualStep={props.step} totalSteps={props.totalSteps} />
            </div>

            {/* formulario principal */}
            <div className='col-12 col-lg-9'>
              <CardSteps title={`Paso ${props.step}`}>
                {/* Formulario actual dependiendo de que paso este */}
                <Steps {...props} />
                {/* botones de navegacion */}
                <ButtonsNavigation />
              </CardSteps>
            </div>

            {/* Detalle de la orden Card */}
            <div className='col-12 mt-4 col-lg-3 mt-lg-0'>
              <OrderCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default RegisterView
