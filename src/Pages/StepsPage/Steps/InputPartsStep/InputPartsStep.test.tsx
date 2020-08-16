import { fireEvent } from "@testing-library/react";
import React from "react";
import InputPartsStep from "./InputPartsStep";
import { renderWithRouter } from "../../../../Utils/Testing.utils";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId } = renderWithRouter(<InputPartsStep />);

    expect(getByTestId("input-parts__input-label")).toHaveTextContent(
      "Number of parts:"
    );
    expect(getByTestId("input-parts__number-of-part-input")).toHaveValue("");
  });
});

describe("Test validations", () => {
  test("should show error message, if value of number of parts input is > 100", () => {
    const { getByTestId } = renderWithRouter(<InputPartsStep />);

    const numberOfPartsInput = getByTestId("input-parts__number-of-part-input");
    fireEvent.change(numberOfPartsInput, { target: { value: "101" } });
    expect(getByTestId("input-parts__input-error-message")).toHaveTextContent(
      "Max is 100"
    );
  });
});
