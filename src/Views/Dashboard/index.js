import React from 'react'
import HeaderDash from './header/header'
import Navbar from './navbar/Navbar'
import InputText from '../common/inputs/text/InputText'
import Button from '../common/buttons/Button'

const DashBoard = ({ user = 'Geraldyn Chirinos' }) => {
  const formStructure = [
    {
      label: 'Fecha:',
      name: 'fecha',
      type: 'date'
    },
    {
      label: 'Título:',
      name: 'titulo',
      type: 'text'
    },
    {
      label: 'Buscar por expediente:',
      name: 'expediente',
      type: 'text'
    },
    {
      label: 'Vencimineto:',
      name: 'vencimiento',
      type: 'date'
    }
  ]
  return (
    <>
      <HeaderDash user={user}/>
      <div className='row mx-0'>
        <div className='col-2 px-0'>
          <Navbar/>
        </div>
        <div className='col-10 px-0' style={{ background: '#f7f8fc' }}>
          <div className='col py-3' style={{ background: 'white' }}>
            Tus trámites
          </div>
          <div className='row m-0'>
            {
              formStructure.map(elem => (
                <div className='col' key={elem.name}>
                  <InputText
                    style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem', fontSize: '15px' }}
                    onChange={() => {}}
                    colorLabel='gray' {...elem}
                  />
                </div>
              ))
            }
            <div className='col d-flex justify-content-start align-items-end'>
              <Button title='Aplicar filtro' size='sm' color='#4990e2' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
