import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CoordinateInputForm from "./index";

describe("CoordinateInputForm", () => {
  it("renders the initial default state", async () => {
    render(<CoordinateInputForm />);

    expect(
      await screen.findByText(
        'Input coordinates need to be formatted as: "12.48188"'
      )
    ).toBeVisible();

    expect(
      await screen.findByLabelText(
        "Longitude of the left (westernmost) side of the bounding box:"
      )
    ).toBeVisible();

    expect(
      await screen.findByLabelText(
        "Latitude of the bottom (southernmost) side of the bounding box:"
      )
    ).toBeVisible();

    expect(
      await screen.findByLabelText(
        "Longitude of the right (easternmost) side of the bounding box:"
      )
    ).toBeVisible();

    expect(
      await screen.findByLabelText(
        "Latitude of the top (northernmost) side of the bounding box:"
      )
    ).toBeVisible();

    expect(await screen.findByText("Submit")).toBeVisible();
  });
});
