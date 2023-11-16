"use client";
import { useEffect, useState } from "react";

const page = () => {
  let [value, setValue] = useState();
  let [array, setArray] = useState([]);
  let [len, setLen] = useState(0);
  let [sort, setSort] = useState(false);
  let [sortArr, setSortArr] = useState([]);

  const sorted = (arr) => {
    return arr.sort();
  };

  useEffect(() => {
    if (value !== undefined && value !== "" && value !== NaN) {
      setArray([...array, value]);
    }
  }, [len]);

  useEffect(() => {
    if (sort) {
      setSortArr(sorted(array));
    }
  }, [sort]);

  return (
    <>
      <h2 className="title">
        Please enter a set of numbers to print them in ascending sort
      </h2>
      <form
        onSubmit={(ev) => {
          setValue(parseInt(ev.target.number.value));
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
        <input type="text" name="number" id="number" />
        <br />
        <button type="submit" className="btn btn-lg btn-primary">
          Add number
        </button>
        <br />
        <h3>{`Your list of numbers is: ${array}`}</h3>
      </form>
      <button
        type="submit"
        onClick={() => {
          setSort(!sort);
        }}
        className="btn btn-lg btn-success"
      >
        Get ascending sort
      </button>
      {sort && (
        <>
          <h2>{`The list of numbers you entered is ascending sort is = ${sortArr}`}</h2>
          <button
            type="submit"
            onClick={() => {
              setValue();
              setArray([]);
              setLen(0);
              setSort(false);
            }}
            className="btn btn-lg btn-warning"
          >
            Restart
          </button>
        </>
      )}
    </>
  );
};

export default page;
