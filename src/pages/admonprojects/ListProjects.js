import React, { useEffect, useState } from 'react'
import { Button, Icon, Table } from 'semantic-ui-react'
import { ListProject } from '../../services/Projects'

export const ListProjects = () => {
  const [listForm, setListForm] = useState([])

  const PrintProjects = () => {
    return (
      <>
        {listForm.map((row, id) => (
          <Table.Row key={id}>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>{row.client}</Table.Cell>
            <Table.Cell>{row.description}</Table.Cell>
          </Table.Row>
        ))}
      </>
    )
  }

  const resolve = async () => {
    await ListProject().then(res => {
      setListForm(res)
    })
  }
  useEffect(() => {
    let isMount = true
    if (isMount && listForm.length == 0) {
      resolve()
    }
    return () => {
      isMount = false
    }
  })
  return (
    <>
      {console.log(listForm)}
      <Table celled compact definition>
        <Table.Header fullWidth>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Cliente</Table.HeaderCell>
            <Table.HeaderCell>Descripcion</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{listForm.length > 0 ? <PrintProjects /> : null}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan="4">
              <Button floated="left" icon labelPosition="left" className="buttonForm" size="small">
                <Icon name="sitemap" /> Nuevo
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </>
  )
}
