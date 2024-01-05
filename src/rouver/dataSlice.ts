import { createSlice } from "@reduxjs/toolkit";

export interface DataState {
    layoutDisposition: boolean; // true -> row | false -> card
};

const inicialState: DataState = {
    layoutDisposition: true,
}