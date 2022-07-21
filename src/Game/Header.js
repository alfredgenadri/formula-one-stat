

import logo from "./logo.png";
export const Header = ({ score, bestScore }) => {
  return (
    <header className="head">
      <h1 className="h1-head">Memory Card Game</h1>
      <span className="logo">
        <img src={logo} alt="formula one logo" />
      </span>
      <div className="score-board">
        <span>Score: {score}</span>
        <span>Best Score: {bestScore}</span>
        <span>Max Score: 12</span>
      </div>
    </header>
  );
};
