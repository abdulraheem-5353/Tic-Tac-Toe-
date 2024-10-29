import React, { useState } from "react";
import Square from "./Square";

const Game = () => {
  const [num, setNum] = useState([...Array(9).fill(null)]);
  const [condition, setCondition] = useState(true);

  /*Fun for check WINNER*/
  const checkWinner = () => {
    let winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winner.length; i++) {
      let [a, b, c] = winner[i];
      if (num[a] != null && num[a] === num[b] && num[a] === num[c]) {
        return num[a];
      }
    }
    return false;
  };
  let result = checkWinner();

  const handleClick = (index) => {
    if (num[index] != null) {
      return;
    }
    let copyArray = [...num];
    copyArray[index] = condition ? "X" : "O";
    setNum(copyArray);
    setCondition(!condition);
  };
  const playAgain = () => {
    setNum([...Array(9).fill(null)]);
  };
  return (
    <div className="container">
      <h1 className="heading">Tic Tac Toe</h1>
      <h3 className="heading-3">{condition ? "X" : "O"} : Your Turn</h3>
      {result ? (
        <div className="win">
          {" "}
          <h1>Congratulation : {result} is winner</h1>
          <button onClick={playAgain}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="row">
            <Square onClick={() => handleClick(0)} value={num[0]} />
            <Square onClick={() => handleClick(1)} value={num[1]} />
            <Square onClick={() => handleClick(2)} value={num[2]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(3)} value={num[3]} />
            <Square onClick={() => handleClick(4)} value={num[4]} />
            <Square onClick={() => handleClick(5)} value={num[5]} />
          </div>
          <div className="row">
            <Square onClick={() => handleClick(6)} value={num[6]} />
            <Square onClick={() => handleClick(7)} value={num[7]} />
            <Square onClick={() => handleClick(8)} value={num[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
