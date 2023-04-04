import React from "react";
import "./tableScore.css"

const TableScore = ({
  targetScore,
  isHighScore,
  highScore,
  rollResult,
  rollsLeft,
}) => {
  return (
    <tbody>
      <tr>
        <th scope="row">Target Score</th>
        <td aria-label={`Target score ${targetScore}`}>{targetScore}</td>
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
        <td aria-label={`Current result ${rollResult}`}>{rollResult}</td>
      </tr>
      <tr>
        <th scope="row">Roll of dices left</th>
        <td>{rollsLeft}</td>
      </tr>
    </tbody>
  );
};

export default TableScore;
