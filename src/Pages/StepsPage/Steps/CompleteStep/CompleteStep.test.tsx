import { fireEvent } from "@testing-library/react";
import React from "react";
import CompleteStep from "./CompleteStep";
import { renderWithRouter } from "../../../../Utils/Testing.utils";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId, getByText } = renderWithRouter(<CompleteStep />);
    const homeBtn = getByTestId("complete-step__home-btn");
    expect(homeBtn).toBeInTheDocument();
    expect(homeBtn).toHaveTextContent("Home");
    getByText("Success");
  });
});
describe("Should handle event correctly", () => {
  test("should navigate to home page when clicking on Home buton", () => {
    const { getByTestId, history } = renderWithRouter(<CompleteStep />);
    const homeBtn = getByTestId("complete-step__home-btn");
    fireEvent.click(homeBtn);
    expect(history.location.pathname).toBe("/");
  });
});
