import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import PortScreen from '../screens/PortScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import {Colors} from '../utils/Colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
      activeColor={Colors.lightMode.blue}
      inactiveColor={Colors.lightMode.grey}
      barStyle={{backgroundColor: Colors.lightMode.lightGrey}}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={MyStack} />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Port" component={PortScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
export default MyTabs;
