import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
//import {Ionicons} from "react-native-vector-icons/Ionicons";
import PortScreen from '../screens/PortScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import IconTabBar from "../components/BottomTabBar/IconTabBar";
import LabelTabBar from "../components/BottomTabBar/LabelTabBar";
import {Colors} from '../utils/Colors';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Chat"
    tabBarOptions={{
      style:{
        backgroundColor: Colors.lightMode.lightGrey,
      },
      labelStyle: {
        fontFamily: "Roboto-Bold",
      },
      activeTintColor: Colors.lightMode.blue,
      inactiveTintColor: Colors.lightMode.grey,
      keyboardHidesTabBar: true
    }}
      >
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: ({color})=> <LabelTabBar color={color}>Chat</LabelTabBar>,
          tabBarIcon: ({color}) => <IconTabBar name="chatbubbles" color={color} />
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MyStack}
        options={{
          tabBarLabel: ({color})=> <LabelTabBar color={color}>Settings</LabelTabBar>,
          tabBarIcon: ({color}) => <IconTabBar name="settings" color={color} />
        }}
      />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    
     <Stack.Navigator initialRouteName="Settings"  >
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Port" component={PortScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
    
  );
}
export default MyTabs;
