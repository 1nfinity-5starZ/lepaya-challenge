import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { AppThunk, RootState } from "../../store/store";

export type ICardNumber = 0 | 4 | 8 | 12;
export type IGameStatus = "new" | "initial" | "playing" | "loss" | "win";

interface CounterState {
  status: IGameStatus;
  cardNumber: ICardNumber;
  cardSequence: number[];
  winSequence: number[];
  userInputSequence: number[];
}

const initialState: CounterState = {
  status: "new",
  cardNumber: 0,
  cardSequence: [],
  winSequence: [],
  userInputSequence: [],
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCardNumber: (state, action: PayloadAction<ICardNumber>) => {
      // Initialize numbers array
      const numberPoolSize = 100;
      const numberPool = Array.from(
        { length: numberPoolSize },
        (_, i) => i + 1
      );

      let newCardSequence: number[] = [];
      for (let i = 0; i < action.payload; i++) {
        const index = Math.floor(Math.random() * numberPool.length);
        const item = numberPool.splice(index, 1);
        newCardSequence.push(item[0]);
      }

      // Set all state accordingly
      state.cardNumber = action.payload;
      state.cardSequence = newCardSequence;
      state.winSequence = [...newCardSequence].sort((a, b) => a - b);
      state.status = "initial";
    },
    setGameStatus: (state, action: PayloadAction<IGameStatus>) => {
      state.status = action.payload;

      if (action.payload === "new") {
        state.userInputSequence = [];
      }
    },
    addUserCard: (state, action: PayloadAction<number>) => {
      state.userInputSequence.push(action.payload);

      if (state.userInputSequence.length < state.winSequence.length) {
        if (
          state.winSequence[state.userInputSequence.length - 1] !==
          action.payload
        ) {
          state.status = "loss";
        }
      } else {
        state.status = "win";
      }
    },
  },
});

export const { setCardNumber, setGameStatus, addUserCard } = gameSlice.actions;

export default gameSlice.reducer;
