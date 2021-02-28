import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import GameBoard from "./components/GameBoard";
import GameBottomTab from "./components/GameBottomTab";
import GameOptions from "./components/GameOptions";
import { RootState } from "./store/store";

function App() {
  const gameState = useSelector(({ game }: RootState) => game);

  return (
    <div className="App">
      {gameState.status === "new" ? <GameOptions /> : <GameBoard />}
      <GameBottomTab />
    </div>
  );
}

export default App;
