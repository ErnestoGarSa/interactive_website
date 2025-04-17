"use client";
import { useEffect, useState } from "react";

import InputNumber from "@/components/InputNumber";

import classes from "./page.module.css";
import ButtonCheck from "@/components/ButtonCheck";

const page = () => {
  let [integer, setInteger] = useState();
  let [message, setMessage] = useState();
  const [color, setColor] = useState("");

  useEffect(() => {
    setMessage(isPrime(integer));
  }, [integer]);

  const isPrime = (number) => {
    if (number <= 1) {
      setColor(classes.negative);
      return "Not Prime";
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          setColor(classes.negative);
          return "Not Prime";
        }
      }
      setColor(classes.positive);
      return "Prime";
    }
  };

  return (
    <main
      className={`container d-flex flex-column justify-content-center align-items-center ${classes.container_content}`}
    >
      <h1 className={`${classes.title}`}>Is Prime</h1>
      <h2>Please enter a number to check if it's a prime number</h2>
      <form
        onSubmit={(ev) => {
          setInteger(Number(ev.target.number.value));
          ev.target.number.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3 "
      >
        <InputNumber label="Please enter a number to check if it's prime" />
        <ButtonCheck />
      </form>
      {integer !== undefined && (
        <h2
          className={`${color} text-center`}
        >{`The number ${integer} is ${message}`}</h2>
      )}
    </main>
  );
};

export default page;
