import React from 'react'
import { Message as Msg } from 'semantic-ui-react'
import propTypes from 'prop-types'

function Message({ data: { type, body, header } }) {
  header = type?.negative ? 'Corrige los siguientes errores:' : header
  return (
    <Msg {...type}>
      <Msg.Header>{header}</Msg.Header>
      <p>{body}</p>
    </Msg>
  )
}

Message.propTypes = {
  data: propTypes.object.isRequired
}

export default Message
