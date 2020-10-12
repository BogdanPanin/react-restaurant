import React from "react";

function Form() {
  return (
    <div className="footer-form">
      <div className="footer-form-div">
        <input
          type="email"
          className="footer-form-div-input"
          placeholder="Добавьте эл. почту*"
        ></input>
        <button className="footer-form-btn">OK</button>
      </div>
    </div>
  );
}

export default Form;
