import React, { memo } from 'react'
import AdmonUsersForm from './AdmonUsersForm'
import {  Redirect } from 'react-router-dom'

const AdmonUsers = () => {
  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  }else{
    return <AdmonUsersForm />
  }
}

export default memo(AdmonUsers)
