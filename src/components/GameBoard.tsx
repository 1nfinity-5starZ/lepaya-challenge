import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

import Card from "./Card";
import {
  setGameStatus,
  addUserCard,
  IGameStatus,
} from "../reducers/game/gameSlice";
import Button from "./Button";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 48px auto 24px;
`;

const GameFinishMessage = styled.div<{ status: IGameStatus }>`
  font-size: 2em;
  margin-bottom: 1em;
  color: ${({ theme, status }) =>
    status === "win" ? theme.light.success : theme.light.error};
`;

const GameBoard: React.FC = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  return (
    <section>
      <h2>
        {gameState.status === "initial"
          ? "Memorize the cards and press play to start the game"
          : "Click cards in ascending order to win the game"}
      </h2>
      <CardContainer>
        {gameState.cardSequence.map((card, i) => {
          const cardHidden =
            gameState.status === "playing" &&
            gameState.userInputSequence.indexOf(card) < 0;
          return (
            <>
              <Card
                key={i}
                hidden={cardHidden}
                onClick={
                  gameState.status === "playing" && cardHidden
                    ? () => dispatch(addUserCard(card))
                    : undefined
                }
              >
                <h2>{card}</h2>
              </Card>
              {(i + 1) % 4 === 0 && <div style={{ flexBasis: "100%" }} />}
            </>
          );
        })}
      </CardContainer>
      {gameState.status === "initial" && (
        <Button onClick={() => dispatch(setGameStatus("playing"))}>Play</Button>
      )}
      {["loss", "win"].includes(gameState.status) && (
        <div>
          <GameFinishMessage status={gameState.status}>
            {gameState.status === "loss" && "You lost"}
            {gameState.status === "win" && "You won"}
          </GameFinishMessage>
          <Button onClick={() => dispatch(setGameStatus("new"))}>
            Play again
          </Button>
        </div>
      )}
    </section>
  );
};

export default GameBoard;
