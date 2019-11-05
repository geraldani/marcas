import React, { useState, useEffect } from 'react'
import OrderCard from '../common/cards/order/OrderCard'
import CircleSteps from '../common/circles/CircleSteps'
import CardSteps from '../common/cards/steps/CardSteps'
import StepOne from './step-one/StepOne'
import StepTwo from './step-two/StepTwo'
import StepThree from './step-three/StepThree'
import StepFour from './step-four/StepFour'
import StepFive from './step-five/StepFive'
import Button from '../common/buttons/Button'
import { ROUTES } from '../common/constants'
import Header from '../common/header/Header'

export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  })

  return [input, handleInputChange]
}

const Register = (props) => {
  const TOTAL_STEPS = 5
  const [step, setStep] = useState(5)
  const [country, setCountry] = useState('')
  const [countryAttorney, setCountryAttorney] = useState('')
  const [countryBrand, setCountryBrand] = useState('')

  const [dataForm, setDataForm] = useState(null)

  // Atualizar los demas paises en base si cambio el pais principal
  useEffect(() => {
    setCountryAttorney(country)
    setCountryBrand(country)
  }, [country])

  const clickNext = (e) => {
    e.preventDefault()
    if (step === TOTAL_STEPS) {
      props.history.push(ROUTES.orderDetail)
    } else {
      setStep(step + 1)
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  // botones de navegacion para avanaza o retroceder en el formulario
  const ButtonsNavigation = () => (
    <div
      className={`border-top mt-5 py-3 px-4 d-flex flex-column flex-md-row ${step === 1 ? 'justify-content-end' : 'justify-content-between'}`}
    >
      {/* Boton volver */
        step > 1 &&
          <Button
            title='Volver'
            className='px-5 mb-3 mb-md-0'
            styled='outline-purple'
            onClick={clickBack}
          />
      }
      {/* Boton continuar o finalizar */}
      <Button
        title={`${step === TOTAL_STEPS ? 'Finalizar' : 'Continuar'} `}
        className='px-5'
        onClick={clickNext}
      />
    </div>
  )

  const Steps = () => {
    switch (step) {
      case 1:
        return <StepOne country={country} setCountry={setCountry} />
      case 2:
        return <StepTwo country={countryAttorney} setCountry={setCountryAttorney} />
      case 3:
        return <StepThree />
      case 4:
        return <StepFour country={countryBrand} setCountry={setCountryBrand} />
      case 5:
        return <StepFive />
    }
  }

  return (
    <>
      <Header />
      <section className='margin-header mb-5'>
        <div className='container-fluid pt-5 px-3 px-md-5'>
          <div className='row justify-content-end'>

            {/* Circulos del paso actual y totales */}
            <div className='col-12 mb-4'>
              <CircleSteps actualStep={step} totalSteps={TOTAL_STEPS} />
            </div>

            {/* formulario principal */}
            <div className='col-12 col-lg-9'>
              <CardSteps title={`Paso ${step}`}>
                {/* Formulario actual dependiendo de que paso este */}
                <Steps />
                {/* botones de navegacion */}
                <ButtonsNavigation />
              </CardSteps>
            </div>

            {/* Detalle de la orden Card */}
            <div className='col-12 mt-4 col-lg-3 mt-lg-0'>
              <OrderCard data={dataForm} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Register
