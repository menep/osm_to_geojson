import { useState } from "react";
import CoordinateInputElement from "../CoordinateInputElement";
import styles from "./index.module.css";

const CoordinateInputForm = () => {
  const [left, setLeft] = useState("");
  const [bottom, setBottom] = useState("");
  const [right, setRight] = useState("");
  const [top, setTop] = useState("");

  return (
    <section className={styles.coordinateInputForm}>
      <p>Input coordinates need to be formatted as: "12.48188"</p>
      <form
        className={styles.coordinateInputForm__form}
        onSubmit={(event) => {
          event.preventDefault();
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

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default CoordinateInputForm;
