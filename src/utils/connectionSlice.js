import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
    name: "connection",
    initialState: [],
    reducers: {
        addConnection: (state, action) => action.payload,
        removeConnections: () => [],
    }
});

export const { addConnection, removeConnections } = connectionSlice.actions;
 
export default connectionSlice.reducer;
