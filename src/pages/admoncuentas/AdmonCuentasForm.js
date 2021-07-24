import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { saveCuenta } from '../../services/Cuentas'
import { Icon, Form, Button } from 'semantic-ui-react'
import Message from '../../components/message/Message'
import { useValidate } from '../../hooks/useValidate/useValidate'
import CuentasRules from './CuentasRules'
import FieldsForm from './InitFieldsForm'
import {getId} from '../../helpers/user'

const AdmonCuentasForm = ({bandera}) => {
  const [messageForm, setMessageForm] = useState(null)

  const [formValues, handleInputChange, reset] = useForm(FieldsForm)

  const { numero, valor } = formValues

  const handleFormSubmit = async () => {
    let response = await useValidate(CuentasRules, formValues)
    Object.assign(formValues,{usuario_id:getId()})  
    if (response.isValid) {      
      await saveCuenta(formValues).then(res => {
        setMessageForm({ type: { success: true }, header: 'La cuenta se guardo con éxito!!' })
        reset(FieldsForm)
        bandera(true)
      })
    } else {
      setMessageForm({ type: { negative: true }, body: response.errors })
    }
  }
  return (
    <>
        {messageForm ? <Message data={messageForm} /> : null}
        <Form onSubmit={handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Field>
              <Form.Input value={numero} name="numero" autoComplete="off" id="numero" onChange={handleInputChange} placeholder="numero de cuenta" type="number"/>
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <Form.Input value={valor} name="valor" autoComplete="off" id="valor" onChange={handleInputChange} placeholder="valor actual" />
            </Form.Field>
          </Form.Group>
          <Button type="submit" className="buttonForm">
            <Icon name="save" />
            Guardar
          </Button>
        </Form>
    </>
  )
}

export default AdmonCuentasForm
