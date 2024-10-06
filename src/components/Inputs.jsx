import { useReducer } from "react";
import validator from "../Validator/Validator";
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE": {
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validation),
      };
    }
    default: {
      return state;
    }
  }
};

function Inputs({ mainElement, type, placeholder, className, validation }) {
  // console.log(validation);
  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  const onChangeHandler = (event) => {
    // console.log(event.target.value);
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validation,
      isValid: true,
    });
  };
  const element =
    mainElement === "input" ? (
      <input
        type={type}
        value={mainInput.value}
        placeholder={placeholder}
        className={`${className} ${
          mainInput.isValid ? "border-green-primery" : "border-red-500"
        }`}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        value={mainInput.value}
        className={className}
        onChange={onChangeHandler}
      />
    );
  return <div>{element}</div>;
}

export default Inputs;
