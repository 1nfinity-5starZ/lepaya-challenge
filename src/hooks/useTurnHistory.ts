import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTurnHistory } from "../reducers/turnHistory/turnHistorySlice";
import { RootState } from "../store/store";

const useTurnHistory = () => {
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);

  // Watch for win/loss statuses and push to history
  useEffect(() => {
    if (gameState.status === "loss" || gameState.status === "win") {
      dispatch(
        addTurnHistory({
          outcome: gameState.status,
          gameSize: gameState.cardNumber,
          lastRound: gameState.userInputSequence.length,
        })
      );
    }
  }, [gameState.status]);
};

export default useTurnHistory;
