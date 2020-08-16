import { fireEvent } from "@testing-library/react";
import React from "react";
import Steps from "./Steps";
import { renderWithRouter } from "../../../Utils/Testing.utils";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId, getAllByTestId } = renderWithRouter(<Steps />);

    //stepper should have 3 steps
    const stepIndicators = getAllByTestId("stepper__step-indicator");
    expect(stepIndicators).toHaveLength(3);
    //step 1 should be highligted, step 2 and 4 should be inactive
    expect(stepIndicators[0]).not.toHaveStyle("opacity: 0.5");
    expect(stepIndicators[1]).toHaveStyle("opacity: 0.5");
    expect(stepIndicators[2]).toHaveStyle("opacity: 0.5");

    //first step should be input number of parts
    expect(
      getByTestId("input-parts__number-of-part-input")
    ).toBeInTheDocument();
    //navigation buttons should be rendered
    expect(getByTestId("navigation-buttons__previous")).toBeInTheDocument();
    expect(getByTestId("navigation-buttons__next")).toBeInTheDocument();
    //navigation buttons should be disabled
    expect(getByTestId("navigation-buttons__previous")).toHaveAttribute(
      "disabled"
    );
    expect(getByTestId("navigation-buttons__next")).toHaveAttribute("disabled");
  });
});

describe("Test behaviours", () => {
  test("navigation button should be updated base on value of number of parts input", () => {
    const { getByTestId } = renderWithRouter(<Steps />);

    //input value is valid
    const numberOfPartsInput = getByTestId("input-parts__number-of-part-input");
    fireEvent.change(numberOfPartsInput, { target: { value: "100" } });

    //next buttons should be enabled
    expect(getByTestId("navigation-buttons__previous")).toHaveAttribute(
      "disabled"
    );
    expect(getByTestId("navigation-buttons__next")).not.toHaveAttribute(
      "disabled"
    );

    //input value is invalid
    fireEvent.change(numberOfPartsInput, { target: { value: "" } });

    //next buttons should be disabled
    expect(getByTestId("navigation-buttons__previous")).toHaveAttribute(
      "disabled"
    );
    expect(getByTestId("navigation-buttons__next")).toHaveAttribute("disabled");
  });

  test("Navigatons button should do navigation successfully", () => {
    const { getByTestId, getAllByTestId } = renderWithRouter(<Steps />);

    //input value is valid
    const numberOfPartsInput = getByTestId("input-parts__number-of-part-input");
    fireEvent.change(numberOfPartsInput, { target: { value: "100" } });

    //next buttons should be enabled
    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");
    const stepIndicators = getAllByTestId("stepper__step-indicator");
    fireEvent.click(nextBtn);
    expect(getByTestId("parts-progress")).toBeInTheDocument();
    //step 1,2 should be highligted, step 3 should not be highlighted
    expect(stepIndicators[0]).not.toHaveStyle("opacity: 0.5");
    expect(stepIndicators[1]).not.toHaveStyle("opacity: 0.5");
    expect(stepIndicators[2]).toHaveStyle("opacity: 0.5");
    fireEvent.click(previousBtn);
    expect(getByTestId("input-parts")).toBeInTheDocument();
    //step 1 should be highligted, step 2,3 should not be highlighted
    expect(stepIndicators[0]).not.toHaveStyle("opacity: 0.5");
    expect(stepIndicators[1]).toHaveStyle("opacity: 0.5");
    expect(stepIndicators[2]).toHaveStyle("opacity: 0.5");
  });
});
