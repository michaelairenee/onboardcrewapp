import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/data.json");
  const jsonData = await response.json();
  return jsonData;
});

type Note = {
  staff_name: string;
  note: string;
};

type Talent = {
  id: number;
  fullname: string;
  stage: string;
  notes: Array<Note>;
};

type talentState = {
  data: Array<Talent>;
  status: string;
  error: any;
};

const initialState = { data: [], status: "idle", error: null } as talentState;

const talent = createSlice({
  name: "talent",
  initialState,
  reducers: {
    setTalent: (
      state,
      action: PayloadAction<{ id: number; stage: string }>
    ) => {
      const { id, stage } = action.payload;
      const itemIndex = state.data.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        state.data[itemIndex] = { ...state.data[itemIndex], stage: stage };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setTalent } = talent.actions;
export default talent.reducer;
