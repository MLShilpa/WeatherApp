import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FavouriteReducer from "./FavouriteSlice";
import SliceReducer from './WeatherSlice'

const persistConfig = {
    key: 'root',
    version:1,
    storage: AsyncStorage,
};

const reducer = combineReducers({
    weather: SliceReducer,
    favourite: FavouriteReducer,
});

const persistRed = persistReducer(persistConfig, reducer);

export default configureStore({
    reducer:persistRed,
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck:false,
    }),
})

// const Store = configureStore({
//     reducer:{
//         weather: SliceReducer,
// },
// })

// export default Store;