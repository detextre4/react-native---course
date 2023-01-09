import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/Home"
import Settings from "../screens/Settings"

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home}></Tab.Screen>
      <Tab.Screen name="Settings" component={Settings}></Tab.Screen>
    </Tab.Navigator>
  )
}
