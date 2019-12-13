import React, { useState } from 'react'
import Header from '../common/header/Header'
import Footer from '../common/footer/Footer'
import { setViewUp } from '../../utils'
import Button from '../common/buttons/Button'
import { COLOR, ROUTES } from '../../utils/constants'
import CardHeader from '../common/cards/genericCard/CardHeader'
import CardBody from '../common/cards/genericCard/CardBody'
import InputText from '../common/inputs/text/InputText'
import Card from '../common/cards/genericCard/Card'
import { addPaperWorks } from '../../redux/actions'

const formStructure = {
  header: 'Ingresa',
  buttonName: 'Ingresar',
  inputs: [
    {
      label: 'Email',
      name: 'email',
      type: 'email'
    },
    {
      label: 'Contraseña',
      name: 'password',
      type: 'password'
    }
  ]
}

const Login = (props) => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleClick = async (e) => {
    e.preventDefault()
    console.log('la data em login ', data)
    const fetchBody = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    }

    try {
      const resUser = await window.fetch('https://marcas-api-test.herokuapp.com/user/login', fetchBody)
      const responseUser = await resUser.json()

      const resData = await window.fetch('https://marcas-api-test.herokuapp.com/user/authenticate', fetchBody)
      const responseData = await resData.json()

      // window.localStorage.setItem('jwt', JSON.stringify(response.token))
      const state = {
        paperworks: responseData.paperworks,
        user: responseUser.name
      }

      console.log('el estado despues de las peticiones ', state)
      props.history.push({
        pathname: ROUTES.dashboard,
        state: {
          paperworks: responseData.paperworks,
          user: responseUser.name
        }
      })
    } catch (e) {
      console.log('Ocurrio un error ', e.message)
    }

  }
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <>
      <Header showMenu/>
      <div className='margin-header row justify-content-center pt-0 pt-md-5 px-1 px-md-5 mx-0 mx-md-5'>
        <div className='col-md-7 col-lg-6 col-xl-5 col-12 mt-3 mb-5 px-2 px-md-0 px-0 '>
          <Card>
            <CardHeader>
              <h3 className='mb-0'>{formStructure.header}</h3>
            </CardHeader>
            <CardBody>
              <form>
                {
                  formStructure.inputs.map(field => (
                    <InputText
                      key={field.name}
                      onChange={handleChange}
                      name={field.name}
                      type={field.type}
                      label={field.label}
                      value={data[field.name]}
                    />
                  ))
                }
                <Button title={formStructure.buttonName} className='w-100 mt-4' onClick={handleClick}/>
              </form>
            </CardBody>
          </Card>

          <div className='d-flex justify-content-center flex-column'>
            <Button title='Olvidé mi contraseña' styled='simple-primary' color={COLOR.darkGrey}/>
            <div className='d-flex justify-content-center '>
              <span style={{ fontWeight: 'normal' }}>¿No tenés cuenta?</span>
              <Button
                title='Registrate'
                className='py-0 pl-2 pr-0'
                styled='simple-primary'
                color={COLOR.darkGrey}
                link={ROUTES.register}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login
