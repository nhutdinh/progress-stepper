import React from "react";
import { renderWithRouter } from "../../Utils/Testing.utils";
import StepsPage from "./StepsPage";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId } = renderWithRouter(<StepsPage />);

    expect(getByTestId("steps")).toBeInTheDocument();
  });
});
