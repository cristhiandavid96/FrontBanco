import React, { memo } from 'react'
import { Button, Segment } from 'semantic-ui-react'
import '../dashboard/index.css'
import propTypes from 'prop-types'

const SidebarContent = ({ children, visible, changeState }) => {
  return (
    <Segment basic>
      <Button icon="list ul" className="button-login" size="large" onClick={() => changeState(!visible)} />
      {children}
    </Segment>
  )
}

SidebarContent.propTypes = {
  children: propTypes.any.isRequired
}
export default memo(SidebarContent)
