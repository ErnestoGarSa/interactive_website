"use client";
import { useEffect, useState } from "react";
import Title from "@/components/Title";

import classes from "./page.module.css";
import ButtonCheck from "@/components/ButtonCheck";
import InputText from "@/components/InputText";

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
    <main
      className={`${classes.container_content} container d-flex flex-column justify-content-center align-items-center`}
    >
      <Title title="Reverse Sentence" />
      <h2>Please enter sentence to print the reverse order of words</h2>
      <form
        onSubmit={(ev) => {
          setSentence(ev.target.word.value);
          ev.target.word.value = "";
          ev.preventDefault();
        }}
        className="d-flex flex-column align-items-center m-3"
      >
        <InputText label="Please enter a sentence" />
        <ButtonCheck />
      </form>
      {revSentence && (
        <>
          <h2
            className={`${classes.result} text-center pb-3`}
          >{`Your sentence in reverse is: ${revSentence}`}</h2>
        </>
      )}
    </main>
  );
};

export default page;
