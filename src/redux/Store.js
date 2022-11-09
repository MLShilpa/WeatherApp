import { configureStore } from "@reduxjs/toolkit";

import SliceReducer from '../redux/Slice'

const Store = configureStore({
    reducer:{
        weather: SliceReducer,
},
})

export default Store;