import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from "../Navigation/drawerNavigation";
import PostScreen from "../Screens/postScreen";

const stack= createStackNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator
    initalRouteName="Home"
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name="Home" component={TabNavigator}/>
      <Stack.Screen name="PostScreen" component={PostScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
