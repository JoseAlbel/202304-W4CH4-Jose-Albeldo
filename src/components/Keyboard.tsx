// src/components/Keyboard.js
import React from "react";
import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <li>
          <Key value="1" />
        </li>
        <li>
          <Key value="2" />
        </li>
        <li>
          <Key value="3" />
        </li>
        <li>
          <Key value="4" />
        </li>
        <li>
          <Key value="5" />
        </li>
        <li>
          <Key value="6" />
        </li>
        <li>
          <Key value="7" />
        </li>
        <li>
          <Key value="8" />
        </li>
        <li>
          <Key value="9" />
        </li>
        <li>
          <Key value="0" />
        </li>
        <li>
          <Key value="delete" className="big" />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
