import React, { ChangeEvent } from "react";
import InputNumber from "../../../../Components/InputNumber/InputNumber";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "../../../../Store/Store";
import { setParts } from "../../../../Store/Steps/Steps.action";
import { PartsProgressStepStyled } from "./PartsProgressStep.styled";

const PartsProgress: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const parts = useSelector((state: ApplicationState) => state.steps.parts);

  const numberOfParts = useSelector(
    (state: ApplicationState) => +state.steps.numberOfParts
  );

  const onPartProgressChange = (index: number) => (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    parts[index] = event.target.value;
    dispatch(setParts(parts));
  };
  const partItems = Array.from({ length: numberOfParts }, (_value, index) => (
    <PartsProgressStepStyled key={`${numberOfParts}_${index}`}>
      <label data-testid="parts-progress__input-label">
        Part {index + 1} %
      </label>
      <InputNumber
        data-testid="parts-progress__input"
        autoFocus={index === 0}
        onChange={onPartProgressChange(index)}
        value={parts[index] || ""}
        maxLength={3}
      />
    </PartsProgressStepStyled>
  ));
  return <div data-testid="parts-progress">{partItems}</div>;
};
export default PartsProgress;
