import React, { memo } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import '../dashboard/index.css'

const MenuRight = () => {
  const getIcon = () => {
    return <Icon name="cogs" size="large" />
  }

  return (
    <div className="exit">
      <Dropdown item icon={getIcon()}>
        <Dropdown.Menu direction="left">
          <Dropdown.Item>cristhian velez</Dropdown.Item>
          <Dropdown.Item>¿desea salir?</Dropdown.Item>
          <Dropdown.Item>Mas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default memo(MenuRight)
