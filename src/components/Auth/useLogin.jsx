import { useFormik } from "formik";
import { getFormikValidator } from "../../utils/getFormikValidator";

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
  const formik = useFormik({
    initialValues,
    validate: getFormikValidator(rules, undefined, undefined, customMessages),
    onSubmit: (email, password) => {},
  });

  return {
    formik,
  };
};

export default useLogin;
