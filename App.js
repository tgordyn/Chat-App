import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ChatNavigation from './navigation/ChatNavigation';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
//import {AppearanceProvider, useColorScheme} from "react-native-appearance";
//import {ThemeProvider} from "./assets/ThemeProvider";


const dark = true;
const scheme = dark;
const MyDarkTheme = {
  //dark: true,
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "red",
    background: "lime",
    text: "orange"
  },
};

const App = () => {
 
  return (
    
    // <AppearanceProvider>
    //   <ThemeProvider>
    <NavigationContainer theme={dark===true? MyDarkTheme : DefaultTheme}> 
      <ChatNavigation />
    </NavigationContainer>
    // </ThemeProvider>
    // </AppearanceProvider>
    
  );
};

const styles = StyleSheet.create({});

export default App;
