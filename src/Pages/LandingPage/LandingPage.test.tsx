import { fireEvent } from "@testing-library/react";
import React from "react";
import { renderWithRouter } from "../../Utils/Testing.utils";
import LandingPage from "./LandingPage";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId } = renderWithRouter(<LandingPage />);
    const requestBtn = getByTestId("request-btn");
    expect(requestBtn).toBeInTheDocument();
    expect(requestBtn).toHaveTextContent("Request");
  });
});
describe("Should handle event correctly", () => {
  test("should navigate to steps when clicking on Request buton", () => {
    const { getByTestId, history } = renderWithRouter(<LandingPage />);
    const requestBtn = getByTestId("request-btn");
    fireEvent.click(requestBtn);
    expect(history.location.pathname).toBe("/steps");
  });
});
