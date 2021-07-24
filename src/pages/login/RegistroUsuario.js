import React, { useState } from 'react'
import { Icon, Card, Form, Button } from 'semantic-ui-react'
import Message from '../../components/message/Message'
import { hot } from 'react-hot-loader/root'
import { useForm } from '../../hooks/useForm/useForm'
import { useValidate } from '../../hooks/useValidate/useValidate'
import LoginRules from './LoginRules'
import './index.css'
import { saveUsuario } from '../../services/Usuarios'

let FieldsForm = {
  documento: '',
  password: '',
  nombre: '',
}

function RegistroUsuario() {
  const [messageForm, setMessageForm] = useState(null)

  const [formValues, handleInputChange, reset] = useForm(FieldsForm)

  const { documento, password, nombre } = formValues

  const handleFormSubmitt = async () => {
    let response = await useValidate(LoginRules, formValues)
    if (response.isValid) {
      await saveUsuario(formValues).then(resp => {
        if (resp?.data?.res) {
          setMessageForm({ type: { success: true }, header: "El usuario se guardo con éxito!!", body: "El usuario se guardo con éxito!!" })
          reset(FieldsForm)
        }
      })

    } else {
      setMessageForm({ type: { negative: true }, body: response.errors })
    }
  }


  return (
    <>
      <Card.Content>
        <Card.Meta>
          <Icon.Group size="big">
            <Icon loading size="big" name="spinner" />
            <Icon name="settings" size="small" />
          </Icon.Group>
          COGNOX
        </Card.Meta>
        <Card.Header>Transferencias Bancarias</Card.Header>
        <Card.Description>
          {messageForm ? <Message data={messageForm} /> : null}
          <Form onSubmit={handleFormSubmitt}>
            <Form.Field>
              <Form.Input value={nombre} name="nombre" autoComplete="off" id="nombre" onChange={handleInputChange} placeholder="Nombre" />
            </Form.Field>
            <Form.Field>
              <Form.Input value={documento} name="documento" autoComplete="off" id="documento" onChange={handleInputChange} placeholder="numero de identificación" type="number" />
            </Form.Field>
            <Form.Field>
              <Form.Input value={password} name="password" id="password" autoComplete="off" onChange={handleInputChange} placeholder="password" type="password" />
            </Form.Field>
            <Button fluid type="submit" primary>
              Registrar
            </Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </>
  )
}

export default hot(RegistroUsuario)
