import React from "react";
import "./App.css";
import { Dialog } from "./components/core/dialog/Dialog";

const App: React.FC = () => {
  return (
    <>
      <Dialog title="Test">
        <h1>Demo this is just a text</h1>
      </Dialog>
      <input value="Test" />
    </>
  );
};

export default App;
