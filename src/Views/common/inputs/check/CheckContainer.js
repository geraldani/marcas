import React from 'react'
import CkeckInput from './CkeckInput'
import ErrorAlert from '../../alerts/ErrorAlert'

const CheckContainer = ({ options, onChange, error }) => {
  return (
    <>
      {
        options.map(elem => (
          <CkeckInput
            label={elem.label}
            name={elem.name}
            tooltipTitle={elem.tooltipTitle}
            key={elem.name}
            checked={elem.value}
            onChange={onChange}
            error={error}
          />
        ))
      }
      <ErrorAlert message={error} style={{ bottom: '-17px' }} />
    </>
  )
}

export default CheckContainer
