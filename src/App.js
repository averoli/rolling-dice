import "./App.css";
import { useState } from "react";
import DiceRoller from "./DiceRoller";

function App() {

  let numberOfDices = 3;
  let numberOfRolls = 4;
  
  return (
    <div className="container-fluid">
      <main className="container">
        <article>
          <h1>Rolling the dice</h1>
          <DiceRoller
            numberOfDices={numberOfDices}
            numberOfRolls={numberOfRolls}
          />
        </article>
      </main>
    </div>
  );
}

export default App;
