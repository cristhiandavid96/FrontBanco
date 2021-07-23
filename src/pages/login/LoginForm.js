import React, { useState } from 'react'
import { Grid, Icon, Card, Form, Button } from 'semantic-ui-react'
import Message from '../../components/message/Message'
import { Redirect } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import { useForm } from '../../hooks/useForm/useForm'
import { useValidate } from '../../hooks/useValidate/useValidate'
import LoginRules from './LoginRules'
import './index.css'

function LoginForm() {
  const [isLoguin, setIsLoguin] = useState(false)
  const [messageForm, setMessageForm] = useState(null)

  const [formValues, handleInputChange, reset] = useForm({
    username: '',
    password: ''
  })

  const { username, password } = formValues

  const handleFormSubmit = async () => {
    let response = await useValidate(LoginRules, formValues)
    if (response.isValid) {
      reset(formValues)
      setIsLoguin(true)
    } else {
      setMessageForm({ type: { negative: true }, body: response.errors })
    }
  }

  if (isLoguin) {
    return <Redirect to="/home" />
  }

  return (
    <>
      <Grid container-fluid="true" centered>
        <Grid.Column className="loginform" mobile={16} tablet={8} computer={4}>
          <Card fluid>
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
                <Form onSubmit={handleFormSubmit}>
                  <Form.Field>
                    <Form.Input value={username} name="username" autoComplete="off" id="username" onChange={handleInputChange} placeholder="user" icon="user circle" />
                  </Form.Field>
                  <Form.Field>
                    <Form.Input value={password} name="password" id="password" autoComplete="off" onChange={handleInputChange} placeholder="password" type="password" icon="lock" />
                  </Form.Field>
                  <Button fluid type="submit" primary>
                    INGRESAR
                  </Button>
                </Form>
              </Card.Description>
            </Card.Content>
            <Card.Content extra>COGNOX</Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default hot(LoginForm)
