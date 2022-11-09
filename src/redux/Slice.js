import { createSlice } from "@reduxjs/toolkit";
import { FavData } from "../components/Data";

const favouriteData = FavData;

export const Slice = createSlice({
    name:'weather',
    initialState:{
        value: favouriteData ,
     },
reducers: {
        add: () =>{},
},
});

export const { add} = Slice.actions;

export default Slice.reducer;
