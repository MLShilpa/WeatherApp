import React from "react";

import Home from "../screens/home/Home";
import { createStackNavigator } from "@react-navigation/stack";
import Search from "../screens/search/Search";

const Stack = createStackNavigator();

const StackNav = ({navigation}) =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default StackNav;