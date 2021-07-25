import React, { memo } from 'react'
import ListTransaccionesForm from './ListTransaccionesForm'
import {  Redirect } from 'react-router-dom'

const AdmonTransaccion = () => {
  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  }else{
    return <ListTransaccionesForm />
  }
}

export default memo(AdmonTransaccion)
