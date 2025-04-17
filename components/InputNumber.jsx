import classes from "./InputNumber.module.css";

const InputNumber = () => {
  return (
    <input type="number" name="int" id="int" className={`${classes.input}`} />
  );
};

export default InputNumber;
