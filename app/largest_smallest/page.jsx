"use client";
import { useEffect, useState } from "react";

import classes from "./page.module.css";
import InputNumber from "@/components/InputNumber";

const page = () => {
  let [value, setValue] = useState();
  let [array, setArray] = useState([]);
  let [len, setLen] = useState(0);
  let [check, setCheck] = useState(false);
  let [message, setMessage] = useState("");

  const largestSmallest = (array) => {
    let largest = array[0];
    let smallest = array[0];

    array.forEach((element) => {
      if (element <= smallest) {
        smallest = element;
      } else if (element >= largest) {
        largest = element;
      }
    });
    return `The smallest number in the array is ${smallest} and the largest is ${largest}`;
  };

  useEffect(() => {
    if (value !== undefined || value === "") {
      setArray([...array, value]);
    }
  }, [len]);

  useEffect(() => {
    if (check) {
      setMessage(largestSmallest(array));
    }
  }, [check]);

  return (
    <main
      className={`${classes.container_content} container d-flex flex-column justify-content-center align-items-center`}
    >
      <h1 className={`${classes.title}`}>Largest and smallest numbers</h1>
      <h2>
        Please enter a set of numbers to check which one is the largest and
        which one is the smallest
      </h2>
      <form
        action=""
        onSubmit={(ev) => {
          setValue(Number(ev.target.number.value));
          setLen(len + 1);
          ev.target.number.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3 "
      >
        <InputNumber label="Please enter a set of numbers" />
        <button type="submit" className="btn btn-lg btn-primary ">
          Add Number
        </button>
        {array.length > 0 && (
          <h3 className="set mt-3">{`Your set of numbers is ${array}`}</h3>
        )}
      </form>
      <button
        type="submit"
        onClick={() => {
          setCheck(!check);
        }}
        className={`btn mb-3 ${classes.btn_sub}`}
      >
        Check smallest & biggest
      </button>
      {message !== "" && (
        <>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className={`mt-3 ${classes.result}`}>{`${message}`}</h2>
            <button
              type="submit"
              onClick={() => {
                setValue();
                setArray([]);
                setLen(0);
                setCheck(false);
                setMessage();
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
