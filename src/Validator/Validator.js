import rules from "./rules";

const validator = (value, validations) => {
  //   console.log("valid file =>", value, validations);
  let validationResults = [];
  const emailPattern = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/g;
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
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
