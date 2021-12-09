import React, { useState } from "react";
import { Key } from "../KeyBoard";
import style from "./KeyBoard.module.css";

export const KeyBoard = ({ input, setInput }) => {
  const [nextLetterUppercase, setNextLetterUppercase] = useState(false);
  const [capsLock, setCapsLock] = useState(false);
  const [specialLetter, setSpecialLetter] = useState(false);

  //cleanup function
  const handleCleanup = () => {
    if (nextLetterUppercase && !capsLock) {
      setNextLetterUppercase(false);
    }
  };

  return (
    <div className={style.container}>
      <Key
        letter="d"
        specialLetter=","
        enableSpecialLetter={specialLetter}
        input={input}
        setInput={setInput}
        upperCase={nextLetterUppercase || capsLock}
        cleanUpCallback={handleCleanup}
      />
      <Key
        letter="e"
        specialLetter="."
        enableSpecialLetter={specialLetter}
        input={input}
        setInput={setInput}
        upperCase={nextLetterUppercase || capsLock}
        cleanUpCallback={handleCleanup}
      />

      {/* SpaceKey */}
      <Key letter=" " input={input} setInput={setInput} />

      {/* uppercase key */}
      <Key
        letter={
          !nextLetterUppercase && !capsLock
            ? "Abc"
            : !capsLock && nextLetterUppercase
            ? "ABC"
            : "abc"
        }
        callback={() => {
          if (!capsLock && !nextLetterUppercase) {
            setNextLetterUppercase(true);
          }
          if (!capsLock && nextLetterUppercase) {
            setCapsLock(true);
          }
          if (capsLock && nextLetterUppercase) {
            setCapsLock(false);
            setNextLetterUppercase(false);
          }
        }}
      />

      {/* Special Letter */}
      <Key
        letter={!specialLetter ? "!?ON" : "!?OFF"}
        callback={() => {
          setSpecialLetter(!specialLetter);
        }}
      />

      {/* Delete von Letter*/}
      <Key
        letter="BkSp"
        input={input}
        setInput={setInput}
        callback={(input, setInput) => {
          setInput(input.slice(0, -1));
        }}
      />

      {/* Delte one word */}
      <Key
        letter="DelWord"
        input={input}
        setInput={setInput}
        callback={() => {
          //remove to last space
          let lastSpace = input.lastIndexOf(" ");

          if (lastSpace === -1) {
            setInput("");
          } else {
            setInput(input.slice(0, lastSpace));
          }
        }}
      />
    </div>
  );
};
