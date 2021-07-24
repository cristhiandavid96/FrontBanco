import React, { useEffect, useState } from 'react'
import { Button, Icon, Table, Header, Image, Modal } from 'semantic-ui-react'
import { ListCuenta } from '../../services/Cuentas'
import Admoncuentas from './AdmonCuentasForm'
import { getId } from '../../helpers/user';



export const ListCuentas = () => {
  const [listForm, setListForm] = useState([])
  const [bandera, setBandera] = useState(false)
  const [open, setOpen] = useState(false)

  const PrintCuentas = () => {
    return (
      <>
        {listForm.map((row, id) => (
          <Table.Row key={id}>
            <Table.Cell>{row.numero}</Table.Cell>
            <Table.Cell>{row.estado}</Table.Cell>
            <Table.Cell>{row.usuario_id}</Table.Cell>
            <Table.Cell>{row.valor}</Table.Cell>
          </Table.Row>
        ))}
      </>
    )
  }

  const resolve = async () => {
    await ListCuenta(getId()).then(res => {
      if (res?.res?.length > 0) {
        setListForm(res?.res)
      }
    })
  }
  useEffect(() => {
    let isMount = true
    if (bandera === false && listForm.length == 0) {
      resolve()
    }
    return () => {
      isMount = false
    }
  })

  useEffect(() => {
    let isMount = true
    if (bandera === true && isMount) {
      setBandera(false)
      setOpen(false)
      resolve()
    }
    return () => {
      isMount = false
    }
  }, [bandera, listForm])
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        closeIcon
      >
        <Modal.Header>Creación de Cuentas</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <Admoncuentas bandera={(prop) => setBandera(prop)} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      <Header>Administración de Cuentas</Header>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Numero de Cuentas</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
            <Table.HeaderCell>Valor Actual</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{listForm.length > 0 ? <PrintCuentas /> : null}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button floated="left" icon labelPosition="left" onClick={() => setOpen(true)} className="buttonForm" size="small">
                <Icon name="sitemap" /> Nueva Cuenta
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  )
}
