
import "./App.css";
import DiceRoller from "./dice_roller/DiceRoller";
import "@picocss/pico";

function App() {
  let numberOfDices = 3;
  let numberOfRolls = 3;

  const handleGameOver = (highScore) => {
    alert(`Game is over! Your high score is ${highScore}`);
  };

  return (
    <div className="container-fluid">
      <DiceRoller
        numberOfDices={numberOfDices}
        numberOfRolls={numberOfRolls}
        onGameOver={handleGameOver}
      />
    </div>
  );
}

export default App;
