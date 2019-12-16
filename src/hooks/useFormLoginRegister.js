import { useEffect, useState } from 'react'
import { validateRegisterUser } from '../Components/RegisterBrand/validation'
import { isEmptyObject } from '../utils/utils'

const useFormRegisterLoginUser = (initialData, callback) => {
  const [formValues, setFormValues] = useState(initialData)
  const [errors, setErrors] = useState({})
  const [click, setClick] = useState(false)

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  useEffect(() => { // validar el formulario
    if (click) {
      if (isEmptyObject(errors)) { // si el objeto error esta vacio
        callback()
      }
    }
  }, [errors])

  useEffect(() => { // quitar mensaje de error
    if (!isEmptyObject(errors)) { // si el objeto error no esta vacio
      setErrors(validateRegisterUser(formValues))
      setClick(false)
    }
  }, [formValues])

  const handleClick = (e) => {
    e.preventDefault()
    setErrors(validateRegisterUser(formValues))
    setClick(true)
  }

  return [
    formValues,
    handleChange,
    handleClick,
    errors
  ]
}

export { useFormRegisterLoginUser }
