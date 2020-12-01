import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import HelpScreen from './HelpScreen';

const SettingsScreen = (props) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button title="Port" onPress={() => props.navigation.navigate('Port')} />
      <Button
        title="About"
        onPress={() => props.navigation.navigate('About')}
      />
      <Button title="Help" onPress={() => props.navigation.navigate('Help')} />
      <Button title="Log Out" onPress={() => console.log('LOG OUT')} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
