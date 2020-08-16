import React from "react";
import { renderWithRouter } from "../../../../Utils/Testing.utils";
import PartsProgressStep from "./PartsProgressStep";
import { fireEvent } from "@testing-library/react";

describe("Should render corectly", () => {
  test("should render 1 input if  numberOfParts is 1", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [],
        activeStep: 2,
      },
    };
    const { queryAllByTestId } = renderWithRouter(
      <PartsProgressStep />,
      initState
    );

    expect(queryAllByTestId("parts-progress__input")).toHaveLength(1);

    expect(
      queryAllByTestId("parts-progress__input-label")[0]
    ).toHaveTextContent(`Part 1 %`);
  });

  test("should render 10 input if  numberOfParts is 10", () => {
    const initState = {
      steps: {
        numberOfParts: "10",
        parts: [],
        activeStep: 2,
      },
    };
    const { queryAllByTestId } = renderWithRouter(
      <PartsProgressStep />,
      initState
    );

    expect(queryAllByTestId("parts-progress__input")).toHaveLength(10);
    const inputLabels = queryAllByTestId("parts-progress__input-label");
    for (let i = 0; i < inputLabels.length; i++) {
      expect(inputLabels[i]).toHaveTextContent(`Part ${i + 1} %`);
    }
  });
});

describe("Test behaviour", () => {
  test("should update input corectly", () => {
    const initState = {
      steps: {
        numberOfParts: "10",
        parts: [],
        activeStep: 2,
      },
    };
    const { queryAllByTestId } = renderWithRouter(
      <PartsProgressStep />,
      initState
    );
    const inputs = queryAllByTestId("parts-progress__input");
    fireEvent.change(inputs[0], { target: { value: "0" } });
    fireEvent.change(inputs[1], { target: { value: "1" } });
    fireEvent.change(inputs[9], { target: { value: "9" } });

    expect(inputs[0]).toHaveValue("0");
    expect(inputs[1]).toHaveValue("1");
    expect(inputs[9]).toHaveValue("9");

    fireEvent.change(inputs[9], { target: { value: "" } });
    expect(inputs[9]).toHaveValue("");
  });
});
