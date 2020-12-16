import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {
  getIp,
  getPort,
  getName,
  setIp,
  setPort,
  setName,
} from '../utils/AsyncStorage.js';
import SettingOption from '../components/SettingOption';
import {Icon} from 'react-native-elements';
import {useTheme} from '../utils/ThemeContext';
import TextInputMask from 'react-native-text-input-mask';

const AccountScreen = () => {
  const {colors, isDark} = useTheme();
  const [ip, setLocalIp] = useState('');
  const [port, setLocalPort] = useState('');
  const [name, setLocalName] = useState('');
  const [inputIP, setInputIP] = useState('');
  const [inputPort, setInputPort] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');

  const styles = {
    screen: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 14,
      textTransform: 'uppercase',
      paddingHorizontal: 40,
      letterSpacing: 0.8,
      marginTop: 20,
      color: colors.font,
    },
    inputContainer: {
      width: '100%',
      flexDirection: 'row',
      marginVertical: 10,
    },
    input: {
      fontSize: 17,
      width: '100%',
      paddingHorizontal: 40,
      backgroundColor: colors.options,
      color: colors.font,
    },
    buttonContainer: {
      width: '85%',
      marginTop: 35,
      alignSelf: 'center',
      backgroundColor: colors.blue,
      borderRadius: 7,
      alignItems: 'center',
    },
    button: {padding: 10, color: 'white', fontSize: 15},
    titleLogout: {
      fontStyle: 'italic',
      color: colors.font,
      paddingLeft: 40,
      marginTop: 50,
    },
    buttonLogout: {
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

  useEffect(() => {
    getIp(setLocalIp);
    getPort(setLocalPort);
    getName(setLocalName);
  }, []);

  const inputLetterHandler = (inputText) => {
    setEnteredUsername(inputText);
  };

  const inputIPHandler = (inputIP) => {
    setInputIP(inputIP);
  };

  const inputPortHandler = (inputPort) => {
    inputPort = inputPort.replace(/[^0-9]/g, '');
    setInputPort(inputPort);
  };

  const LogInHandler = () => {
    setIp(inputIP);
    setPort(inputPort);
    setName(enteredUsername);
    Keyboard.dismiss();
  };

  const handleLogOut = () => {
    Alert.alert('Confirm Log Out', 'Are you sure you want to log out?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'I am sure',
        onPress: () => {
          setIp('');
          setPort('');
          setName('');
        },
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={name}
          style={styles.input}
          onChangeText={(event) => inputLetterHandler(event)}
          value={enteredUsername}
          placeholderTextColor={colors.inactiveIcon}
        />
      </View>
      <Text style={styles.title}>IP</Text>
      <View style={styles.inputContainer}>
        <TextInputMask
          mask={'[099]{.}[099]{.}[099]{.}[099]'}
          keyboardType="numeric"
          placeholder={ip}
          style={styles.input}
          placeholderTextColor={colors.inactiveIcon}
          onChangeText={(event) => inputIPHandler(event)}
          value={inputIP}
        />
      </View>
      <Text style={styles.title}>Port</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          placeholder={port}
          style={styles.input}
          onChangeText={(event) => inputPortHandler(event)}
          value={inputPort}
          placeholderTextColor={colors.inactiveIcon}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => LogInHandler()}>
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.titleLogout}>
        You can come back whenever you want!
      </Text>
      <TouchableOpacity
        style={styles.buttonLogout}
        onPress={() => {
          handleLogOut();
        }}>
        <Text style={styles.buttonText}>Log out</Text>
        <Icon
          name="chevron-forward-outline"
          type="ionicon"
          color={'black'}
          size={20}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AccountScreen;
