import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {useTheme} from "@react-navigation/native";
//import {useTheme} from "../assets/ThemeProvider";  

const HelpScreen = (props) => {
  const {colors} = useTheme();
  // const {children} = props
  // const {colors, isDark} = useTheme()
//console.log("colores",colors.background)
//console.log(props)
  return (
    
    <View style={{backgroundColor: colors.background, ...styles.screen}}>
      <Text>HelpScreen</Text>
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
export default HelpScreen;
