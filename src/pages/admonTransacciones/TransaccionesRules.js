import * as yup from 'yup'

function TransaccionesRules(param) {
  yup.setLocale(param)
  return yup.object().shape({
    cuenta_destino: yup.string().required('El campo cuenta destino es requerido'),
    cuenta_origen: yup.string().required('El campo cuenta origen es requerido'),
    valor_transferido: yup.string().required('El campo valor transferido es requerido'),
  })
}
export default TransaccionesRules
