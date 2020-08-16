import React from "react";
import { isNumber } from "../../Utils/Number.utils";
import { InputNumberStyled } from "./InputNumber.styled";

export interface InputNumberProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputNumber: React.FC<InputNumberProps> = (props: InputNumberProps) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    if (!isNumber(event.target.value) && event.target.value !== "") {
      return;
    }
    props.onChange && props.onChange(event);
  };
  return (
    <InputNumberStyled
      data-testid="input-number"
      {...props}
      onChange={onChange}
    ></InputNumberStyled>
  );
};
export default InputNumber;
