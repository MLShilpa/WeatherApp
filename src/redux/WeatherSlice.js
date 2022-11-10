import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {FavData} from '../components/Data';


// console.log(favouriteData);
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '80ae854aeemsh2f7b50c36cfec0cp1bbc6fjsn2c669fd34733',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// export const getPosts = createAsyncThunk( "weather /getposts", async ()=>{
//     fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=%3CREQUIRED%3E', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));
// })
const BASE_URL = 'https://weatherapi-com.p.rapidapi.com/';

export const getData = createAsyncThunk('weather/getData', async (string) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '80ae854aeemsh2f7b50c36cfec0cp1bbc6fjsn2c669fd34733',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    },
  }
  const response = await fetch(BASE_URL+`current.json?q=${string}`, options);
  try {
    const data = response.json();
    console.log('hello',data)
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const WeatherSlice = createSlice({
  name: 'weather',
  initialState: {
    list: [],
    status: null,
  },

  extraReducers: {
    [getData.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getData.fulfilled]: (state, {payload}) => {
      state.list = payload;
      state.status = 'success';
    },
    [getData.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// export const {add} = WeatherSlice.actions;

export default WeatherSlice.reducer;
