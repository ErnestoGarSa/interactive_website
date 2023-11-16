"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    palindrome(word);
  }, [word]);

  const palindrome = (string) => {
    if (string.length > 1) {
      string = string.toLowerCase();

      if (string === string.split("").reverse().join("")) {
        setResult("Is a Palindrome word");
        setColor("true");
      } else {
        setResult("Is not a Palindrome word");
        setColor("false");
      }
    }
  };
  return (
    <>
      <div className="container h-75 d-flex flex-column justify-content-center align-items-center">
        <h2 className="title">
          Please enter a word to check if it´s a palindrome word
        </h2>
        <form
          onSubmit={(ev) => {
            setWord(ev.target.word.value);
            ev.preventDefault();
          }}
          className="d-flex flex-column align-items-center m-3 "
        >
          <label htmlFor="word" className="label">
            Please enter a word
          </label>
          <br />
          <input type="text" name="word" id="word" />
          <br />
          <button type="submit" className="btn btn-lg btn-success ">
            Check
          </button>
        </form>
        {result && (
          <>
            <h2
              className={`${color} text-center pb-3`}
            >{`${word} ${result}`}</h2>
          </>
        )}
      </div>
    </>
  );
}
