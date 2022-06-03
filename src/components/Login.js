import React, { useState } from "react";
import "./Login.css";
import validator from "validator";

const Login = () => {
  // const [userName, setUserName] = useState("");
  // const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // const [isLoged, setIsLoged] = useState(false);

  const handleChange = (e) => {
    validateEmailFormat(e);
    validCorporateEmails(e);

    setUser({
      [e.target.name]: e.target.value,
    });
  };

  // const handleClick = () => {
  //   if (user.username === "userTest" && user.password === "passTest") {
  //     setIsLoged(true);
  //   }
  // };

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
    }
  };

  const validateEmailFormat = (e) => {
    let email = e.target.value;

    if (!validator.isEmail(email)) {
      setWarning("Invalid email format!");
    }
  };

  return (
    <div className="container">
      <div className="login">
        <div className="group">
          <label htmlFor="username-id">Username</label>
          <input
            id="username-id"
            name="username"
            className="username-input"
            type="text"
            aria-label="email-input"
            onChange={handleChange}
            required
          />
        </div>
        <div className="group">
          <label htmlFor="password-id">Password</label>
          <input
            id="password-id"
            name="password"
            className="password-input"
            type="password"
            onChange={handleChange}
          />
        </div>
        <button
          name="log-in"
          className="btn"
          // onClick={handleClick}
          type="submit"
          aria-label="btn"
        >
          Log In
        </button>
        {warning ? <p>{warning}</p> : null}
      </div>
    </div>
  );
};

export default Login;
