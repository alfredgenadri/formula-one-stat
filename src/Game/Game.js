import { useState } from "react";
import { CardGrid } from "./CardGrid";
import { Header } from "./Header";
import './Game.css'

function Game() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <CardGrid
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default Game;
