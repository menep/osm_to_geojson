import styles from "./index.module.css";

type Props = {
  labelText: string
  value: string
  handleInputChange: React.Dispatch<React.SetStateAction<string>>;
};

const CoordinateInputElement = ({ labelText, value, handleInputChange }: Props) => {
  return (
    <label>
      <span className={styles.coordinateInputElement__label}>
        {labelText}
      </span>
      <input
        type="text"
        value={value}
        onChange={(event) => handleInputChange(event.target.value)}
      />
    </label>
  );
};

export default CoordinateInputElement;
