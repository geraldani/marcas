import React from 'react'
import Button from '../../common/buttons/Button'
import { IoIosArrowRoundBack as IconBack } from 'react-icons/io'
import Card from '../cards/genericCard/Card'
import CardHeader from '../cards/genericCard/CardHeader'
import CardBody from '../cards/genericCard/CardBody'
import InputText from '../../common/inputs/text/InputText'
import { COLOR, ROUTES } from '../../../utils/constants'
import { dateFormattedNormal } from '../../../utils'

const Detail = ({ match, data }) => {
  console.log('data ', data)

  const id = match.params.id
  console.log('id  ', id)
  data.forEach(e => { console.log('e.id', e.id, ' id ', id) })
  const filterData = data.find(e => {
    console.log('e.id', e.id, ' id ', id)
    return e.id.toString() === id.toString()
  })
  console.log('data filtrada ', filterData)
  console.log('match ', match)
  const formStructure = [
    {
      colsSize: ['1', '3'],
      inputs: [
        {
          label: 'Titular',
          type: 'text',
          name: 'titularID',
          defaultValue: filterData.titularID
        },
        {
          label: '',
          type: 'text',
          name: 'titular',
          defaultValue: filterData.titular
        }
      ]
    },
    {
      colsSize: ['1', '3'],
      inputs: [
        {
          label: 'Tipo',
          type: 'text',
          name: 'tipoId',
          defaultValue: filterData.tipoId
        },
        {
          label: '',
          type: 'text',
          name: 'tipo',
          defaultValue: filterData.tipo
        }
      ]
    },
    {
      colsSize: ['3', '3', '3'],
      inputs: [
        {
          label: 'Grupo',
          type: 'text',
          name: 'group',
          defaultValue: filterData.group
        },
        {
          label: 'Agente',
          type: 'text',
          name: 'agent',
          defaultValue: filterData.agent
        },
        {
          label: 'Cargo',
          type: 'text',
          name: 'cargo',
          defaultValue: filterData.cargo
        }
      ]
    },
    {
      colsSize: ['3', '3', '3'],
      inputs: [
        {
          label: 'CUIT/CUIL',
          type: 'text',
          name: 'cuil',
          defaultValue: filterData.cuil
        },
        {
          label: 'Tipo de persona',
          type: 'text',
          name: 'persoType',
          defaultValue: filterData.persoType
        },
        {
          label: 'Doc',
          type: 'text',
          name: 'nroDoc',
          defaultValue: filterData.nroDoc
        }
      ]
    },
    {
      colsSize: ['3', '3', '3'],
      inputs: [
        {
          label: 'Carta al',
          type: 'text',
          name: 'carta',
          defaultValue: filterData.carta
        },
        {
          label: 'Sobre al',
          type: 'text',
          name: 'sobre',
          defaultValue: filterData.sobre
        },
        {
          label: 'Factura al',
          type: 'text',
          name: 'factura',
          defaultValue: filterData.factura
        }
      ]
    },
    {
      colsSize: ['3', '3', '3'],
      inputs: [
        {
          label: 'CUIT/CUIL',
          type: 'text',
          name: 'cuil',
          defaultValue: filterData.cuil
        },
        {
          label: 'Tipo de persona',
          type: 'text',
          name: 'persoType',
          defaultValue: filterData.persoType
        },
        {
          label: 'Doc',
          type: 'text',
          name: 'nroDoc',
          defaultValue: filterData.nroDoc
        }
      ]
    },
    {
      colsSize: ['9'],
      inputs: [
        {
          label: 'Atención',
          type: 'text',
          name: 'atencion',
          defaultValue: filterData.atencion
        }
      ]
    },
    {
      colsSize: ['3', '3'],
      inputs: [
        {
          label: 'Sector',
          type: 'text',
          name: 'sector',
          defaultValue: filterData.sector
        },
        {
          label: 'Rubro',
          type: 'text',
          name: 'rubro',
          defaultValue: filterData.rubro
        }
      ]
    },
    {
      colsSize: ['3', '3', '3'],
      inputs: [
        {
          label: 'Dirección',
          type: 'text',
          name: 'direccion',
          defaultValue: filterData.direccion
        },
        {
          label: 'Localidad',
          type: 'text',
          name: 'localidad',
          defaultValue: filterData.localidad
        },
        {
          label: 'Código postal',
          type: 'number',
          name: 'potalCode',
          defaultValue: filterData.potalCode
        }
      ]
    },
    {
      colsSize: ['3', '3'],
      inputs: [
        {
          label: 'Provincia',
          type: 'text',
          name: 'provincia',
          defaultValue: filterData.provincia
        },
        {
          label: 'País',
          type: 'text',
          name: 'pais',
          defaultValue: filterData.pais
        }
      ]
    }
  ]

  return (
    <div className='container-fluid'>
      <div className='row m-0 my-4'>
        <div className='col-6'>
          <Button
            title='Volver'
            link={ROUTES.home}
            styled='outline-primary'
            className='px-1 py-1'
            style={{ fontSize: '0.97rem' }}
            childrenFirst
          >
            <IconBack size='25px'/>
          </Button>
        </div>
        <div className='col-6'>
          <p className='text-normal text-right m-0' style={{ color: COLOR.textColor }}>
            <small>
              Modificado el {dateFormattedNormal(filterData.date)} por {filterData.assigned.toLocaleUpperCase()}
            </small>
          </p>
        </div>
      </div>

      <div className='row m-0'>
        <div className='col-12 mb-5'>
          <Card shadow>
            <CardHeader>
              T.A.B Billetera
            </CardHeader>
            <CardBody>
              {
                formStructure.map((elems, i) => (
                  <div className='row mx-0' key={i}>
                    {
                      elems.inputs.map((input, index) => (
                        <div key={input.name}
                             className={`col-${elems.colsSize[index]} ${input.label ? '' : 'd-flex align-items-end'}`}>
                          <InputText
                            onChange={() => {}}
                            colorLabel={COLOR.textColor}
                            label={input.label ? `${input.label}:` : ''}
                            type={input.type}
                            name={input.name}
                            defaultValue={input.defaultValue}
                          />
                        </div>
                      ))
                    }
                  </div>
                ))
              }
            </CardBody>
          </Card>
        </div>
      </div>
    </div>

  )
}

export default Detail
