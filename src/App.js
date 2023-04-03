import "./App.css";
import { useState } from "react";
import DiceRoller from "./DiceRoller";

function App() {
  const [numberOfDices, setNumberOfDices] = useState(2);
  const [numberOfRolls, setNumberOfRolls] = useState(3);

  return (
    <div className="container-fluid">
      <DiceRoller numberOfDices={numberOfDices} numberOfRolls={numberOfRolls} />
    </div>
  );
}

export default App;
