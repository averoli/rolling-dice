import React, { useState, useEffect } from "react";

import "./diceRoller.css";

const DiceRoller = ({ ...props }) => {
  const { numberOfDices, numberOfRolls } = props;
  let [rollsLeft, setRollsLeft] = useState(numberOfRolls);
  const [targetScore, setTargetScore] = useState(0);
  const [rollResult, setRollResult] = useState(0);
  let [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [isHighScore, setIsHighScore] = useState(false);

  useEffect(() => {
    if (rollResult > highScore) {
      setHighScore(rollResult);
    }
    if (highScore > targetScore) {
      setIsHighScore(true);
    }
    if (rollsLeft === 0) {
      setGameOver(true);
    }
  }, [rollResult, highScore, rollsLeft]);

  const startSession = () => {
    setTargetScore(Math.floor(Math.random() * numberOfDices * 6));
    setRollResult(0);
    setHighScore(0);
    setRollsLeft(numberOfRolls);
    setGameOver(false);
  };

  // const rollDice = () => {
  //   setRollResult(Math.floor(Math.random() * numberOfDices * 6) + 1);
  //   setRollsLeft(rollsLeft - 1);
  //   if (rollsLeft === 0) {
  //     setGameOver(true);
  //   }
  // };

  const rollDice = () => {
    setRolling(true);
    setTimeout(() => {
      setRollResult(Math.floor(Math.random() * numberOfDices * 6) + 1);
      setRollsLeft(rollsLeft - 1);
      if (rollsLeft === 0) {
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
            <div className={`grid${rolling ? " rolling" : ""}`}>
              <table>
                <tbody>
                  <tr>
                    <th scope="row">Target Score</th>
                    <td aria-label={`Target score ${targetScore}`}>
                      {targetScore}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Higher result </th>
                    <td
                      aria-label={`Higher result ${highScore}`}
                      className={isHighScore ? "high-score" : ""}
                    >
                      {highScore}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Current result </th>
                    <td aria-label={`Current result ${rollResult}`}>
                      {rollResult}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Roll of dices left</th>
                    <td>{rollsLeft}</td>
                  </tr>
                </tfoot>

                <button onClick={rollDice} aria-busy={rolling} >
                  ROLL DICE
                </button>
              </table>
            </div>
          </>
        ) : (
          <button onClick={startSession}>START A NEW GAME</button>
        )}
      </article>
    </main>
  );
};

export default DiceRoller;
