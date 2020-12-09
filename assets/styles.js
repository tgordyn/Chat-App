import React from 'react';
import {useTheme} from '../utils/ThemeContext';

const Styles = (string) => {
  const {colors, isDark} = useTheme();

  const SettingOption = {
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
  const ChatScreen = {
    screen: {
      flex: 1,
      backgroundColor: DARKMODE
        ? Colors.darkMode.darkGrey
        : Colors.lightMode.lightGrey,
    },
  };

  switch (string) {
    case 'SettingOption':
      return SettingOption;
      break;
    case 'ChatScreen':
      return ChatScreen;
      break;
  }
};

export default Styles;
