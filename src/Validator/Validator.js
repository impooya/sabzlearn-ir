import rules from "./rules";

const validator = (value, validations) => {
  // console.log("valid file =>", value, validations);
  let validationResults = [];
  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
  const phonePattern = /^0(9[0-3|1|2|3|4|5|6|7|8|9])\d{8,11}$/;
  for (const validator of validations) {
    if (validator.value === rules.requiredValue) {
      value.trim().length === 0 && validationResults.push(false);
    }
    if (validator.value === rules.minValue) {
      value.trim().length < validator.min && validationResults.push(false);
    }
    if (validator.value === rules.maxValue) {
      value.trim().length > validator.max && validationResults.push(false);
    }
    if (validator.value === rules.emailValue) {
      !emailPattern.test(value) && validationResults.push(false);
    }
    if (validator.value === rules.phoneValue) {
      !phonePattern.test(value) && validationResults.push(false);
    }
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
