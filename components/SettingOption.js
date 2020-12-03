import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Switch, Text} from 'react-native';
import {Colors} from '../utils/Colors';
import {Icon} from 'react-native-elements';

const SettingOptions = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <TouchableOpacity
      style={{...props.style, ...styles.button}}
      onPress={() => {
        props.routeName ? props.navigation.navigate(props.routeName) : null;
      }}>
      <Text style={styles.buttonText}>{props.title}</Text>
      {props.arrow ? (
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color={Colors.darkMode.grey}
          size={20}
        />
      ) : null}
      {props.switch ? (
        <Switch
          value={darkMode}
          trackColor={{
            true: Colors.lightMode.lightBlue,
            false: Colors.lightMode.grey,
          }}
          thumbColor={Colors.lightMode.blue}
          onValueChange={(newValue) => setDarkMode(newValue)}
        />
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    backgroundColor: Colors.lightMode.lightGrey,
    paddingVertical: 13,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: Colors.lightMode.darkGrey,
  },
});
export default SettingOptions;