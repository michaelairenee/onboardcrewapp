import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./features/menuSlice";
import talentReducer from "./features/talentSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    menuReducer,
    talentReducer,
  },
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
