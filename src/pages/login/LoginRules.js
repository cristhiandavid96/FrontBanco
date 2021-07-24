import * as yup from 'yup'

function LoginRules(param) {
  yup.setLocale(param)
  return yup.object().shape({
    documento: yup.string().required(),
    password: yup.string().required()
  })
}
export default LoginRules
