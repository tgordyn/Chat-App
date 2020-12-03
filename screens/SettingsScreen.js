import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../utils/Colors';
import SettingOption from '../components/SettingOption';

const SettingsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <SettingOption
        navigation={props.navigation}
        routeName="Account"
        title="Account settings"
        arrow={true}
        style={{marginTop: 25}}
      />

      <SettingOption
        navigation={props.navigation}
        routeName="Help"
        title="Help"
        arrow={true}
        style={{marginTop: 20}}
      />
      <View style={styles.hr}></View>
      <SettingOption
        navigation={props.navigation}
        routeName="About"
        title="About"
        arrow={true}
        style={{marginBottom: 20}}
      />

      <SettingOption
        navigation={props.navigation}
        title="Dark mode"
        switch={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  hr: {
    height: 0.5,
    width: '100%',
    backgroundColor: Colors.lightMode.grey,
  },
});

export default SettingsScreen;
