import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../utils/ThemeContext';

const AboutScreen = () => {
  const {colors, isDark} = useTheme();
  const styles = {
    screen: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 60,
      backgroundColor: colors.options,
    },
    team: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 40,
      color: colors.font,
    },
    member: {
      textAlign: 'center',
      marginVertical: 20,
      fontSize: 15,
      color: colors.font,
    },
    hr: {
      width: 300,
      backgroundColor: colors.font,
      height: 0.7,
      alignSelf: 'center',
    },
    legal: {
      marginBottom: 30,
      color: colors.font,
      fontStyle: 'italic',
      fontSize: 13,
    },
  };
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.team}>Team B</Text>
        <View style={styles.hr}></View>
        <Text style={styles.member}>Tomas Gordyn</Text>
        <View style={styles.hr}></View>
        <Text style={styles.member}>Daniel Portillo</Text>
        <View style={styles.hr}></View>
        <Text style={styles.member}>Candelaria Espeche</Text>
        <View style={styles.hr}></View>
      </View>
      <Text style={styles.legal}>Dec. 2020 - React Native Academy</Text>
    </View>
  );
};

export default AboutScreen;
