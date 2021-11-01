import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: "user",
  initialState: true,
  reducers: {
    getChart() {},
    setChart(state, action) {
      const { payload: chartData } = action;
      return chartData;
    },
  },
});

export const { getChart, setChart } = chartSlice.actions;

export default chartSlice.reducer;
