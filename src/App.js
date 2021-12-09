import React, { useState, useRef } from "react";
import style from "./App.module.css";
import { KeyBoard } from "./components";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className={style.container}>
      <div className={style.input}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            console.log(e.target.selectionStart);
            setInput(e.target.value);
          }}
        />
      </div>
      <KeyBoard input={input} setInput={setInput} />
    </div>
  );
}

export default App;
