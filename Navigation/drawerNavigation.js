import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from "../Navigation/stackNavigator";
import Profile from "../Screens/profile";
const Drawer = createDrawerNavigator();

const  DrawerNavigator = () => {
    return(
        <Drawer.Navigator> 
            <Drawer.Screen name="Home" compenent={StackNavigator}/>
            <Drawer.Screen name="Profile" compenent={Profile}/>
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
