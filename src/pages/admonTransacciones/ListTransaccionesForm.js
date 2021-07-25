import React, { useEffect, useState ,memo} from 'react'
import { Button, Icon, Table, Header, Image, Modal } from 'semantic-ui-react'
import { ListTransaccion } from '../../services/Transacciones'
import AdmonTransaccionesForm from './AdmonTransaccionesForm'
import { getId } from '../../helpers/user'



 const ListTransaccionesForm = () => {
  const [listForm, setListForm] = useState([])
  const [bandera, setBandera] = useState(false)
  const [open, setOpen] = useState(false)

  const PrintTransferencias = () => {
    return (
      <>
        {listForm.map((row, id) => (
          <Table.Row key={id}>
            <Table.Cell>{row.cuenta_origen}</Table.Cell>
            <Table.Cell>{row.cuenta_destino}</Table.Cell>
            <Table.Cell>{row.estado}</Table.Cell>
            <Table.Cell>{row.valor_transferido}</Table.Cell>
            <Table.Cell>{row.usuario_id}</Table.Cell>
          </Table.Row>
        ))}
      </>
    )
  }

  const resolve = async () => {
    await ListTransaccion(getId()).then(res => {
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
        <Modal.Header>Realizar transaccion a cuentas suscritas</Modal.Header>
        <Modal.Content >
          <Modal.Description>
            <AdmonTransaccionesForm bandera={(prop) => setBandera(prop)} />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setOpen(false)}>
            Close
          </Button>
        </Modal.Actions>
      </Modal>
      <Header>Mis transferencias</Header>
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Cuenta Origen</Table.HeaderCell>
            <Table.HeaderCell>Cuenta Destino</Table.HeaderCell>
            <Table.HeaderCell>Estado</Table.HeaderCell>
            <Table.HeaderCell>Valor Transferido</Table.HeaderCell>
            <Table.HeaderCell>Usuario</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{listForm.length > 0 ? <PrintTransferencias /> : null}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Button floated="left" icon labelPosition="left" onClick={() => setOpen(true)} className="buttonForm" size="small">
                <Icon name="sitemap" /> 
                Nueva Transferencia
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  )
}

export  default memo(ListTransaccionesForm)
