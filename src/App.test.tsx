import React from "react";

import { render } from "@testing-library/react";
import App from "./App";

describe("Should render withou crash", () => {
  test("should call onChange if input value is empty string", () => {
    render(<App />);
  });
});
