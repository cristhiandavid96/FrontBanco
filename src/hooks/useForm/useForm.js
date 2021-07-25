import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState)

  const reset = fieldsForm => {
    setValues(fieldsForm)
  }

  const handleInputChange = ({ target }) => {

    setValues({
      ...values,
      [target.name]: target.value
    })
  }
  const handleInputChangeDropdown = (event, data) => {
    setValues({
      ...values,
      [data.name]:data.value
    })
  }

  return [values, handleInputChange, reset,handleInputChangeDropdown]
}
