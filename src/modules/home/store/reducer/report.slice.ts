import { createSlice } from "@reduxjs/toolkit";
import {IReport} from "../../models/IReport";

const reportSlice = createSlice({
    name: "report",
    initialState: [] as IReport[],
    reducers: {
        getReport() {},
        setReport(state, action) {
            const { payload: reportData } = action;
            return [...reportData];
        },
    },
});

export const { getReport, setReport } = reportSlice.actions;

export default reportSlice.reducer;
