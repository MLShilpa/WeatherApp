import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import react-native-gesture-handler from 'react-native-gesture-handler';

import Home from "../screens/home/Home";
import Favourite from '../screens/favourite/Favourite';
import RecentSearch from '../screens/recentsearch/RecentSearch';
const Drawer = createDrawerNavigator();

function DrawerNav() {
    return (
            <Drawer.Navigator initialRouteName="Home" >
                <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
                <Drawer.Screen name="Favourite" component = {Favourite} options={{headerShown:false}}/>
                <Drawer.Screen name="RecentSearch" component={RecentSearch} options={{headerShown:false}}/>
            </Drawer.Navigator>
    )
}

export default DrawerNav;