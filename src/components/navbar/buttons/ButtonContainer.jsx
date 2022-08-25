import React from "react";
import Button from "../../button/Button";

const ButtonContainer = () => {
  return (
    <div className="btn-container">
      <Button className="login-btn"> Login </Button>
      <Button className="signup-btn"> Sign up </Button>
    </div>
  );
};

export default ButtonContainer;
