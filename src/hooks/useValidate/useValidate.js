import React, { useState } from 'react'

export const useValidate = async (initialRules, formValues) => {
  let response
  let data = initialRules({
    mixed: {
      required: ({ path }) => `El campo ${path} es requerido`
    }
  })

  const responseFormat = (isValid, errors) => {
    return { isValid, errors }
  }

  await data
    .validate(formValues)
    .then(function (valid) {
      response = responseFormat(true, valid)
    })
    .catch(function (err) {
      if (err?.errors !== undefined) {
        response = responseFormat(false, err?.errors)
      }
    })
  return response
}
