import React from 'react';
import { Provider } from 'react-redux';
import Store from '/Volumes/Development/Projects/WeatherApp/src/redux/Store.js'

import DrawerNav from '../WeatherApp/src/navigation/DrawerNav'
const App = () => {
  return(
   <Provider store={Store}>
    <DrawerNav/>
   </Provider>

  )
};

export default App;
