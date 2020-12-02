import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PortScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Username</Text>
      <Text>IP</Text>
      <Text>Port</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PortScreen;
