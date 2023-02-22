import { useState } from "react";
import { GetMapDataByBoundingBoxParams } from "../../services/api/endpoints";
import { fetchMapDataByBoundingBox } from "../../services/api/operations";
import CoordinateInputElement from "../CoordinateInputElement";
import styles from "./index.module.css";
import type { FeatureCollection, Geometry, GeoJsonProperties } from "geojson";
import Tree from "../Tree";

const CoordinateInputForm = () => {
  const [left, setLeft] = useState("");
  const [bottom, setBottom] = useState("");
  const [right, setRight] = useState("");
  const [top, setTop] = useState("");
  const [fetchedData, setFetchedData] = useState<FeatureCollection<
    Geometry,
    GeoJsonProperties
  > | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const submitData = async (params: GetMapDataByBoundingBoxParams) => {
    try {
      setError(false);
      setFetchedData(null)
      setIsFetching(true);
      const data = await fetchMapDataByBoundingBox(params);

      setFetchedData(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsFetching(false);
    }
  };

  return (
    <section className={styles.coordinateInputForm}>
      <p>Input coordinates need to be formatted as: "12.48188"</p>
      <form
        className={styles.coordinateInputForm__form}
        onSubmit={(event) => {
          event.preventDefault();

          submitData({ left, bottom, right, top });
        }}
      >
        <CoordinateInputElement
          labelText="Longitude of the left (westernmost) side of the bounding box:"
          value={left}
          handleInputChange={setLeft}
        />
        <CoordinateInputElement
          labelText="Latitude of the bottom (southernmost) side of the bounding box:"
          value={bottom}
          handleInputChange={setBottom}
        />
        <CoordinateInputElement
          labelText="Longitude of the right (easternmost) side of the bounding box:"
          value={right}
          handleInputChange={setRight}
        />
        <CoordinateInputElement
          labelText="Latitude of the top (northernmost) side of the bounding box:"
          value={top}
          handleInputChange={setTop}
        />

        {isFetching ? (
          <p>Data fetching in progress...</p>
        ) : (
          <button type="submit" className={styles.coordinateInputForm__submit}>
            Submit
          </button>
        )}
      </form>

      {error && <p>There was an error fetching the data... Please check the values you provided or try later</p>}
      {!error && fetchedData && <Tree data={fetchedData} />}
    </section>
  );
};

export default CoordinateInputForm;
