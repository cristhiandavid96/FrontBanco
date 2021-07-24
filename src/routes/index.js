import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../../src/components/layouts/login/Login'
import Home from '../pages/home'
import AdmonUsersForm from '../pages/admonusers'
import AdmonCuentasForm from '../pages/admoncuentas'
import Sidebar from '../pages/dashboard/Sidebar'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Login} />
      <Sidebar>
        <Route path="/home" exact={true} component={Home} />
        <Route path="/transacciones" exact={true} component={AdmonUsersForm} />
        <Route path="/cuentas" exact={true} component={AdmonCuentasForm} />
      </Sidebar>
    </Switch>
  )
}

export default Routes
