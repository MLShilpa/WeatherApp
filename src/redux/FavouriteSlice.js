import { createSlice } from "@reduxjs/toolkit";
import { FavData } from "../components/Data";

const favouriteData = FavData;

export const FavouriteSlice =createSlice({
    name: 'favourite',
    initialState: {
      value:[],
      recent:[],
      favourite:false,
      recentFavState:false,
    },
    reducers:{
        addCity: (state, action) => {
          const val = state.value.map(value => value.id);

          if (val.includes(action.payload.id)) {
            alert('Already Exist');
          } else {
            state.value.push(action.payload);
          }
        },
        deleteCity: (state, action) => {
            // console.log('inside delete reducer')
            console.log(action.payload.id)
            state.value = state.value.filter(site=>site.id !== action.payload.id)
          },
          setFavourite:(state,action)=>{
            state.favourite = action.payload
          },


          recentCity:(state,action)=>{
            state.recent.push(action.payload);
          },
          deleteRecentCity:(state,action)=>{
            state.recent = state.recent.filter(site => site.id !== action.payload.id);
          },


          setRecentFav:(state,action)=>{
            state.recentFavState = action.payload
          },


          removeAll:(state,action)=>{
            state.value=[];
          },
          clearAll:(state,action)=>{
            state.recent=[];
          }
    }
})

export const {addCity,deleteCity, setFavourite, recentCity, deleteRecentCity, setRecentFav,clearAll,removeAll} =FavouriteSlice.actions;
export default FavouriteSlice.reducer;