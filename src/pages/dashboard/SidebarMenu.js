import React, { memo } from 'react'
import { Icon, Menu, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import '../dashboard/index.css'

export const SidebarMenu = () => {
  return (
    <div className="container-sidebar-menu">
      <Menu.Item>        
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/home">
          <Icon name="home" />
          Home
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/cuentas">
          <Icon name="sitemap" />
          Estado de la cuenta          
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink to="/transacciones">
          <Icon name="handshake outline" />
          Transacciones Bancarias
        </NavLink>
      </Menu.Item>
    </div>
  )
}

export default memo(SidebarMenu)
