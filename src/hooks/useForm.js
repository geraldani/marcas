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

  const handleChange = (event, inputName, specificValue) => { // el segundo y tercer parametro es para especificar una key y un valor especifico a modificar que no sea el valor del target (como el caso del color que viene desde un picker distinto
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

    setState(values => {
      let arr = values[elem.name] || []
      if (value) arr = arr.concat([value])
      // [...(values[elem.name] || []), ...[value]]
      return ({
        ...values,
        [inputName || elem.name]: elem.multiple ? arr : value // aqui pregunto si el input es el country select, esto es para implementar el multiselect
      })
    })
  }

  const removeCountry = (e, inputName) => { // para remover los paises del multiselect
    const deleteElement = e.target.parentNode.firstChild.innerHTML.toLowerCase()
    setState(val => {
      const vectorRemoved = val[inputName]
      vectorRemoved.splice(vectorRemoved.indexOf(deleteElement), 1)
      return ({
        ...val,
        [inputName]: vectorRemoved
      })
    })
  }

  return {
    state,
    handleChange,
    removeCountry
    /* handleSubmit,
    errors */
  }
}

export default useForm
