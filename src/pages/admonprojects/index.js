import React, { memo } from 'react'
import AdmonProjectsForm from './AdmonProjectsForm'
import { ListProjects } from './ListProjects'

const AdmonProjects = () => {
  return (
    <>
      <AdmonProjectsForm />
      <ListProjects />
    </>
  )
}
export default memo(AdmonProjects)
