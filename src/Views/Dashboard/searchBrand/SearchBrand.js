import React, { useState } from 'react'
import Title from '../../common/title/Title'
import Card from '../../common/cards/genericCard/Card'
import CardHeader from '../../common/cards/genericCard/CardHeader'
import CardBody from '../../common/cards/genericCard/CardBody'
import CardFooter from '../../common/cards/genericCard/CardFooter'
import InputText from '../../common/inputs/text/InputText'
import Button from '../../common/buttons/Button'
import { COLOR } from '../../../utils/constants'
import { StyledTab, StyledInfo } from './styles'
import { FaFileExcel as IconExcel } from 'react-icons/fa'

const logo = 'http://2.bp.blogspot.com/-SMJiqF5_Ct4/VXCPtCsWArI/AAAAAAAAAdE/LNpA2JemQKM/s1600/vertical.jpg'
const tabs = [
  {
    id: 1,
    name: 'Marcas registradas',
    number: '7'
  },
  {
    id: 2,
    name: 'Diseños',
    number: '2'
  },
  {
    id: 3,
    name: 'Propietarios',
    number: '4'
  }
]

const infoMarca = [
  [
    {
      title: 'Información de marca',
      info: [
        {
          name: 'Numero de marca',
          value: '333355447788'
        },
        {
          name: 'Tipo',
          value: 'Figurativa'
        },
        {
          name: 'Fecha de presentacion',
          value: '28/08/2012'
        },
        {
          name: 'Fecha de registro',
          value: '29/004/2009'
        },
        {
          name: 'Clasificacion',
          value: '32'
        },
        {
          name: 'Estado de la marca',
          value: 'Registrada'
        }
      ]
    }
  ],
  [
    {
      title: 'Informacion del propietario',
      info: [
        {
          name: 'Numero de indentificacion del propietario',
          value: '33322555588774'
        },
        {
          name: 'Nombre del dueño',
          value: 'Figurativa'
        }
      ]
    },
    {
      title: 'Informacion representativa',
      info: [
        {
          name: 'Numero de indetificacion del representante',
          value: '52055'
        },
        {
          name: 'Nombre representativo',
          value: 'Hoyng rokh monegier spain llp'.toLocaleUpperCase()
        }
      ]
    }
  ]
]

const TabOne = () => {
  return (
    <Card className='py-2 mb-4' shadow>
      <CardHeader className='pb-2'>
        <h3 className='mb-0'>Coca cola</h3>
      </CardHeader>
      <CardBody>
        <div className='d-flex'>
          <div className='col-4'>
            <Card className='py-0'>
              <img src={logo} alt='logo' className='img-fluid' />
            </Card>
          </div>
          {
            infoMarca.map(col => (
              <div className='col-4'>
                {
                  col.map((e, i) => (
                    <StyledInfo key={e.title}>
                      <h5 className={i !== 0 ? 'mt-5' : ''}>{e.title}</h5>
                      {
                        e.info.map(info => (
                          <div key={info.name}>
                            <h6 className='m-0'>{info.name}</h6>
                            <p>{info.value}</p>
                          </div>
                        ))
                      }
                    </StyledInfo>
                  ))
                }
              </div>
            ))
          }
        </div>
      </CardBody>
      <CardFooter>
        <div className="d-flex justify-content-end pb-4">
          <Button childrenFirst styled='outline-primary' color={COLOR.blue} title='Exportar .xlsx' className='d-flex justify-content-center'>
            <IconExcel style={{ marginRight: '10px' }} size='22px' />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

const TabTwo = () => {
  return (
    <h4>Tab 2</h4>
  )
}

const TabThree = () => {
  return (
    <h4>Tab 3</h4>
  )
}

const ActualTabContent = ({ tab }) => {
  switch (tab) {
    case 1:
      return <TabOne />
    case 2:
      return <TabTwo />
    case 3:
      return <TabThree />
    default:
      return <TabOne />
  }
}

const SearchBrand = () => {
  const [actualTab, setActualTab] = useState(tabs[0].id)
  return (
    <>
      <div className='d-flex justify-content-center bg-white' style={{ paddingBottom: '5rem' }}>
        <div className='col-8'>
          <Title title='Buscador de marcas' size='28px' />
          <p className='text-muted text-center'>
            <small>Busque marcas comerciales, diseños, propietarios, representantes y boletines</small>
          </p>
          <div className='d-flex justify-content-center align-items-start'>
            <InputText
              type='text'
              name='searchBrand'
              onChange={() => {}}
              placeholder='Ingresa la marca que estas búscando'
              style={{ width: '80%', padding: '0.2rem 0.5rem', fontSize: '15px' }}
            />
            <Button title='Aplicar filtro' size='sm' style={{ height: '46px', marginLeft: '8px' }} color={COLOR.blue} />
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='col-11 mt-4'>
          <Card color={COLOR.transparent} className='py-3 mb-5'>
            <CardHeader className='py-0'>
              {
                tabs.map(e => (
                  <StyledTab
                    key={e.id}
                    number={e.number}
                    className={actualTab === e.id ? 'active' : ''}
                    onClick={() => setActualTab(e.id)}
                  >
                    {e.name}
                    <span>{e.number}</span>
                  </StyledTab>
                ))
              }
            </CardHeader>
            <CardBody>
              <ActualTabContent tab={actualTab} />
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  )
}

export default SearchBrand
