import React from "react";
import InputNumber from "../../../../Components/InputNumber/InputNumber";
import { useDispatch, useSelector } from "react-redux";
import { setNumbersOfParts } from "../../../../Store/Steps/Steps.action";
import { ApplicationState } from "../../../../Store/Store";
import {
  InputPartsStepStyled,
  InputPartsStepErrorStyled,
} from "./InputPartsStep.styled";
import { MAX_PART_PROGRESS } from "../../../../Store/Steps/Steps.types";

const InputParts: React.FC = () => {
  const dispatch = useDispatch();
  const numberOfParts = useSelector(
    (state: ApplicationState) => state.steps.numberOfParts
  );
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNumbersOfParts(event.target.value));
  };

  const error =
    +numberOfParts > MAX_PART_PROGRESS ? `Max is ${MAX_PART_PROGRESS}` : "";
  return (
    <InputPartsStepStyled data-testid="input-parts">
      <label data-testid="input-parts__input-label">Number of parts: </label>
      <div>
        <InputNumber
          data-testid="input-parts__number-of-part-input"
          autoFocus
          value={numberOfParts}
          onChange={onChangeHandler}
          maxLength={3}
        ></InputNumber>
        {error && (
          <InputPartsStepErrorStyled data-testid="input-parts__input-error-message">
            {error}{" "}
          </InputPartsStepErrorStyled>
        )}
      </div>
    </InputPartsStepStyled>
  );
};
export default InputParts;
