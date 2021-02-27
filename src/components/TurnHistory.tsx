import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const TurnHistory: React.FC = () => {
  const turnHistoryState = useSelector((state: RootState) => state.turnHistory);
  return (
    <Container>
      {turnHistoryState.history.length > 0 && (
        <div>
          <div>Game history:</div>
          <button>clear history</button>
        </div>
      )}
      {turnHistoryState.history.map((turn) => (
        <div style={{ margin: 8 }}>
          <h4>{turn.outcome}</h4>
          <div>size: {turn.gameSize} </div>
          {turn.outcome === "loss" && <div>plays: {turn.lastRound} </div>}
        </div>
      ))}
    </Container>
  );
};

export default TurnHistory;
