"use client";
import { useEffect, useState } from "react";

const page = () => {
  const [sentence, setSentence] = useState("");
  const [revSentence, setRevSentence] = useState("");

  useEffect(() => {
    reverse(sentence);
  }, [sentence]);

  const reverse = (sentence) => {
    setRevSentence(sentence.split(" ").reverse().join(" "));
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 className="title">
          Please enter sentence to print the reverse order of words
        </h2>
        <form
          onSubmit={(ev) => {
            setSentence(ev.target.sentence.value);
            ev.target.sentence.value = "";
            ev.preventDefault();
          }}
          className="d-flex flex-column align-items-center m-3"
        >
          <label htmlFor="sentence" className="label">
            Please enter a sentence
          </label>
          <br />
          <input type="text" name="sentence" id="sentence" />
          <br />
          <button type="submit" className="btn btn-lg btn-success ">
            Check
          </button>
        </form>
        {revSentence && (
          <>
            <h2 className="true text-center pb-3">{`Your sentence in reverse is: ${revSentence}`}</h2>
          </>
        )}
      </div>
    </>
  );
};

export default page;
