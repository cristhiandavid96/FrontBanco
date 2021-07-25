import React, { memo } from 'react'
import { Dropdown, Icon } from 'semantic-ui-react'
import '../dashboard/index.css'
import {getName} from '../../helpers/user';

const MenuRight = () => {
  const getIcon = () => {
    return <Icon name="cogs" size="large" />
  }

  return (
    <div className="exit">
      <Dropdown item icon={getIcon()}>
        <Dropdown.Menu direction="left">
          <Dropdown.Item>{'usuario : '+getName()}</Dropdown.Item>
          <Dropdown.Item href="/FrontBanco/#/" onClick={() => { localStorage.removeItem('jwt') }}  >Salir</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default memo(MenuRight)
