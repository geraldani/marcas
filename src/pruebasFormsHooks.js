import React, { useState, useEffect } from 'react'

const useInput = (inicialValue = '') => {
  const [value, setValue] = useState(inicialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}
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
  const handleFocus = e => {
    e.persist()
    const attr = e.target.getAttribute.required
    if (attr !== null)
    // rules[e.target.name] = true
      setRules(rule => {
        return { ...rule, [e.target.name]: true }
      })
  }

  const handleChange = (event) => {
    event.persist()
    setValues(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  return {
    value,
    handleChange,
    handleSubmit,
    handleFocus,
    errors
  }
}
const ValidationAlert = ({ content }) => {
  if (content) return <div style={{ color: 'red', fontSize: '10px', marginBottom: '8px' }}>{content}</div>
  else return null
}
const validate = (values, step, rules) => {
  const obt = Object.keys(rules)
  console.log(obt)

  const errors = {}
  switch (step) {
    case 1:
      obt.forEach(elem => {
        if (!values[elem]) errors[elem] = elem + ' is required'
      })
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
  const events = { onChange: props.onChange, onFocus: props.onFocus }
  const { err, value } = props

  return (
    <>
      <label>
        nombre
        <input
          type='text'
          name='name'
          value={value.name || ''}
          {...events}
          required
          minLength={45}
        />
      </label>
      <br />
      <ValidationAlert content={err.name} />
      <label>
        email
        <input
          value={value.email || ''}
          type='email'
          required
          name='email'
          {...events}
        />
      </label>
      <br />
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
        <select name='country'>
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
        <input type='checkbox' value='check1' name='checkOption' />
      </label>
      <br />

      <label>
        check 2
        <input type='checkbox' value='check2' name='checkOption' />
      </label>
      <br />
    </>
  )
}
const Three = () => {
  return (
    <>
      <label>
        edad
        <input
          type='number'
          name='edad'
        />
      </label>
      <br />
      <label>
        opcion 1
        <input type='radio' name='radioOpcion' value='opcion1' />
      </label>
      <br />
      <label>
        opcion 2
        <input type='radio' name='radioOpcion' value='opcion2' />
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
  const { value, errors, handleChange, handleSubmit, handleFocus } = useForm(handleClick, validate, step)
  const Inputs = { value, onChange: handleChange, onFocus: handleFocus }
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
