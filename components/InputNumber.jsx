import classes from "./InputNumber.module.css";

const InputNumber = ({ label }) => {
  return (
    <>
      <label htmlFor="number" className="label">
        {label}
      </label>
      <br />
      <input
        type="number"
        name="number"
        id="number"
        className={`${classes.input}`}
      />
      <br />
    </>
  );
};

export default InputNumber;
