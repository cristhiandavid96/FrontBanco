import * as yup from 'yup'

function ProjectsRules(param) {
  yup.setLocale(param)
  return yup.object().shape({
    client: yup.string().required('El campo cliente es requerido'),
    description: yup.string().required('El campo descripcion es requerido'),
    name: yup.string().required('El campo nombre es requerido')
  })
}
export default ProjectsRules
