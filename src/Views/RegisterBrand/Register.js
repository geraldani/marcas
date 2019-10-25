import React, { useState } from 'react'
import OrderCard from '../utilities/OrderCard'
import CircleSteps from '../utilities/CircleSteps'
import CardSteps from '../utilities/CardSteps'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'
import Button from '../utilities/Button'

const Register = () => {
  const totalSteps = 5
  const [step, setStep] = useState(1)
  // const [dataForm, setDataForm] = useState(null)

  const clickNext = (e) => {
    e.preventDefault()
    if (step === totalSteps) {
      window.alert('termine el asunto')
    } else {
      setStep(step + 1)
    }
  }

  const clickBack = (e) => {
    e.preventDefault()
    setStep(step - 1)
  }

  const ButtonsNavigation = () => (
    <div className={`border-top py-3 px-4 d-flex ${step === 1 ? 'justify-content-end' : 'justify-content-between'}`}>
      {
        step > 1 && <Button title='Volver' className='px-5' styled='outline-purple' onClick={clickBack} />
      }
      <Button title={`${step === totalSteps ? 'Finalizar' : 'Continuar'} `} className='px-5' onClick={clickNext} />
    </div>
  )

  return (
    <section className='margin-header mb-5'>
      <div className='container-fluid pt-5 px-5'>
        <div className='row justify-content-end'>
          <div className='col-12 mb-4'>
            <CircleSteps actualStep={step} totalSteps={totalSteps} />
          </div>
          <div className='col-9'>
            <CardSteps title={`Paso ${step}`}>
              <Steps actualStep={step} />
              <ButtonsNavigation />
            </CardSteps>
          </div>
          <div className='col-3'>
            <OrderCard />
          </div>
        </div>
      </div>
    </section>
  )
}

const Steps = ({ actualStep }) => {
  switch (actualStep) {
    case 1:
      return <StepOne />
    case 2:
      return <StepTwo />
    case 3:
      return <StepThree />
    case 4:
      return <StepFour />
    case 5:
      return <StepFive />
    default:
      return <div>paso invalido</div>
  }
}

export default Register
