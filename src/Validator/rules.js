const requiredValue = "REQUIRED_VALUE";
const minValue = "MIN_VALUE";
const maxValue = "MAX_VALUE";
const userValidRegex = "USER_REGEX";
const emailValue = "EMAIL_VALUE";

export const requiredValidator = () => ({
  value: requiredValue,
});

export const minValidator = (min) => ({
  value: minValue,
  min,
});

export const maxValidator = (max) => ({
  value: maxValue,
  max,
});

export const emailValidator = () => ({
  value: emailValue,
});

export const userRegexValidator = () => ({
  value: userValidRegex,
  regex: /^[a-zA-Z0-9_-]+$/,
});
