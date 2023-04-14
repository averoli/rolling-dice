import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import TableScore from "../table_score/TableScore";
import "@picocss/pico";
import "./diceRoller.css";

const DiceRoller = ({ numberOfDices, numberOfRolls, onGameOver }) => {
  
  const target = () =>
    Math.floor(
      Math.random() * (numberOfDices * 6 - numberOfDices + 1) + numberOfDices
    );
    
  console.log(target());
  let [rollsLeft, setRollsLeft] = useState(numberOfRolls);
  const [targetScore, setTargetScore] = useState(0);
  const [rollResult, setRollResult] = useState(0);
  let [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);

  const updateHighScore = useCallback(
    (score) => {
      if (score > highScore) {
        setHighScore(score);
      }
      if (highScore > targetScore) {
        setIsHighScore(true);
      }
    },
    [highScore, setHighScore, targetScore]
  );

  useEffect(() => {
    updateHighScore(rollResult);
  }, [rollResult, updateHighScore]);

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
      if (rollsLeft === 0) {
        onGameOver(highScore);
        setGameOver(true);
      }
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
                rollResult={rollResult}
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
