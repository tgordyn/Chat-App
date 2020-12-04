import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../utils/Colors';

const AboutScreen = () => {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 60,
  },
  team: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  member: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 15,
  },
  hr: {
    width: 300,
    backgroundColor: Colors.lightMode.grey,
    height: 1,
    alignSelf: 'center',
  },
  legal: {
    marginBottom: 30,
    color: Colors.lightMode.darkGrey,
    fontStyle: 'italic',
    fontSize: 13,
  },
});

export default AboutScreen;
