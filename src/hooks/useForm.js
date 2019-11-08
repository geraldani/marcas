import { useState } from 'react'

const useForm = (currentStep, submitCallback) => {
  const [state, setState] = useState({})
  // const [errors, setErrors] = useState({})
  // const [isSubmitting, setIsSubmitting] = useState(false)
  // const [rules, setRules] = useState({})

  /*
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback()
      }
    }, [errors])
  */

  /*  const handleSubmit = (event) => {
      if (event) event.preventDefault()
      setErrors(validate(value, currentStep, rules))
      setIsSubmitting(true)
    } */

  const handleChange = (event, inputName, specificValue) => { // el segundo y tercer parametro es para especificar una key y un valor especifico a modificar que no sea el valor del target
    event.persist()
    const elem = event.target
    let value

    if (specificValue) {
      value = specificValue
    } else if (elem.type === 'checkbox') {
      value = elem.checked
    } else {
      value = elem.value
    }

    setState(values => ({
      ...values,
      [inputName || elem.name]: value
    }))
  }

  return {
    state,
    handleChange
    /*handleSubmit,
    errors*/
  }
}

export default useForm
