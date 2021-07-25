import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm/useForm'
import { Icon, Form, Dropdown, Button } from 'semantic-ui-react'
import CardForm from '../../components/Card/CardForm'
import { BuscarCuenta } from '../../services/Cuentas'
import { saveTransaccion } from '../../services/Transacciones'
import { getId } from '../../helpers/user'
import { TransaccionesRules, validacionesExtra } from './TransaccionesRules';
import { useValidate } from '../../hooks/useValidate/useValidate'
import Message from '../../components/message/Message'
import { ListAllCuenta } from '../../services/Cuentas'
let FieldsForm = {
  cuenta_destino: '',
  valor_transferido: '',
  cuenta_origen: '',
  estado: 1,
}

const AdmonTransaccionesForm = ({ bandera }) => {
  const [listForm, setListForm] = useState([])
  const [listFormAll, setListFormAll] = useState([])
  const [messageForm, setMessageForm] = useState(null)
  const [formValues, handleInputChange, reset, handleInputChangeDropdown] = useForm(FieldsForm)

  const handleFormSubmits = async () => {
    let response = await useValidate(TransaccionesRules, formValues)
    let responseValidateExtra = validacionesExtra(formValues)
    Object.assign(formValues, { usuario_id: getId() })

    if (responseValidateExtra?.validate) {
      if (response.isValid) {
        await saveTransaccion(formValues).then(resp => {
          reset(FieldsForm)
          setMessageForm({ type: { success: true }, body: "La transaccion se guardo con éxito!!", header: "La transaccion se guardo con éxito!!" })
          bandera(true)
        })
      } else {
        setMessageForm({ type: { negative: true }, body: response.errors })
      }
    } else {
      setMessageForm({ type: { negative: true }, body: responseValidateExtra.message })
    }
  }

  const resolve = async () => {
    await BuscarCuenta(getId()).then(res => {
      if (res?.res?.length > 0) {
        setListForm(res?.res)
      }
    })
  }

  const resolveAll = async () => {
    await ListAllCuenta().then(res => {
      if (res?.res?.length > 0) {
        setListFormAll(res?.res)
      }
    })
  }
  useEffect(() => {
    let IsMount = true
    if (IsMount && listForm.length == 0) {
      resolve()
    }

    if (IsMount && listFormAll.length == 0) {
      resolveAll()
    }

    return () => {
      IsMount = false
    }
  })

  const { valor_transferido } = formValues
  return (
    <>
      {messageForm ? <Message data={messageForm} /> : null}
      <Form onSubmit={handleFormSubmits}>
        <Form.Group widths="equal">
          <Form.Field>
            <Dropdown wrapSelection={false} placeholder="cuenta origen" search name="cuenta_origen" id="cuenta_origen" selection options={listForm} onChange={handleInputChangeDropdown} />
          </Form.Field>
          <Form.Field>
            <Dropdown wrapSelection={false} placeholder="cuenta destino" search name="cuenta_destino" id="cuenta_origen" selection options={listFormAll} onChange={handleInputChangeDropdown} />
          </Form.Field>
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field>
            <Form.Input value={valor_transferido} name="valor_transferido" type="number" autoComplete="off" id="valor_transferido" onChange={handleInputChange} placeholder="Valor a transferir" />
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

export default AdmonTransaccionesForm
