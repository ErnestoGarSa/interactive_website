import classes from "./InputText.module.css";

const InputText = ({ label }) => {
  return (
    <>
      <label htmlFor="word" className="label">
        {label}
      </label>
      <br />
      <input type="text" name="word" id="word" className={`${classes.input}`} />
      <br />
    </>
  );
};

export default InputText;
