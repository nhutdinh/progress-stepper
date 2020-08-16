import React from "react";
import { ButtonStyled } from "./Button.styled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  priority: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): React.ReactElement => {
  return <ButtonStyled {...props} />;
};
export default Button;
