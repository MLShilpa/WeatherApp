import React from 'react';

import DrawerNav from '../WeatherApp/src/navigation/DrawerNav'
import { NavigationContainer} from "@react-navigation/native";
import Home from './src/screens/home/Home';
import Empty from './src/components/Empty';
const App = () => {
  return(
    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>

  )
};

export default App;
