import React from "react";
import "./App.css";
import Card from "./components/Card.js";
import data from "./atlas-of-remote-islands.js";

function App() {
  console.log(data.islands[0].name);

  return (
    <div>
      <div className="container">
        <h1 className="section-title">Atlas of Remote Islands</h1>
      </div>

      <div className="container">
        <h2 className="section-atitle">Islands</h2>
        <ul className="cards">
          {data.islands.map((island) => {
            return <Card island={island} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
