import React from "react";

interface ButtonProps {
  children: string;
  //typically called onClick
  onClickFunction: () => void;
  color: string;
}

// componenent needs to be passed in here to use the function
const Button = ({ children, onClickFunction, color }: ButtonProps) => {
  return (
    <>
      <button className={`btn btn-${color}`} onClick={onClickFunction}>
        {children}
      </button>
    </>
  );
};

export default Button;
