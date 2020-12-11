import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors, DARKMODE} from '../utils/Colors';
import SettingOption from '../components/SettingOption';
import {Icon} from 'react-native-elements';
import TextInputMask from 'react-native-text-input-mask';
import {load, save} from '../utils/AsyncStorage.js';

const AccountScreen = () => {
  const [enteredConfig, setEnteredConfig] = useState('');
  const [enteredUsername, setEnteredUsername] = useState('');
  const [inputIP, setInputIP] = useState('');
  const [inputPort, setInputPort] = useState('');

  useEffect(() => {
    load(setEnteredConfig);
  }, []);

  const inputLetterHandler = (inputText) => {
    // inputText = inputText.replace(/\d+|^\s+$/g, '');
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
    if (enteredUsername != '') {
      save(enteredUsername, inputIP, inputPort);
    } else {
      save(enteredConfig.name, enteredConfig.ip, enteredConfig.port);
    }
    
  };

  const handleLogOut = () => {
    Alert.alert('Confirm Log Out', 'Are you sure you want to log out?', [
      {text: 'Cancel', style: 'cancel'},
      {
        text: 'I am sure',
        onPress: () => {
          setEnteredConfig('');
        },
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={enteredConfig.name}
          style={styles.input}
          onChangeText={(event) => inputLetterHandler(event)}
          value={enteredUsername}
          placeholderTextColor={
            DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.grey
          }
        />
      </View>
      <Text style={styles.title}>IP</Text>
      <View style={styles.inputContainer}>
        <TextInputMask
          mask={'[099]{.}[099]{.}[099]{.}[099]'}
          keyboardType="numeric"
          placeholder={enteredConfig.ip}
          style={styles.input}
          placeholderTextColor={
            DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.grey
          }
          onChangeText={(event) => inputIPHandler(event)}
          value={inputIP}
        />
      </View>
      <Text style={styles.title}>Port</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          placeholder={enteredConfig.port}
          style={styles.input}
          onChangeText={(event) => inputPortHandler(event)}
          value={inputPort}
          placeholderTextColor={
            DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.grey
          }
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

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: DARKMODE ? Colors.darkMode.darkGrey : 'white',
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingHorizontal: 40,
    letterSpacing: 0.8,
    marginTop: 20,
    color: DARKMODE ? Colors.darkMode.lightGrey : Colors.lightMode.darkGrey,
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
    backgroundColor: DARKMODE
      ? Colors.darkMode.grey
      : Colors.lightMode.lightGrey,
    color: DARKMODE ? 'white' : Colors.lightMode.darkGrey,
  },
  buttonContainer: {
    width: '85%',
    marginTop: 35,
    alignSelf: 'center',
    backgroundColor: Colors.lightMode.blue,
    borderRadius: 7,
    alignItems: 'center',
  },
  button: {padding: 10, color: 'white', fontSize: 15},
  titleLogout: {
    fontStyle: 'italic',
    color: Colors.lightMode.darkGrey,
    paddingLeft: 40,
    marginTop: 50,
  },
  buttonLogout: {
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

export default AccountScreen;
