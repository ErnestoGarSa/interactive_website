"use client";
import { useEffect, useState } from "react";

const page = () => {
  let [integer, setInteger] = useState();
  let [message, setMessage] = useState();
  const [color, setColor] = useState("");

  useEffect(() => {
    setMessage(isPrime(integer));
  }, [integer]);

  const isPrime = (number) => {
    if (number <= 1) {
      setColor("false");
      return "Not Prime";
    } else {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
          setColor("false");
          return "Not Prime";
        }
      }
      setColor("true");
      return "Prime";
    }
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="title">
          Please enter a number to check if it´s a prime number
        </h2>
        <form
          onSubmit={(ev) => {
            setInteger(Number(ev.target.int.value));
            ev.target.int.value = "";
            ev.preventDefault();
          }}
          className="d-flex flex-column align-items-center m-3 "
        >
          <label htmlFor="int" className="label">
            Please enter a number to check if it´s prime
          </label>
          <br />
          <input type="number" name="int" id="int" />
          <br />
          <button
            type="submit"
            onClick={() => {
              isPrime(integer);
            }}
            className="btn btn-lg btn-success"
          >
            Check
          </button>
        </form>
        {integer !== undefined && (
          <h2
            className={`${color} text-center pb-3`}
          >{`The number ${integer} is ${message}`}</h2>
        )}
      </div>
    </>
  );
};

export default page;
