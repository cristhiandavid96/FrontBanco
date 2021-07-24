import React, { memo } from 'react'
import { HomeForm } from './HomeForm'
import { Redirect } from 'react-router-dom'

const Home = () => {
  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  } else {
    return <HomeForm />
  }
}

export default memo(Home)
