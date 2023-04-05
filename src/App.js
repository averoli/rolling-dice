import React, { useState } from "react";
import DiceRoller from "./dice_roller/DiceRoller";
import { Modal } from "./modal/Modal";
import "@picocss/pico";
import "./App.css";

function App() {
  //Add some logic for create numberOfDices and numberOfRolls
  let numberOfDices = 3;
  let numberOfRolls = 3;

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [highScore, setHighScore] = useState(0);

  const handleGameOver = (score) => {
    setHighScore(score);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container-fluid">
      <DiceRoller
        numberOfDices={numberOfDices}
        numberOfRolls={numberOfRolls}
        onGameOver={handleGameOver}
      />
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        highScore={highScore}
      />
    </div>
  );
}

export default App;
