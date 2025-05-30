"use client";
import { useEffect, useState } from "react";

import classes from "./page.module.css";
import ButtonCheck from "@/components/ButtonCheck";
import InputNumber from "@/components/InputNumber";

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
    <main
      className={`${classes.container_content} container d-flex flex-column justify-content-center align-items-center`}
    >
      <h1>Factorial</h1>
      <h2 className="title">Please enter a number to print it's factorial</h2>
      <form
        onSubmit={(ev) => {
          setDigit(ev.target.number.value);
          ev.target.number.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3 "
      >
        <InputNumber label="Please enter a number " />
        <ButtonCheck />
      </form>
      {digit && (
        <>
          <h2
            className={`${classes.output} text-center`}
          >{`The factorial of ${digit} is = ${finalFactorial}`}</h2>
        </>
      )}
    </main>
  );
};

export default page;
