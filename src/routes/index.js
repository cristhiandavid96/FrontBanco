import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../src/components/layouts/login/Login'
import Home from '../pages/home'
import AdmonUsersForm from '../pages/admonusers'
import AdmonProjectsForm from '../pages/admonprojects'
import Sidebar from '../pages/dashboard/Sidebar'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Sidebar>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/users" exact={true} component={AdmonUsersForm} />
        <Route path="/projects" exact={true} component={AdmonProjectsForm} />
      </Sidebar>
    </Switch>
  )
}

export default Routes
