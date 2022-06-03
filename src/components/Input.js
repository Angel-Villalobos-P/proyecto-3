import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import validator from "validator";

const Input = () => {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");

  const removeDollarSign = (value) =>
    value[0] === "$" ? value.slice(1) : value;
  const getReturnValue = (value) => (value === "" ? "" : `$${value}`);

  const handleChange = (e) => {
    e.preventDefault();
    const inputtedValue = e.currentTarget.value;
    // const noDollarSign = removeDollarSign(inputtedValue);
    // if (isNaN(noDollarSign)) return;
    // setValue(getReturnValue(noDollarSign));
    validateEmailFormat(e);
    validCorporateEmails(e);

    // if (!validateEmailFormat(e)) {
    //   setWarning("Invalid email format!");
    // }
    // if (!validCorporateEmails(e)) {
    //   setWarning("Email is not allowed");
    // }
  };

  const validCorporateEmails = (e) => {
    let value = e.target.value;

    let corporateEmails = [
      "gmail.com",
      "yahoo.es",
      "outlook.com",
      "zoho.com",
      "hotmail.com",
    ].some((email) => value.endsWith(email));

    if (corporateEmails) {
        setWarning("Email not allowed!");
    //   return false;
    }
    // return true;
  };

  const validateEmailFormat = (e) => {
      let email = e.target.value;
      console.log(email);

    if (!validator.isEmail(email)) {
        setWarning("Invalid email format!");
        // console.log(validator.isEmail(email));
        
    //   return false;
    }
    // return true;
  };


  return (
    <>
      <input aria-label="cost-input" onChange={handleChange} />
      {warning ? <p>{warning}</p> : null}
    </>
  );
};
export default Input;
