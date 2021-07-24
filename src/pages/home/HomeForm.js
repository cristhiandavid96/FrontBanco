import React from 'react'
import { Header } from 'semantic-ui-react'
import {getName} from '../../helpers/user';

export const HomeForm = () => {
  return (
    <>
      <Header as="h3"> Hola {getName()} , bienvenid@ al modulo de transferecias bancarias</Header>
    </>
  )
}
