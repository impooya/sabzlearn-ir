function Inputs({ mainElement, type, placeholder, className }) {
  const onChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const element =
    mainElement === "input" ? (
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        placeholder={placeholder}
        className={className}
        onChange={onChangeHandler}
      />
    );
  return <div>{element}</div>;
}

export default Inputs;
