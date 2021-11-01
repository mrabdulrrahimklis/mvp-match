import { createSlice } from "@reduxjs/toolkit";
import {IGateway} from "../../models/IGateway";

const gatewaySlice = createSlice({
    name: "gateway",
    initialState: [] as IGateway[],
    reducers: {
        getGateway() {},
        setGateway(state, action) {
            const { payload: gatewayData } = action;
            return [...gatewayData];
        },
    },
});

export const { getGateway, setGateway } = gatewaySlice.actions;

export default gatewaySlice.reducer;
