import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Text} from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import {Colors} from '../utils/Colors';
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
      // options={{
      //   activeColor: Colors.lightMode.blue,
      //   inactiveColor: Colors.lightMode.grey,
      //   barStyle: {backgroundColor: Colors.lightMode.lightGrey}
      // }}
      //activeColor={Colors.lightMode.blue}
      //inactiveColor={Colors.lightMode.grey}
      //barStyle={{backgroundColor: Colors.lightMode.lightGrey}}
  
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
          tabBarLabel: ({color})=> <Text style={{fontFamily: "Roboto-Bold", color: color, fontSize: 13 }}>Chat</Text>,
          tabBarIcon: ({color}) => {
            return (
              <Icon
                name="chatbubbles"
                type="ionicon"
                color={color}
                size={30}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MyStack}
        options={{
          tabBarLabel:  ({color})=> <Text style={{fontFamily: "Roboto-Bold", color: color, fontSize: 13 }}>Settings</Text>, 
          tabBarIcon: ({color}) => {
            return (
              <Icon
                name="settings"
                type="ionicon"
                color={color}
                size={30}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Help" component={HelpScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );
}
export default MyTabs;
