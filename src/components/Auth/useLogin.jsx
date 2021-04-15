import { useFormik } from "formik";
import { getFormikValidator } from "../../utils/getFormikValidator";
import { useHistory } from "react-router-dom";
import { APP } from "../../Routes/Routes";

const initialValues = {
  email: "",
  password: "",
};

const rules = {
  email: "required",
  password: "required",
};

const customMessages = {
  "required.email": "Debes ingresar un correo",
  "required.password": "Debes ingresar una contraseña",
};

const useLogin = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues,
    validate: getFormikValidator(rules, undefined, undefined, customMessages),
    onSubmit: (email, password) => {
      history.push(APP);
    },
  });

  return {
    formik,
  };
};

export default useLogin;
