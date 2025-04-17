"use client";
import { useEffect, useState } from "react";

import Title from "@/components/Title";
import classes from "./page.module.css";
import InputNumber from "@/components/InputNumber";

const page = () => {
  let [value, setValue] = useState();
  let [array, setArray] = useState([]);
  let [total, setTotal] = useState();
  let [len, setLen] = useState(0);
  let [getTotal, setGetTotal] = useState(false);

  useEffect(() => {
    if (value !== undefined || value === "") {
      setArray([...array, value]);
    }
  }, [len]);

  useEffect(() => {
    if (getTotal) {
      sum(array);
    }
  }, [getTotal]);

  const sum = (arr) => {
    let tot = 0;
    arr.forEach((element) => {
      tot += element;
    });
    setTotal(tot);
  };

  return (
    <main
      className={`${classes.container_content} container  d-flex flex-column justify-content-center align-items-center`}
    >
      <Title title="Sum of all numbers" />
      <h2>Please enter a set of numbers to find the sum of all numbers</h2>
      <form
        onSubmit={(ev) => {
          setValue(Number(ev.target.number.value));
          setLen(len + 1);
          ev.target.number.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3"
      >
        <InputNumber label="Add a number to the list" />
        <button type="submit" className="btn btn-lg btn-primary ">
          Add number
        </button>
        <br />
        <h3>{`Your list of numbers is: ${array}`}</h3>
      </form>
      <button
        type="submit"
        onClick={() => {
          setGetTotal(!getTotal);
        }}
        className={`${classes.btn_sub} btn   mb-3 `}
      >
        Sum all numbers
      </button>
      {len > 0 && (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2
              className={`mt-3 ${classes.result}`}
            >{`The sum of all the numbers you entered is = ${total}`}</h2>
            <button
              type="submit"
              onClick={() => {
                setValue();
                setArray([]);
                setGetTotal(!getTotal);
                setTotal();
                setLen(0);
              }}
              className="btn btn-lg btn-success mb-3"
            >
              Restart
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default page;
