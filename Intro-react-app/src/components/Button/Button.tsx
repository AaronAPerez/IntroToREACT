import React from "react";
import styles from './Button.module.css'


interface ButtonProps {
  children: string;
  //typically called onClick
  onClickFunction: () => void;
  color: string;
}

// component needs to be passed in here to use the function
const Button = ({children, onClickFunction,color }: ButtonProps) => {
  return (
    <>
      <button type="button" className={styles[`${color}`]} onClick={onClickFunction}>{children}</button>
    </>
  );
};

export default Button;
