import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { saveProject } from '../../services/Projects'
import { Icon, Form, Button } from 'semantic-ui-react'
import CardForm from '../../components/Card/CardForm'
import Message from '../../components/message/Message'
import { useValidate } from '../../hooks/useValidate/useValidate'
import ProjectsRules from './ProjectsRules'
import FieldsForm from './InitFieldsForm'

const AdmonProjectsForm = () => {
  const [messageForm, setMessageForm] = useState(null)

  const [formValues, handleInputChange, reset] = useForm(FieldsForm)

  const { client, description, name } = formValues

  const handleFormSubmit = async () => {
    let response = await useValidate(ProjectsRules, formValues)

    if (response.isValid) {
      await saveProject(formValues).then(res => {
        setMessageForm({ type: { success: true }, header: 'El proyecto se guardo con éxito!!' })
        reset(FieldsForm)
      })
    } else {
      setMessageForm({ type: { negative: true }, body: response.errors })
    }
  }
  return (
    <>
      <CardForm description={'Creación de Proyectos'} title={'Administración de proyectos'} iconCard={{ icon: 'sitemap', size: 'large' }}>
        {messageForm ? <Message data={messageForm} /> : null}
        <Form onSubmit={handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <Form.Input value={client} name="client" autoComplete="off" id="client" onChange={handleInputChange} placeholder="cliente" />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Form.Input value={description} name="description" autoComplete="off" id="description" onChange={handleInputChange} placeholder="descripcion" />
            </Form.Field>
            <Form.Field>
              <Form.Input value={name} name="name" autoComplete="off" id="name" onChange={handleInputChange} placeholder="nombre" />
            </Form.Field>
          </Form.Group>
          <Button type="submit" className="buttonForm">
            <Icon name="save" />
            Guardar
          </Button>
        </Form>
      </CardForm>
    </>
  )
}

export default AdmonProjectsForm
