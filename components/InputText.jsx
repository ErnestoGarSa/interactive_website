import classes from "./InputText.module.css";

const InputText = () => {
  return (
    <input type="text" name="word" id="word" className={`${classes.input}`} />
  );
};

export default InputText;
