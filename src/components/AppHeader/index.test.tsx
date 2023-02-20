import AppHeader from "./index";
import { render, screen } from "@testing-library/react";

describe("AppHeader", () => {
  it("renders the app header", async () => {
    render(<AppHeader />);

    expect(await screen.findByText("OSM to GeoJson")).toBeVisible();
  });
});
