import Validator from "validatorjs";

export const getFormikValidator = (
  rules,
  customAttributeNames,
  filter,
  customMessages
) => (data) => {
  if (filter) rules = filter(data, rules);
  const validator = new Validator(data, rules, customMessages);
  if (!!customAttributeNames) validator.setAttributeNames(customAttributeNames);
  validator.passes();

  const validation = validator.errors.all();
  let formikValidation = {};

  for (const key in validation) {
    formikValidation[key] = validation[key][0];
  }

  return formikValidation;
};
