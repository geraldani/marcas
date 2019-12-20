import React from 'react'
import InputText from '../../common/inputs/text/InputText'
import Button from '../../common/buttons/Button'
import Proptypes from 'prop-types'
import { StyledSublabel } from '../../styles/GlobalStyles'
import { COLOR } from '../../../utils/constants'

const stylesInput = {
  fontSize: '12px',
  padding: '2px 5px'
}
const styleWidth = {
  width: 'calc(100% - 40px)'
}

const stylesLabel = {
  fontSize: '12px',
  color: 'gray'
}

const formGroup = [
  {
    inline: true,
    title: 'Fecha',
    inputs: [
      {
        name: 'dateFrom',
        type: 'date',
        label: 'Desde'
      },
      {
        name: 'dateTo',
        type: 'date',
        label: 'Hasta'
      }
    ]
  },
  {
    inline: false,
    inputs: [
      {
        title: 'Denominación',
        name: 'title',
        type: 'text',
        label: ''
      },
      {
        title: 'Buscar por expediente',
        name: 'exp',
        type: 'number',
        label: ''
      }
    ]
  },
  {
    inline: true,
    title: 'Vencimiento',
    inputs: [
      {
        name: 'dateVencFrom',
        type: 'date',
        label: 'Desde'
      },
      {
        name: 'dateVencTo',
        type: 'date',
        label: 'Hasta'
      }
    ]
  }
]

const SearcherForm = () => {
  return (
    <>
      <div className='row mx-0 mt-5 border' style={{ background: COLOR.white }}>
        {
          formGroup.map(group => (
            <div className='col-4 pb-3 px-2'>
              <div className='row m-0'>
                {
                  group.title &&
                  <div className='col-12 px-0'>
                    <StyledSublabel className='mb-3'>{group.title}</StyledSublabel>
                  </div>
                }
                {
                  group.inputs.map((e, i) => (
                    <div key={e.name} className={`col-6 ${i % 2 === 0 ? 'pl-0 pr-2' : 'pr-0 pl-2'}`}>
                      {e.title && <StyledSublabel className='mb-3'>{e.title}:</StyledSublabel>}
                      <InputText
                        style={group.inline ? { ...stylesInput, ...styleWidth } : { ...stylesInput }}
                        onChange={() => {}}
                        styleLabel={stylesLabel}
                        classnameLabel='mt-0'
                        inline={group.inline}
                        {...e}
                      />
                    </div>
                  ))
                }

              </div>
            </div>
          ))
        }
      </div>

      <div className='justify-content-end d-flex my-3'>
        <Button title='Aplicar filtro' size='sm' color={COLOR.blue}/>
      </div>
    </>

  )
}

SearcherForm.prototype = {
  formData: Proptypes.array.isRequired
}
export default SearcherForm
