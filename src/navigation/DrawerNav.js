import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import react-native-gesture-handler from 'react-native-gesture-handler';

import Favourite from '../screens/favourite/Favourite';
import RecentSearch from '../screens/recentsearch/RecentSearch';
import StackNav from "./StackNav";
import { NavigationContainer} from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator  >
                <Drawer.Screen name="Home" component={StackNav} options={{headerShown:false}}/>
                <Drawer.Screen name="Favourite" component = {Favourite} options={{headerShown:false}}/>
                <Drawer.Screen name="RecentSearch" component={RecentSearch} options={{headerShown:false}}/>
            </Drawer.Navigator>
      </NavigationContainer>
    )
}

export default DrawerNav;