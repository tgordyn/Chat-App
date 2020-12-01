import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import ChatNavigation from './navigation/ChatNavigation';
import {NavigationContainer} from '@react-navigation/native';
const App = () => {
  return (
    <NavigationContainer>
      <ChatNavigation />
    </NavigationContainer>
  );
  // return (
  //   <View>
  //     <Text>Prueba</Text>
  //   </View>
  // );
};

const styles = StyleSheet.create({});

export default App;
