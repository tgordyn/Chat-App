import React from 'react';
import {View} from 'react-native';
import SettingOption from '../components/SettingOption';
import {useTheme} from '../utils/ThemeContext';

const SettingsScreen = (props) => {
  const {colors, isDark} = useTheme();
  const styles = {
    screen: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
    },
    hr: {
      height: 0.5,
      width: '100%',
      backgroundColor: colors.font,
      opacity: 0.5,
    },
  };
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

export default SettingsScreen;
