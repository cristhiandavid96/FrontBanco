import React from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { proyectos } from './strings'
import { getAuth } from '../../services/Auth'
import { Icon, Form, Dropdown, Button } from 'semantic-ui-react'
import CardForm from '../../components/Card/CardForm'

const AdmonUsersForm = () => {
  const [formValues, handleInputChange] = useForm({
    username: '',
    firstname: '',
    email: ''
  })

  const handleFormSubmit = async () => {
    await getAuth()
  }
  const { username, firstname, email } = formValues
  return (
    <>
      <CardForm description={'Búsqueda de usuarios'} title={'Administración de usuarios'} iconCard={{ icon: 'users', size: 'large' }}>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <Dropdown placeholder="Proyecto" search selection options={proyectos} />
            </Form.Field>
            <Form.Field>
              <Form.Input value={username} name="username" autoComplete="off" id="username" onChange={handleInputChange} placeholder="usuario de red" />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Form.Input value={firstname} name="firstname" autoComplete="off" id="firstname" onChange={handleInputChange} placeholder="nombre" />
            </Form.Field>
            <Form.Field>
              <Form.Input value={email} name="email" autoComplete="off" id="email" onChange={handleInputChange} placeholder="correo" />
            </Form.Field>
          </Form.Group>
          <Button type="submit" className="buttonForm">
            <Icon name="search" />
            Buscar
          </Button>
        </Form>
      </CardForm>
    </>
  )
}

export default AdmonUsersForm
