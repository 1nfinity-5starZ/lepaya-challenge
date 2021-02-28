import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import Card from "./Card";
import { setCardNumber, ICardNumber } from "../reducers/game/gameSlice";

const options: ICardNumber[] = [4, 8, 12];

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin: 48px auto 24px;
`;

const GameOptions: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <section>
      <h2>Choose the number of cards</h2>
      <CardContainer>
        {options.map((option, i) => (
          <Card key={i} onClick={() => dispatch(setCardNumber(option))}>
            <h2>{option}</h2>
          </Card>
        ))}
      </CardContainer>
    </section>
  );
};

export default GameOptions;
