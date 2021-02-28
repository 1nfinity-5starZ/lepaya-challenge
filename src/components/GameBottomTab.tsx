import React from "react";
import styled from "styled-components";
import TurnHistory from "./TurnHistory";
import useTurnHistory from "../hooks/useTurnHistory";

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1.5em;
`;

const GameBottomTab: React.FC = () => {
  useTurnHistory();
  return (
    <Container>
      <TurnHistory />
    </Container>
  );
};

export default GameBottomTab;
