import React from 'react';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import HelpScreen from '../screens/HelpScreen';
import AboutScreen from '../screens/AboutScreen';
import {Icon} from 'react-native-elements';
import {useTheme} from '../utils/ThemeContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  const {colors, isDark} = useTheme();

  function MyStack() {
    const headerStyle = {
      headerStyle: {
        borderBottomWidth: 0.5,
        borderBottomColor: colors.bottomNavigation,
        backgroundColor: colors.topNavigation,
      },
      headerTitleStyle: {
        color: colors.font,
      },
      headerTintColor: colors.font,
    };
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
        <Stack.Screen
          options={headerStyle}
          name="Help"
          component={HelpScreen}
        />
        <Stack.Screen
          options={headerStyle}
          name="About"
          component={AboutScreen}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
      }}
      initialRouteName="Chat"
      tabBarOptions={{
        style: {
          height: 60,
          backgroundColor: colors.bottomNavigation,
        },
        labelStyle: {
          fontFamily: 'Roboto-Bold',
        },
        activeTintColor: colors.blue,
        inactiveTintColor: colors.inactiveIcon,
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: color,
                fontSize: 12,
                marginBottom: 8,
                marginTop: -5,
              }}>
              Chat
            </Text>
          ),
          tabBarIcon: ({color}) => {
            return (
              <Icon name="chatbubbles" type="ionicon" color={color} size={25} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MyStack}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                fontFamily: 'Roboto-Bold',
                color: color,
                fontSize: 12,
                marginBottom: 8,
                marginTop: -5,
              }}>
              Settings
            </Text>
          ),
          tabBarIcon: ({color}) => {
            return (
              <Icon name="settings" type="ionicon" color={color} size={25} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
