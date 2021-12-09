import React from "react";
import style from "./Key.module.css";

export const Key = ({
  letter,
  specialLetter,
  enableSpecialLetter,
  input,
  setInput,
  callback,
  upperCase,
  cleanUpCallback,
}) => {
  //if uppercase is true, then the letter is uppercase
  if (upperCase) {
    letter = letter.toUpperCase();
  }

  if (enableSpecialLetter) {
    letter = specialLetter;
  }

  return (
    <div
      className={style.container}
      onClick={() => {
        //if we have a callback function, call it
        if (callback) {
          callback(input, setInput);
        }

        //if we don't have a callback function, just add the letter to the input
        else {
          setInput(input + letter);
        }

        //if we have a cleanUpCallback function, call it
        if (cleanUpCallback) {
          cleanUpCallback();
        }
      }}
    >
      {letter}
    </div>
  );
};
