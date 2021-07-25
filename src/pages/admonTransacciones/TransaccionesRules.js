import * as yup from 'yup'

export function TransaccionesRules(param) {
  yup.setLocale(param)
  return yup.object().shape({
    cuenta_destino: yup.string().required('El campo cuenta destino es requerido'),
    cuenta_origen: yup.string().required('El campo cuenta origen es requerido'),
    valor_transferido: yup.string().required('El campo valor transferido es requerido'),
  })
}

export function validacionesExtra(param) {
  let response = { validate: true}
  let condition1 = ((param?.cuenta_destino && param?.cuenta_origen) && (param?.cuenta_destino === param?.cuenta_origen))
  let condition2 = ((param?.valor_transferido) && (param?.valor_transferido === "0"))

  if (condition1) {
    response = { validate: false, message: 'El campo cuenta origen y cuenta destino no deben ser iguales'}
  }
  if (condition2) {
    response = { validate: false, message: 'El campo valor a transferir debe ser mayor a cero'}
  }
  return response
}

export default TransaccionesRules
