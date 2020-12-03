import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from "react-native-elements";

const HelpScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>HelpScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "Roboto-Bold"
  },
});
export default HelpScreen;
