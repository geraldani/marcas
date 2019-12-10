import React from 'react'
import InputText from '../../common/inputs/text/InputText'
import Button from '../../common/buttons/Button'
import Select from '../../common/inputs/select/SelectCountry'
import Proptypes from 'prop-types'

const SearcherForm = ({ formData }) => {
  return (
    <div className='d-flex justify-content-center align-items-end'>
      {
        formData.map(elem => (
          <div className="mr-2">
            <InputText
              key={elem.name}
              style={{ paddingTop: '0.2rem', paddingBottom: '0.2rem', fontSize: '15px' }}
              onChange={() => {}}
              colorLabel='gray'
              {...elem}
            />
          </div>

        ))
      }
      <div className='d-flex align-items-end'>
        <Button title='Aplicar filtro' size='sm' color='#4990e2'/>
      </div>
    </div>
  )
}

SearcherForm.prototype = {
  formData: Proptypes.array.isRequired
}
export default SearcherForm
