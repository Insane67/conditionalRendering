import React from "react";
import Input from "./Input";

function Login() {
  return (
    <>
      <form className="form">
        <Input type="text" placeHolder="User Name" />
        <Input type="password" placeHolder="Password" />
        <button type="Submit">Login</button>
      </form>
    </>
  );
}

export default Login;
