import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [textValue, setTextValue] = useState("");
  const [errMessage, setErrMessage] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [boxes, setBoxes] = useState([20, 50, 100]);
  const [checkBoxValue, setCheckBoxValue] = useState([]);

  const handleCheck = (e) => {
    setCheckBoxValue(e.target.name);
    if (checkBoxValue.length > 0) {
      if (errMessage.includes(" 🤯 Możesz wybrać tylko jedną opcję!")) {
        return;
      } else {
        setErrMessage((prevState) => [
          ...prevState,
          " 🤯 Możesz wybrać tylko jedną opcję!",
        ]);
      }
      setCheckBoxValue([]);
    }
  };

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textValue === "") {
      setIsVisible(true);
      if (errMessage.includes(" ✍ Wpisz nick!")) {
        return;
      } else {
        setErrMessage((prevState) => [...prevState, " ✍ Wpisz nick!"]);
      }

      setTimeout(() => {
        setIsVisible(false);
        setErrMessage([]);
      }, 2000);
      return;
    }
    console.log(checkBoxValue.length);
    if (checkBoxValue.length != 0) {
      console.log("dupa12032103");
    }

    setTextValue("");
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Wpisz swój nick"
          value={textValue}
        ></input>
        {boxes.map((item) => (
          <div key={item} className="checkbox">
            <input onChange={handleCheck} type="checkbox" name={item} />
            <h5>{item}</h5>
          </div>
        ))}
        <input color="primary" type="submit" value="Wyślij!" />
        {isVisible
          ? errMessage.map((item) => (
              <div key={item} className="err">
                {item}
              </div>
            ))
          : null}
      </form>
    </div>
  );
};

export default Form;
