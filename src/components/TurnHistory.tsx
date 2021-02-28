import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { clearTurnHistory } from "../reducers/turnHistory/turnHistorySlice";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Turn = styled.span<{ outcome: string }>`
  padding: 1em;
  margin: 0 1em;
  border-radius: 4px;
  background-color: ${({ theme, outcome }) =>
    outcome === "win" ? theme.light.success : theme.light.error};
  color: #fff;
`;

const TurnHistory: React.FC = () => {
  const dispatch = useDispatch();
  const turnHistoryState = useSelector((state: RootState) => state.turnHistory);
  return (
    <Container>
      {turnHistoryState.history.length > 0 && (
        <Info>
          <div>Game history:</div>
          <a href="#" onClick={() => dispatch(clearTurnHistory())}>
            clear history
          </a>
        </Info>
      )}
      {turnHistoryState.history.map((turn, i) => (
        <Turn outcome={turn.outcome} key={i}>
          <h4>{turn.outcome}</h4>
          <div>size: {turn.gameSize} </div>
          {turn.outcome === "loss" && <div>plays: {turn.lastRound} </div>}
        </Turn>
      ))}
    </Container>
  );
};

export default TurnHistory;
