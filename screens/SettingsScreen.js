import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../utils/Colors';

const SettingsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Port')}>
        <Text style={styles.buttonText}>Username, IP and Port</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('Help')}>
        <Text style={styles.buttonText}>Help</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('About')}>
        <Text style={styles.buttonText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Log out')}>
        <Text style={styles.buttonText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: Colors.lightMode.lightGrey,
    paddingVertical: 13,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightMode.darkGrey,
    // paddingLeft: 25,
  },
});

export default SettingsScreen;
