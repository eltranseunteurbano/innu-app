import { useFormik } from "formik"
import { getFormikValidator } from "../../utils/getFormikValidator"
import useAuth from "../../hooks/useAuth";
import firebase from '../../firebase/firebase';

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
        firebase.firestore().collection('companies')
        .doc('Eixw2cYg85wdIusxzjLq').collection('measures').add({
          createdAt: new Date(),
          endDate: new Date(endDate),
          isFinished: false,
          name,
          startDate: new Date(startDate),
        }).then((doc => {
          firebase.firestore().collection('companies').doc('Eixw2cYg85wdIusxzjLq')
          .collection('measures').doc(doc.id).update({id: doc.id})
          formik.setStatus('Enviado');
        }))
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