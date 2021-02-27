import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

import { setGameStatus } from "../reducers/game/gameSlice";
import TurnHistory from "./TurnHistory";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
`;

const GameBottomTab: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  return (
    <Container>
      {["loss", "win"].includes(gameState.status) && (
        <div>
          <span style={{ marginRight: 8 }}>
            {gameState.status === "loss" && "You lost"}
            {gameState.status === "win" && "You won"}
          </span>
          <button onClick={() => dispatch(setGameStatus("new"))}>
            Play again
          </button>
        </div>
      )}
      <TurnHistory />
    </Container>
  );
};

export default GameBottomTab;
