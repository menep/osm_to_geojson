import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoordinateInputElement from "../CoordinateInputElement";

const testLabel = "Test label:";

describe("CoordinateInputElement", () => {
  it("renders the initial default state", async () => {
    render(
      <CoordinateInputElement
        labelText={testLabel}
        value=""
        handleInputChange={jest.fn()}
      />
    );

    expect(await screen.findByText(testLabel)).toBeVisible();

    const inputElement = await screen.findByLabelText(testLabel);

    expect(inputElement).toHaveValue("");
  });

  it("correctly handles changing input values", async () => {
    const handleInputMock = jest.fn();

    render(
      <CoordinateInputElement
        labelText={testLabel}
        value=""
        handleInputChange={handleInputMock}
      />
    );

    const inputElement = await screen.findByLabelText(testLabel);

    fireEvent.change(inputElement, { target: { value: "a" } });
    fireEvent.change(inputElement, { target: { value: "yxc" } });
    fireEvent.change(inputElement, { target: { value: "32134" } });

    await waitFor(() => {
      expect(handleInputMock).toHaveBeenCalledWith("a");
      expect(handleInputMock).toHaveBeenCalledWith("yxc");
      expect(handleInputMock).toHaveBeenCalledWith("32134");
    });
  });
});
