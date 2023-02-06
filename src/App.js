import React from "react";
import { sum, sub, mul, div } from "./components/Calculator";

const App = () => {
  return (
    <>
      <ul>
        <li>Sum is {sum(40, 2)}</li>
        <li>Sub is {sub(40, 2)}</li>
        <li>Mul is {mul(40, 2)}</li>
        <li>Div is {div(40, 2)}</li>
      </ul>
    </>
  );
};

export default App;
