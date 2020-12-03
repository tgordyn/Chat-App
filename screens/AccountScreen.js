import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';
import {Colors} from '../utils/Colors';
import SettingOption from '../components/SettingOption';
import {TouchableOpacity} from 'react-native-gesture-handler';
import TextInputMask from 'react-native-text-input-mask';

const PortScreen = () => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredIp, setEnteredIP] = useState('');
  const [enteredPort, setEnteredPort] = useState('');

  const inputLetterHandler = (inputText) => {
    // inputText = inputText.replace(/\d+|^\s+$/g, '');
    setEnteredUsername(inputText);
  };

  const inputIPHandler = (inputIP) => {
    setEnteredIP(inputIP);
  };

  const inputPortHandler = (inputPort) => {
    inputPort = inputPort.replace(/[^0-9]/g, '');
    setEnteredPort(inputPort);
  };

  const LogInHandler = () => {
    console.log('test');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Username</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          style={styles.input}
          onChangeText={(event) => inputLetterHandler(event)}
          value={enteredUsername}
        />
      </View>
      <Text style={styles.title}>IP</Text>
      <View style={styles.inputContainer}>
        <TextInputMask
          mask={'[099]{.}[099]{.}[099]{.}[099]'}
          keyboardType="numeric"
          placeholder="IP"
          style={styles.input}
          onChangeText={(event) => inputIPHandler(event)}
          value={enteredIp}
        />
      </View>
      <Text style={styles.title}>Port</Text>
      <View style={styles.inputContainer}>
        <TextInput
          keyboardType="numeric"
          placeholder="Port"
          style={styles.input}
          onChangeText={(event) => inputPortHandler(event)}
          value={enteredPort}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={LogInHandler}>
        <Text style={styles.button}>Save</Text>
      </TouchableOpacity>
      <Text style={styles.titleLogout}>
        You can come back whenever you want!
      </Text>
      <SettingOption
        title="Log Out"
        logout={true}
        style={{marginTop: 8}}
        arrow={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    paddingHorizontal: 40,
    letterSpacing: 0.8,
    marginTop: 20,
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
    backgroundColor: Colors.lightMode.lightGrey,
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
});

export default PortScreen;
