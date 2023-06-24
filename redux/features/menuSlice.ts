import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type menuState = {
  lists: Array<string>;
  name: string | undefined;
};

const menuList = ["new", "shortlist", "interview", "hired", "reject"];

const initialState = { lists: menuList, name: menuList[0] } as menuState;

export const menu = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenu: (state, action: PayloadAction<string | undefined>) => {
      state.name = action.payload;
    },
  },
});

export const { setMenu } = menu.actions;
export default menu.reducer;
