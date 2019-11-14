import { useState, useEffect } from 'react'
import validation from '../Components/RegisterBrand/validation'
import { setViewUp } from '../Components/utils'

const useForm = (InitialState = {}, nextStepCallback, currentStep) => {
  const [state, setState] = useState(InitialState) // el estado o datos del formulario
  const [errors, setErrors] = useState({}) // los errores de las validaciones del formulario
  const [isNextStep, setIsNextStep] = useState(false) // para saber si estoy dando click al boton de next

  // este effect es para validar el formulario cuando se haga click en next
  useEffect(() => {
    if (isNextStep) {
      if (Object.keys(errors).length === 0) {
        nextStepCallback()
      }
    }
  }, [errors])

  // este effect es para quitar la alarma de error cuando se llene el campo requerido
  useEffect(() => {
    if (Object.keys(errors).length !== 0) {
      setErrors(validation(state, currentStep))
      setIsNextStep(false)
    }
  }, [state])

  const nextStep = (event) => {
    if (event) event.preventDefault()
    // setViewUp()
    setErrors(validation(state, currentStep))
    setIsNextStep(true)
  }

  const handleChange = (event, inputName, specificValue) => { // el segundo y tercer parametro es para especificar una key y un valor especifico a modificar que no sea el valor del target (como el caso del color que viene desde un picker distinto
    event.persist()
    const elem = event.target // el elemento del onChange
    let value // el nuevo valor a modificar
    let elemReturn // el nuevo estado a retornar
    const multiple = state[elem.name] ? state[elem.name].type === 'select-multi' : false

    if (specificValue) {
      value = specificValue
    } else if (elem.type === 'checkbox') {
      value = elem.checked
    } else {
      value = elem.value
    }

    if (elem.type === 'checkbox' && inputName) { // chequeo si el tipo de checkbox porque el modelado de datos para este tipo es diferente
      const newOptions = state[inputName].options
      newOptions.find(o => o.name === elem.name).value = value // busco el objeto que contiene el nombre del input que estoy cambiando
      elemReturn = {
        ...state,
        [inputName]: {
          ...state[inputName],
          options: newOptions
        }
      }
    } else {
      let arr
      if (multiple) { // esto solo es para select multiple
        arr = state[elem.name].value
        if (value) arr = arr.concat([value])
      }
      elemReturn = {
        ...state,
        [inputName || elem.name]: {
          ...state[elem.name || inputName], // esto es por si viene el valor desde los valores especificados en vez del target
          value: multiple ? arr : value// aqui pregunto si el input es el select multiple, esto es para implementar el multiselect
        }
      }
    }
    setState(elemReturn)
  }

  const removeCountry = (e, inputName) => { // para remover los paises del multiselect
    const deleteElement = e.target.parentNode.firstChild.innerHTML
    setState(state => {
      const vectorRemoved = state[inputName].value
      vectorRemoved.splice(vectorRemoved.indexOf(deleteElement), 1)
      return ({
        ...state,
        [inputName]: {
          ...state[inputName],
          value: vectorRemoved
        }
      })
    })
  }

  return {
    state,
    handleChange,
    removeCountry,
    nextStep,
    errors
    /* handleSubmit,
    errors */
  }
}

export default useForm
