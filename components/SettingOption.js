import React from 'react';
import {StyleSheet, TouchableOpacity, Switch, Text, Alert} from 'react-native';
import {Colors, DARKMODE} from '../utils/Colors';
import {Icon} from 'react-native-elements';
import {useTheme} from '../utils/ThemeContext';

const SettingOptions = (props) => {
  const {setScheme, isDark} = useTheme();
  const {colors} = useTheme();
  const toggleScheme = () => {
    isDark ? setScheme('light') : setScheme('dark');
  };

  const styles = {
    button: {
      width: '100%',
      backgroundColor: colors.options,
      paddingVertical: 13,
      paddingHorizontal: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 16,
      color: colors.font,
    },
  };

  const handleLogOut = () => {
    Alert.alert('Confirm Log Out', 'Are you sure you want to log out?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'I am sure'},
    ]);
  };

  return (
    <TouchableOpacity
      style={{...props.style, ...styles.button}}
      onPress={() => {
        props.routeName
          ? props.navigation.navigate(props.routeName)
          : props.logout
          ? handleLogOut()
          : null;
      }}>
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.arrow ? (
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color={colors.font}
          size={20}
        />
      ) : null}
      {props.switch ? (
        <Switch
          value={isDark}
          trackColor={{
            true: Colors.lightMode.lightBlue,
            false: Colors.lightMode.grey,
          }}
          thumbColor={Colors.lightMode.blue}
          onValueChange={(newValue) => toggleScheme(newValue)}
        />
      ) : null}
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     width: '100%',
//     backgroundColor: colors.background,
//       // ? Colors.darkMode.grey
//       // : Colors.lightMode.lightGrey,
//     paddingVertical: 13,
//     paddingHorizontal: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   buttonText: {
//     fontSize: 16,
//     color: DARKMODE ? Colors.lightMode.grey : Colors.lightMode.darkGrey,
//   },
// });
export default SettingOptions;
