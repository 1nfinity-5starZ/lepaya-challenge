import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";

import Card from "./Card";
import {
  setGameStatus,
  addUserCard,
  ICardNumber,
} from "../reducers/game/gameSlice";
import { createReadStream } from "fs";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 424px;
  margin: 0 auto;
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
                hidden={cardHidden}
                onClick={
                  gameState.status === "playing" && cardHidden
                    ? () => dispatch(addUserCard(card))
                    : undefined
                }
              >
                {card}
              </Card>
              {(i + 1) % 4 == 0 && <div style={{ flexBasis: "100%" }} />}
            </>
          );
        })}
      </CardContainer>
      {gameState.status === "initial" && (
        <button onClick={() => dispatch(setGameStatus("playing"))}>
          Start
        </button>
      )}
    </section>
  );
};

export default GameBoard;
