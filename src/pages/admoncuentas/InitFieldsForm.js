import {getId} from '../../helpers/user';



const FieldsForm = {
  numero: '',
  valor: '',
  usuario_id: getId() || 1,
  estado: 1
}
export default FieldsForm
