import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppThunk, RootState } from "../../store/store";
import { ICardNumber } from "../game/gameSlice";

export interface Turn {
  date: string;
  outcome: "win" | "loss";
  gameSize: ICardNumber;
  lastRound: number;
}

interface CounterState {
  history: Turn[];
}

interface TurnAction {
  outcome: "win" | "loss";
  gameSize: ICardNumber;
  lastRound: number;
}

const initialState: CounterState = {
  history: [],
};

export const turnHistorySlice = createSlice({
  name: "turnHistory",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addTurnHistory: (state, action: PayloadAction<TurnAction>) => {
      state.history.push({
        ...action.payload,
        date: new Date().toISOString(),
      });
    },
  },
});

export const { addTurnHistory } = turnHistorySlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(setCardNumber(4));
//   }, 1000);
// };

export default turnHistorySlice.reducer;
