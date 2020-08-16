import React from "react";
import { renderWithRouter } from "../../../../Utils/Testing.utils";
import NavigationButtons from "./NavigationButtons";

describe("Should render corectly", () => {
  test("should render correctly", () => {
    const { getByTestId } = renderWithRouter(<NavigationButtons />);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    //navigation buttons should be rendered
    expect(previousBtn).toBeInTheDocument();
    expect(nextBtn).toBeInTheDocument();
    //copy should be correct
    expect(previousBtn).toHaveTextContent("Previous");
    expect(nextBtn).toHaveTextContent("Next");
  });
  test("if number of parts is 0, previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "0",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '', previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '101', previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "101",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '100', next button should be enabled", () => {
    const initState = {
      steps: {
        numberOfParts: "100",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '1', next button should be enabled", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });
});
describe("Should render correctly, if active step is 0", () => {
  test("if number of parts is 0, previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "0",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '', previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '101', previous and next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "101",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '100', next button should be enabled", () => {
    const initState = {
      steps: {
        numberOfParts: "100",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });

  test("if number of parts is '1', next button should be enabled", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [],
        activeStep: 0,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).toHaveAttribute("disabled");
  });
});

describe("Should render correctly, if active step is 1", () => {
  test("if sum of parts is not 100, next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [0],
        activeStep: 1,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).toHaveAttribute("disabled");
    expect(previousBtn).not.toHaveAttribute("disabled");
  });
  test("if sum of parts is 100, next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [100],
        activeStep: 1,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).not.toHaveAttribute("disabled");
  });

  test("if sum of parts is 100, next button should be disabled", () => {
    const initState = {
      steps: {
        numberOfParts: "1",
        parts: [10, 90],
        activeStep: 1,
      },
    };
    const { getByTestId } = renderWithRouter(<NavigationButtons />, initState);

    const nextBtn = getByTestId("navigation-buttons__next");
    const previousBtn = getByTestId("navigation-buttons__previous");

    expect(nextBtn).not.toHaveAttribute("disabled");
    expect(previousBtn).not.toHaveAttribute("disabled");
  });
});
