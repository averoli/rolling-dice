import React, { useState, useEffect } from "react";
import "./diceRoller.css";
import TableScore from "./TableScore";

const DiceRoller = ({ numberOfDices, numberOfRolls }) => {
  let [rollsLeft, setRollsLeft] = useState(numberOfRolls);
  const [targetScore, setTargetScore] = useState(0);
  const [rollResult, setRollResult] = useState(0);
  let [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);

  const min = numberOfDices;
  const max = numberOfDices * 6;
  const target = Math.floor(Math.random() * (max - min + 1) + min);

  const updateHighScore = (score) => {
    if (score > highScore) {
      setHighScore(score);
    }
    if (highScore > targetScore) {
      setIsHighScore(true);
    }
  };

  useEffect(() => {
    updateHighScore(rollResult);
    if (rollsLeft === 0) {
      setGameOver(true);
      alert(`Your final high score is ${highScore}`);
    }
  }, [rollResult, highScore, rollsLeft]);

  const startSession = () => {
    setTargetScore(target);
    setRollResult(0);
    setHighScore(0);
    setRollsLeft(numberOfRolls);
    setIsHighScore(false);
    setGameOver(false);
  };

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      try {
        setRollResult(target);
        setRollsLeft(rollsLeft - 1);
        setRolling(false);
      } catch (err) {
        console.error(err);
        setRolling(false);
      }
    }, 1000);
  };
  return (
    <>
      {targetScore > 0 && !gameOver ? (
        <table>
          <TableScore
            targetScore={targetScore}
            isHighScore={isHighScore}
            highScore={highScore}
            rollResult={highScore}
            rollsLeft={rollsLeft}
          />
          <button onClick={rollDice} aria-busy={rolling}>
            ROLL DICE
          </button>
        </table>
      ) : (
        <button onClick={startSession}>START A NEW GAME</button>
      )}
    </>
  );
};
export default DiceRoller;
