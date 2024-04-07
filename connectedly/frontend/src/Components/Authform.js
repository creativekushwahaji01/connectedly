import React from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import Nav2 from "../Components/Nav2";
function AuthForm() {
  return (
    
      <div className="main_page">
        <SignUp />
        <h1 className="authtext">Or</h1>
        <Login />
      
    </div>
  );
}

export default AuthForm;
