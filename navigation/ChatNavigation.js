import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import IconTabBar from "../components/BottomTabBar/IconTabBar";
import LabelTabBar from "../components/BottomTabBar/LabelTabBar";

import {Colors, DARKMODE} from '../utils/Colors';
import {Icon} from 'react-native-elements';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      initialRouteName="Chat"
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: DARKMODE
            ? Colors.darkMode.grey
            : Colors.lightMode.lightGrey,
        },
        labelStyle: {
          fontFamily: 'Roboto-Bold',
        },
        activeTintColor: Colors.lightMode.blue,
        inactiveTintColor: DARKMODE
          ? Colors.darkMode.lightGrey
          : Colors.lightMode.grey,
        keyboardHidesTabBar: true,
      }}>
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

const headerStyle = {
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.darkMode.lightGrey,
    backgroundColor: DARKMODE ? Colors.darkMode.grey : 'white',
  },
  headerTitleStyle: {
    color: DARKMODE ? 'white' : 'black',
  },
  headerTintColor: DARKMODE ? 'white' : 'black',
};
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        options={headerStyle}
        name="Settings"
        component={SettingsScreen}
      />
      <Stack.Screen
        options={headerStyle}
        name="Account"
        component={AccountScreen}
      />
      <Stack.Screen options={headerStyle} name="Help" component={HelpScreen} />
      <Stack.Screen
        options={headerStyle}
        name="About"
        component={AboutScreen}
      />
    </Stack.Navigator>
    
  );
}
export default MyTabs;
