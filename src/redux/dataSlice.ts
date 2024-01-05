import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";
import { AppState, AppStore } from "./store";

export interface DataState {
    layoutDisposition: boolean; // true -> row | false -> card
};

const initialState: DataState = {
    layoutDisposition: true,
}

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        setLayoutState(state, action){
            state.layoutDisposition = action.payload;
        },
    },
});

export const { setLayoutState } = dataSlice.actions;

export const getLayoutDisposition = (state: AppState) => state.data.layoutDisposition;

export default dataSlice.reducer;