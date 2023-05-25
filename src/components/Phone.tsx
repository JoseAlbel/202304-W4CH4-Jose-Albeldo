// src/components/Phone.js
import React from "react";
import Keyboard from "./Keyboard";
import Actions from "./Actions";
import Display from "./Display";
import Info from "./Display";

const Phone = () => {
  return (
    <div className="phone">
      <Info />
      <Keyboard />
      <Display />
      <Actions />
    </div>
  );
};

export default Phone;
