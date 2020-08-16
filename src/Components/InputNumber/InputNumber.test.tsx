import React from "react";

import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./InputNumber";

describe("Test validations", () => {
  test("should call onChange if input value is empty string", () => {
    const onChangeMockFn = jest.fn();
    const { getByTestId } = render(
      <InputNumber onChange={onChangeMockFn} value={"1"} />
    );

    const input = getByTestId("input-number");
    fireEvent.change(input, {
      target: { value: "" },
    });
    expect(onChangeMockFn).toBeCalled();
  });
  test("should call onChange if input value is numeric", () => {
    const onChangeMockFn = jest.fn();
    const { getByTestId } = render(<InputNumber onChange={onChangeMockFn} />);

    const input = getByTestId("input-number");
    fireEvent.change(input, {
      target: { value: "123" },
    });
    expect(onChangeMockFn).toHaveBeenCalled();
  });
  test("should  NOT call onChange if input value is NOT numeric", () => {
    const onChangeMockFn = jest.fn();
    const { getByTestId } = render(<InputNumber onChange={onChangeMockFn} />);

    const input = getByTestId("input-number");
    fireEvent.change(input, {
      target: { value: "1Abc1" },
    });
    expect(onChangeMockFn).not.toHaveBeenCalled();
  });
});
