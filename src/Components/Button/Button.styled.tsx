import styled from "styled-components";
import { ButtonProps } from "./Button";

const getBackgroundColor = (type: string) => {
  if (type === "primary") {
    return "blue";
  }
  if (type === "secondary") {
    return "black";
  }
  return "transparent";
};

export const ButtonStyled = styled.button<ButtonProps>`
  border: none;
  font-size: 1rem;
  background-color: ${(props): string => getBackgroundColor(props.priority)};
  color: white;
  min-height: 42px;
  padding: 0.5rem 1rem;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
