import React, { memo ,useState} from 'react'
import { ListCuentas } from './ListCuentas'
import {  Redirect } from 'react-router-dom'

const AdmonCuentas = () => {
  const [open, setOpen] = useState(false)

  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  }else{
    return (
      <>
        <ListCuentas />
      </>
    )
  }
 
}
export default memo(AdmonCuentas)
