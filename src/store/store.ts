import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import gameSlice from "../reducers/game/gameSlice";
import turnHistorySlice from "../reducers/turnHistory/turnHistorySlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "turnHistory",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, turnHistorySlice);

export const store = configureStore({
  reducer: {
    game: gameSlice,
    turnHistory: persistedReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
