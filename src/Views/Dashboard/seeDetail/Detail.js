import React from 'react'
import Button from '../../common/buttons/Button'
import { IoIosArrowRoundBack as IconBack } from 'react-icons/io'
import Card from '../cards/genericCard/Card'
import CardHeader from '../cards/genericCard/CardHeader'
import CardBody from '../cards/genericCard/CardBody'
import InputText from '../../common/inputs/text/InputText'
import { COLOR } from '../../../utils/constants'
import { dateFormattedNormal } from '../../../utils'

const Detail = ({ data, handleClick }) => {
  const formStructure = [
    {
      colsSize: ['1', '3'],
      inputs: [
        {
          label: 'Titular',
          type: 'text',
          name: 'titularID',
          defaultValue: data.titularID
        },
        {
          label: '',
          type: 'text',
          name: 'titular',
          defaultValue: data.titular
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
          defaultValue: data.tipoId
        },
        {
          label: '',
          type: 'text',
          name: 'tipo',
          defaultValue: data.tipo
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
          defaultValue: data.group
        },
        {
          label: 'Agente',
          type: 'text',
          name: 'agent',
          defaultValue: data.agent
        },
        {
          label: 'Cargo',
          type: 'text',
          name: 'cargo',
          defaultValue: data.cargo
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
          defaultValue: data.cuil
        },
        {
          label: 'Tipo de persona',
          type: 'text',
          name: 'persoType',
          defaultValue: data.persoType
        },
        {
          label: 'Doc',
          type: 'text',
          name: 'nroDoc',
          defaultValue: data.nroDoc
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
          defaultValue: data.carta
        },
        {
          label: 'Sobre al',
          type: 'text',
          name: 'sobre',
          defaultValue: data.sobre
        },
        {
          label: 'Factura al',
          type: 'text',
          name: 'factura',
          defaultValue: data.factura
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
          defaultValue: data.cuil
        },
        {
          label: 'Tipo de persona',
          type: 'text',
          name: 'persoType',
          defaultValue: data.persoType
        },
        {
          label: 'Doc',
          type: 'text',
          name: 'nroDoc',
          defaultValue: data.nroDoc
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
          defaultValue: data.atencion
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
          defaultValue: data.sector
        },
        {
          label: 'Rubro',
          type: 'text',
          name: 'rubro',
          defaultValue: data.rubro
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
          defaultValue: data.direccion
        },
        {
          label: 'Localidad',
          type: 'text',
          name: 'localidad',
          defaultValue: data.localidad
        },
        {
          label: 'Código postal',
          type: 'number',
          name: 'potalCode',
          defaultValue: data.potalCode
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
          defaultValue: data.provincia
        },
        {
          label: 'País',
          type: 'text',
          name: 'pais',
          defaultValue: data.pais
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
            onClick={handleClick}
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
              Modificado el {dateFormattedNormal(data.date)} por {data.assigned.toLocaleUpperCase()}
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
                        <div key={input.name} className={`col-${elems.colsSize[index]} ${input.label ? '' : 'd-flex align-items-end'}`}>
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
