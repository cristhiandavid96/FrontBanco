import React, { memo } from 'react'
import AdmonProjectsForm from './AdmonProjectsForm'
import { ListProjects } from './ListProjects'
import {  Redirect } from 'react-router-dom'

const AdmonProjects = () => {
  if (!(localStorage.getItem("jwt"))) {
    return <Redirect path="/" to="/" />
  }else{
    return (
      <>
        <AdmonProjectsForm />
        <ListProjects />
      </>
    )
  }
 
}
export default memo(AdmonProjects)
