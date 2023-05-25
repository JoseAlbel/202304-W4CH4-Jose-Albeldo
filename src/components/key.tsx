// src/components/Key.js
import React from "react";

const Key = ({ value, className }) => {
  return <button className={`key ${className}`}>{value}</button>;
};

export default Key;
