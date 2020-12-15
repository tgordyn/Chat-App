import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {Colors, DARKMODE} from '../../utils/Colors';
import {Icon} from 'react-native-elements';
import {useTheme} from '../../utils/ThemeContext';

const TypeMessage = () => {
  const {colors, isDark} = useTheme();
  const styles = {
    container: {
      backgroundColor: colors.topNavigation,
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 30,
      borderTopColor: colors.background,
      borderTopWidth: 0.5,
    },
    inputText: {
      color: colors.font,
    },
    input: {
      width: '85%',
      borderWidth: colors.borderWidth,
      paddingHorizontal: 15,
      borderColor: colors.grey,
      backgroundColor: colors.backgroundInput,
      borderRadius: 20,
      height: 37,
    },
    sendButton: {
      backgroundColor: colors.blue,
      width: 35,
      height: 35,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      color: 'white',
      fontWeight: 'bold',
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor={
            DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.grey
          }
          placeholder="Type message"
        />
      </View>
      <TouchableOpacity
        //onPress={() => console.log('press')}
        style={styles.sendButton}>
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color="white"
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TypeMessage;
