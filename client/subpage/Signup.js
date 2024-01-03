import React, {useState} from "react";


const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");

    if ("" == email) {
      setEmailError("Please Enter Your Email");
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("Please Enter a Valid Email Address");
      return
    }

    if ("" == password) {
      setPasswordError("Please Enter a Password");
      return
    }

    if (password.length < 7) {
      setPasswordError("Please Enter a Password with Length Larger Than 7")
      return
    }
  }

  return (
    <div className="SignupContainer">
      <div className="SignupTitle"> Welcome Back! </div>
      <br />
      <div className="SignupInput">
        <input
          value={email}
          placeholder="Enter Your Email Here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <lable className="errorLabel">{emailError}</lable>
        <br />
        <div className="SignupInput"></div>
        <input
          value={password}
          placeholder="Enter Your Password Here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <lable className="errorLabel">{passwordError}</lable>
      </div>
      <br />
      <div className="SignupInput">
        <input 
          className={"SignupInputButton"}
          type="button"
          onClick={onButtonClick}
          value={"Log In"}
        />
      </div>
    </div>
  );
};

export default Signup;
