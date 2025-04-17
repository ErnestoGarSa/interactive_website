"use client";
import { useEffect, useState } from "react";

import classes from "./page.module.css";
import ButtonCheck from "@/components/ButtonCheck";
import InputText from "@/components/InputText";

export default function page() {
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
        setResult("is a Palindrome word");
        setColor(classes.positive);
      } else {
        setResult("is not a Palindrome word");
        setColor(classes.negative);
      }
    }
  };
  return (
    <main
      className={`container d-flex flex-column justify-content-center align-items-center ${classes.container_content}`}
    >
      <h1 className={`${classes.title}`}>Palindrome</h1>
      <h2>Please enter a word to check if it's a palindrome word</h2>
      <form
        onSubmit={(ev) => {
          setWord(ev.target.word.value);
          ev.preventDefault();
          ev.target.word.value = "";
        }}
        className="d-flex flex-column align-items-center m-3 "
      >
        <label htmlFor="word" className="label">
          Please enter a word
        </label>
        <br />
        <InputText />
        <br />
        <ButtonCheck />
      </form>
      {result && (
        <>
          <h2 className={`${color} text-center pb-3`}>{`${word} ${result}`}</h2>
        </>
      )}
    </main>
  );
}
