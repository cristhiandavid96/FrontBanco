import React, { memo } from 'react'
import AdmonTransaccionesForm from './AdmonTransaccionesForm'
import {  Redirect } from 'react-router-dom'

const AdmonTransaccion = () => {
  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  }else{
    return <AdmonTransaccionesForm />
  }
}

export default memo(AdmonTransaccion)
