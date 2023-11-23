"use client";
import { useEffect, useState } from "react";

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
    <>
      <div className="container  d-flex flex-column justify-content-center align-items-center">
        <h2 className="title">
          Please enter a set of numbers to find the sum of all numbers
        </h2>
        <form
          onSubmit={(ev) => {
            setValue(Number(ev.target.number.value));
            setLen(len + 1);
            ev.target.number.value = "";
            ev.preventDefault();
          }}
          className="d-flex flex-column align-items-center m-3"
        >
          <label htmlFor="number" className="label">
            Add a number to the list
          </label>
          <br />
          <input type="number" name="number" id="number" />
          <br />
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
          className="btn btn-lg btn-success mb-3 btn-che"
        >
          Sum all numbers
        </button>
        {len > 0 && (
          <>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="mt-3 true">{`The sum of all the numbers you entered is = ${total}`}</h2>
              <button
                type="submit"
                onClick={() => {
                  setValue();
                  setArray([]);
                  setGetTotal(!getTotal);
                  setTotal();
                  setLen(0);
                }}
                className="btn btn-lg btn-warning mb-3"
              >
                Restart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default page;
