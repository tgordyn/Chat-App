import React from 'react';
import {TouchableOpacity, Switch, Text} from 'react-native';
import {Colors} from '../utils/Colors';
import {useTheme} from '../utils/ThemeContext';
import {Icon} from 'react-native-elements';


const SettingOption = (props) => {
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

export default SettingOption;
