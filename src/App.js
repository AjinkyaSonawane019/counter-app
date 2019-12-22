import React from "react";
import logo from "./logo.svg";
import NavBar from "./Component/navbar";
import Counters from "./Component/counters";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Counters />
      </main>
    </React.Fragment>
  );
}

export default App;
