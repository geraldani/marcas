import React, { useState, useEffect } from 'react'

/* const useInput = (inicialValue = '') => {
  const [value, setValue] = useState(inicialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
} */

const Input = ({ type, name, value, onChange, errorAlert, label }) => (
  <>
    <label>
      {label}
      <input type={type} name={name} value={value || ''} onChange={onChange} />
      <br />
      <ValidationAlert content={errorAlert} />
    </label>
    <br />
  </>
)
const useForm = (callback, validate, currentStep) => {
  const [value, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rules, setRules] = useState({})

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    setErrors(validate(value, currentStep, rules))
    setIsSubmitting(true)
  }

  const handleChange = (event) => {
    event.persist()
    const elem = event.target
    console.log(elem.type)
    setValues(values => ({ ...values, [elem.name]: elem.type === 'checkbox' ? elem.checked : elem.value }))
  }

  return {
    value,
    handleChange,
    handleSubmit,
    errors
  }
}
const ValidationAlert = ({ content }) => {
  if (content) return <div style={{ color: 'red', fontSize: '10px', marginBottom: '8px' }}>{content}</div>
  else return null
}
const validate = (values, step, rules) => {
  const errors = {}
  switch (step) {
    case 1:
      if (!values.name) errors.name = 'name is required'
      if (!values.email) errors.email = 'email is required'
      /* else if (!/\S+@\S+\.\S+/.test(values.email)) { errors.email = 'Email address is invalid' } */
      // if (!values.name) errors.name = 'name is required'
      /* else if (values.name.length < 8) { errors.name = 'name must be 8 or more characters' } */
      break
    case 2:
      if (!values.apellido) errors.apellido = 'apellido is required'
      break
  }
  return errors
}

const One = (props) => {
  const { err, value, onChange } = props
  return (
    <>
      <Input
        type='text'
        label='Nombre'
        name='name'
        value={value.name}
        errorAlert={err.name}
        onChange={onChange}
      />
      <Input
        value={value.email}
        type='email'
        name='email'
        onChange={onChange}
        label='Email'
      />
      <ValidationAlert content={err.email} />

    </>
  )
}
const Two = ({ onChange, value, err }) => {
  return (
    <>
      <label>
        Apellido
        <input type='text' name='apellido' onChange={onChange} value={value.apellido || ''} />
      </label>
      <br />
      {
        err.apellido && <ValidationAlert content={err.apellido} />
      }
      <br />
      <label>
        selecciones su pais
        <select name='country' defaultValue={value} onChange={onChange}>
          <option value=''>Seleccione</option>
          <option value='argentina'>Argentina</option>
          <option value='espana'>Espana</option>
          <option value='dinamarca'>Dinamarca</option>
        </select>
      </label>
      <br />

      <label>
        seleccionar todos
        <input type='checkbox' name='checkall' />
      </label>
      <br />

      <label>
        check 1
        <input type='checkbox' value='check1' name='checkOption1' onChange={onChange} />
      </label>
      <br />

      <label>
        check 2
        <input type='checkbox' value='check2' name='checkOption2' onChange={onChange} />
      </label>
      <br />
    </>
  )
}
const Three = ({onChange}) => {
  return (
    <>
      <label>
        edad
        <input
          onChange={onChange}
          type='number'
          name='edad'
        />
      </label>
      <br />
      <label>
        opcion 1
        <input type='radio' name='radioOpcion' value='opcion1' onChange={onChange} />
      </label>
      <br />
      <label>
        opcion 2
        <input type='radio' name='radioOpcion' value='opcion2' onChange={onChange} />
      </label>
      <br />
    </>
  )
}

const CurrentStep = (props) => {
  let Component
  switch (props.step) {
    case 1:
      Component = One
      break
    case 2:
      Component = Two
      break
    case 3:
      Component = Three
      break
  }
  return <Component {...props} />
}

const PruebasFormsHooks = () => {
  const total = 3

  const handleClick = () => {
    if (step === total) window.alert('final de la validacion')
    else setStep(step + 1)
  }

  const [step, setStep] = useState(1)
  const { value, errors, handleChange, handleSubmit } = useForm(handleClick, validate, step)
  const Inputs = { value, onChange: handleChange }
  return (
    <div style={{ padding: '5rem' }}>
      <form>
        <CurrentStep
          step={step}
          err={errors}
          {...Inputs}
        />
        <button onClick={handleSubmit}>Aceptar</button>
      </form>
    </div>
  )
}

export default PruebasFormsHooks
