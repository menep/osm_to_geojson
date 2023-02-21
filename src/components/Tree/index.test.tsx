import Tree from "./index";
import { render, screen } from "@testing-library/react";
import mockData from "./mockData.json";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

describe("Tree", () => {
  it("renders a tree", async () => {
    render(
      <Tree data={mockData as FeatureCollection<Geometry, GeoJsonProperties>} />
    );

    expect(await screen.findByTestId('json-data')).toBeVisible()
  });
});
