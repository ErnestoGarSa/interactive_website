"use client";
import { useEffect, useState } from "react";

const page = () => {
  let [digit, setDigit] = useState();
  let [finalFactorial, setFinalFactorial] = useState();

  useEffect(() => {
    factorial(digit);
  }, [digit]);

  const factorial = (number) => {
    let total = 1;
    for (let i = 1; i <= number; i++) {
      total *= i;
    }
    setFinalFactorial(total);
  };
  return (
    <>
      <h2 className="title">Please enter a number to print it´s factorial</h2>
      <form
        onSubmit={(ev) => {
          setDigit(parseInt(ev.target.number.value));
          ev.target.number.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3 "
      >
        <label htmlFor="number" className="label">
          Please enter a number
        </label>
        <br />
        <input type="number" name="number" id="number" />
        <br />
        <button type="submit" className="btn btn-lg btn-success ">
          Check
        </button>
      </form>
      {digit && (
        <>
          <h2 className="true text-center">{`The factorial of ${digit} is = ${finalFactorial}`}</h2>
        </>
      )}
    </>
  );
};

export default page;
