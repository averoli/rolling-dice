import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TableScore from "../table_score/TableScore";
import "@picocss/pico";
import "./diceRoller.css";

const DiceRoller = ({ numberOfDices, numberOfRolls, onGameOver }) => {
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
      onGameOver(highScore);
      setGameOver(true);
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
      setRollResult(target);
      setRollsLeft(rollsLeft - 1);
      setRolling(false);
    }, 1000);
  };
  return (
    <main className="container">
      <article>
        <h1>Rolling the dice</h1>
        {targetScore > 0 && !gameOver ? (
          <>
            <table>
              <TableScore
                targetScore={targetScore}
                isHighScore={isHighScore}
                highScore={highScore}
                rollResult={highScore}
                rollsLeft={rollsLeft}
              />
            </table>
            <button onClick={rollDice} aria-busy={rolling}>
              ROLL DICE
            </button>
          </>
        ) : (
          <button onClick={startSession}>START A NEW GAME</button>
        )}
      </article>
    </main>
  );
};

DiceRoller.propTypes = {
  numberOfDices: PropTypes.number.isRequired,
  numberOfRolls: PropTypes.number.isRequired,
};
export default DiceRoller;
