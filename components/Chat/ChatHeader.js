import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useTheme} from '../../utils/ThemeContext';
import {load} from '../../utils/AsyncStorage';

const ChatHeader = (props) => {
  const [name, setName] = useState('');
  const {colors, isDark} = useTheme();
  const [initial, setInitial] = useState('U');

  useEffect(() => {
    load(setName);
    handleInitial(name.name);
  }, [name]);

  const handleInitial = (string) => {
    if (typeof string == 'string') {
      setInitial(string[0].toUpperCase());
    } else {
      setInitial('U');
    }
  };
  const styles = {
    header: {
      height: 65,
      backgroundColor: colors.topNavigation,
      flexDirection: 'row',
      paddingHorizontal: 30,
      alignItems: 'center',
      borderBottomColor: colors.background,
      borderBottomWidth: 0.5,
    },
    avatarContainer: {
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'orange',
      marginRight: 15,
    },
    avatarLetters: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 17,
    },
    name: {
      fontSize: 17,
      color: colors.font,
    },
  };

  return (
    <View style={styles.header}>
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarLetters}>{initial}</Text>
      </View>
      <Text style={styles.name}>{name.name ? name.name : 'Username'}</Text>
    </View>
  );
};

export default ChatHeader;
