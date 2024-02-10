import React from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

const App = () => {
  return <h1> Hi There</h1>;
};

root.render(<App />);
