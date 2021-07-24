import * as yup from 'yup'

function CuentasRules(param) {
  yup.setLocale(param)
  return yup.object().shape({
    numero: yup.string().required('El campo numero es requerido'),
    valor: yup.string().required('El campo valor es requerido')
  })
}
export default CuentasRules
