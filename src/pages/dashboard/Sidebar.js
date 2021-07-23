import React, { memo } from 'react'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import '../dashboard/index.css'
import MenuRight from './Menu'
import SidebarContent from './SidebarContent'
import SidebarMenu from './SidebarMenu'
import propTypes from 'prop-types'

const SidebarCore = ({ children }) => {
  const [visible, setVisible] = React.useState(true)

  return (
    <>
      <MenuRight />
      <div className="container-sidebar">
        <Sidebar.Pushable as={Segment}>
          <Sidebar className="comp-sidebar" as={Menu} animation="push" inverted onHide={() => setVisible(false)} vertical visible={visible} width="thin">
            <SidebarMenu />
          </Sidebar>
          <Sidebar.Pusher>
            <SidebarContent children={children} visible={visible} changeState={param => setVisible(param)} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    </>
  )
}

SidebarCore.propTypes = {
  children: propTypes.any.isRequired
}
export default memo(SidebarCore)
