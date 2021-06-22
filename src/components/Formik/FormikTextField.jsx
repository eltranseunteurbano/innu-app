import React from "react";
import PropTypes from "prop-types";
import TextField from "../TextField/TextField";

const FormikTextField = (props) => {
  const {
    valueId,
    formik: { values, errors, handleChange, touched, handleBlur },
    isDate = false,
  } = props;

  const value = values[valueId] || values[valueId] === 0 ? values[valueId] : "";
  return (
    <TextField
      {...props}
      name={valueId}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      error={errors[valueId] && Object.keys(errors[valueId]).length > 0}
      helperText={
        errors[valueId] && touched[valueId] ? errors[valueId] : props.helperText
      }
      InputProps={isDate ? { type: 'date' } : {}}
    />
  );
};

FormikTextField.propTypes = {
  valueId: PropTypes.string.isRequired,
  formik: PropTypes.any.isRequired,
};

export default FormikTextField;
