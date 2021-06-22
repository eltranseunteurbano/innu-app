import { useFormik } from "formik"
import { getFormikValidator } from "../../utils/getFormikValidator"
import useAuth from "../../hooks/useAuth";
import moment from 'moment';

const initialValues = {
  startDate: "",
  endDate: "",
  name: ""
}

const rules = {
  startDate: "required",
  endDate: "required"
}

const customMessages = {
  "required.startDate": 'Debes seleccionar una fecha de inicio',
  "required.endDate": 'Debes seleccionar una fecha de fin',
}

const useNewMeasure = () => {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues,
    validate: getFormikValidator(rules, undefined, undefined, customMessages),
    onSubmit: ({ name, startDate, endDate }) => {
      if(user){
        console.log({name, startDate, endDate})
        formik.setStatus('Enviado')
      } else {
        console.error('error');
      }
    }
  })

  return {
    formik,
  }
}

export default useNewMeasure;