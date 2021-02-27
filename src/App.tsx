import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameBottomTab from "./components/GameBottomTab";
import GameOptions from "./components/GameOptions";
import { addTurnHistory } from "./reducers/turnHistory/turnHistorySlice";
import { RootState } from "./store/store";

function App() {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);

  // Watch for win/loss statuses and push to history
  useEffect(() => {
    if (gameState.status == "loss" || gameState.status == "win") {
      dispatch(
        addTurnHistory({
          outcome: gameState.status,
          gameSize: gameState.cardNumber,
          lastRound: gameState.userInputSequence.length,
        })
      );
    }
  }, [gameState.status]);

  console.log(gameState);
  return (
    <div className="App">
      {gameState.status === "new" ? <GameOptions /> : <GameBoard />}
      <GameBottomTab />
    </div>
  );
}

export default App;
