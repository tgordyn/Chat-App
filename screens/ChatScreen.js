import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../utils/Colors';

const ChatScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>ChatScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.lightMode.lightGrey,
  },
});

export default ChatScreen;
