import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";

const Tree = ({
  data,
}: {
  data: FeatureCollection<Geometry, GeoJsonProperties>;
}) => {
  return (
    <div>
      <pre data-testid="json-data">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Tree;
