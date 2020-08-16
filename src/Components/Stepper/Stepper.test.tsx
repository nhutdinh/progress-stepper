import React from "react";

import { render } from "@testing-library/react";
import Stepper, { StepperProps } from "./Stepper";

describe("Test rendering", () => {
  test("should render correctly with default props", () => {
    const DEFAULT_NUMBERS_OF_STEPS = 3;
    const { getAllByTestId } = render(<Stepper />);
    expect(getAllByTestId("stepper__step")).toHaveLength(
      DEFAULT_NUMBERS_OF_STEPS
    );
    expect(getAllByTestId("stepper__step-connector")).toHaveLength(
      DEFAULT_NUMBERS_OF_STEPS - 1
    );
  });
  test("should render correctly with given props, happy case", () => {
    const NUMBER_OF_STEPS = 2;
    const props: StepperProps = {
      numberOfSteps: NUMBER_OF_STEPS,
      activeStep: 1,
    };
    const { getAllByTestId } = render(<Stepper {...props} />);
    expect(getAllByTestId("stepper__step")).toHaveLength(NUMBER_OF_STEPS);
    expect(getAllByTestId("stepper__step-connector")).toHaveLength(
      NUMBER_OF_STEPS - 1
    );
  });

  test("should render correctly with given props, extreme case 1", () => {
    const NUMBER_OF_STEPS = 1;
    const props: StepperProps = {
      numberOfSteps: NUMBER_OF_STEPS,
      activeStep: 1,
    };
    const { getAllByTestId, queryAllByTestId } = render(<Stepper {...props} />);
    expect(getAllByTestId("stepper__step")).toHaveLength(NUMBER_OF_STEPS);
    expect(queryAllByTestId("stepper__step-connector")).toHaveLength(
      NUMBER_OF_STEPS - 1
    );
  });

  test("should render correctly with given props, extreme case 0", () => {
    const NUMBER_OF_STEPS = 0;
    const props: StepperProps = {
      numberOfSteps: NUMBER_OF_STEPS,
      activeStep: 1,
    };
    const { queryAllByTestId } = render(<Stepper {...props} />);
    expect(queryAllByTestId("stepper__step")).toHaveLength(0);
    expect(queryAllByTestId("stepper__step-connector")).toHaveLength(0);
  });
});

describe("Test appearance", () => {
  test("background color of step connector should be blue if active", () => {
    const props: StepperProps = {
      activeStep: 1,
    };
    const { queryAllByTestId } = render(<Stepper {...props} />);
    expect(queryAllByTestId("stepper__step-connector")[0]).toHaveStyle(
      "background-color: blue"
    );
    expect(queryAllByTestId("stepper__step-connector")[1]).toHaveStyle(
      "background-color: rgba(0, 0, 0, 0.1)"
    );
  });
});
