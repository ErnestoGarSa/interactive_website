import classes from "./ButtonCheck.module.css";

const ButtonCheck = () => {
  return (
    <button type="submit" className={`btn btn-lg ${classes.btn_sub}`}>
      Check
    </button>
  );
};

export default ButtonCheck;
